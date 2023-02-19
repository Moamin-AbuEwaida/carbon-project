<template>
  <div>
    <div class="main">
      <!-- head -->
      <div class="head">
        <b-icon icon="arrow-up " font-scale="1.2"></b-icon>
        <p>Reporting company</p>
      </div>
      <!-- cards -->
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.company variant="white">
              <div class="bar">
                <b-icon icon="chevron-compact-down"></b-icon>
                <p>Company facilities</p>
                <div class="progress">
                  <b-progress :value="value" variant="secondary"></b-progress>
                </div>
                <p>{{ value }}%</p>
              </div>
            </b-button>
          </b-card-header>
          <b-collapse id="company" accordion="my-company" role="tabpanel">
            <b-card-body>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.fuel variant="white">
                    <div class="bar">
                      <b-icon icon="chevron-compact-down"></b-icon>
                      <p>Fossil Fuels</p>
                    </div>
                  </b-button>
                </b-card-header>
                <b-collapse id="fuel" accordion="my-fuel" role="tabpanel">
                  <b-card-body>
                    <b-card no-body class="mb-1">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-button block v-b-toggle.headquarter variant="white">
                          <div class="bar">
                            <b-icon icon="chevron-compact-right"></b-icon>
                            <p>Headquarters</p>
                          </div>
                        </b-button>
                      </b-card-header>
                      <b-collapse
                        id="headquarter"
                        accordion="my-headquarter"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card
                            no-body
                            class="mb-1"
                            v-for="card in cards"
                            :key="card.id"
                          >
                            <b-card-header
                              header-tag="header"
                              class="p-1"
                              role="tab"
                            >
                              <b-button
                                block
                                v-b-toggle.office1
                                variant="white"
                              >
                                <div class="bar">
                                  <b-icon icon="chevron-compact-down"></b-icon>
                                  <p>{{ card.room }}</p>
                                </div>
                              </b-button>
                            </b-card-header>
                            <b-collapse
                              :id="card.room"
                              :accordion="card.accordation"
                              role="tabpanel"
                            >
                              <b-card-body>
                                <b-card no-body class="mb-1">
                                  <b-card-header
                                    :header-tag="card.room"
                                    class="p-1"
                                    role="tab"
                                  >
                                    <b-button
                                      block
                                      v-b-toggle.heatMB
                                      variant="white"
                                      @click="setHide"
                                    >
                                      <div class="bar">
                                        <b-icon
                                          icon="square-fill"
                                          variant="secondary"
                                        ></b-icon>
                                        <p>Heating main building</p>
                                      </div>
                                    </b-button>
                                  </b-card-header>
                                  <b-collapse
                                    id="heatMB"
                                    accordion="my-heatMB"
                                    role="tabpanel"
                                  >
                                  </b-collapse>
                                </b-card>
                              </b-card-body>
                            </b-collapse>
                          </b-card>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.process variant="white">
                    <div class="bar">
                      <b-icon icon="chevron-compact-down"></b-icon>
                      <p>Proccess</p>
                    </div>
                  </b-button>
                </b-card-header>
                <b-collapse id="process" accordion="my-process" role="tabpanel">
                </b-collapse>
              </b-card>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <!-- side page -->
      <div class="side-screen" :class="hide">
        <!-- side page head -->
        <div class="side-page-head">
          <div class="text">
            Company facilities > Stationary combustion> Office 1
          </div>
          <b-button variant="light" @click="setHide">
            <b-icon icon="x" font-scale="1.5"></b-icon
          ></b-button>
        </div>
        <!-- side page body -->
        <div class="page-body">
          <h2>Heating main building</h2>
          <div class="tabs">
            <b-tabs content-class="mt-3">
              <b-tab title="Data" active>
                <p style="text-align: start">Type</p>
                <b-form-select
                  v-model="selected"
                  class="drop-list"
                  style="width: 50%; margin-left: -100px"
                >
                  <b-form-select-option
                    v-for="(item, i) in list"
                    :key="i"
                    :value="{ item }"
                    >{{ item }}</b-form-select-option
                  >
                </b-form-select>
              </b-tab>
              <b-tab title="History"><p>History</p></b-tab>
              <b-tab title="Details"><p>Details</p></b-tab>
              <b-tab title="Activity"><p>Activity</p></b-tab>
              <b-tab title="Notes"><p>Notes</p></b-tab>
            </b-tabs>
          </div>
          <!-- attachments part -->
          <div class="uploading">
            <div class="note">
              <b-icon icon="file-earmark" flip-v></b-icon>
              <a>Add note</a>
            </div>
            <div class="attach">
              <b-icon icon="paperclip"></b-icon>
              <a>Add attachment</a>
            </div>
          </div>
          <!-- lower part -->
          <div class="lower-part">
            <!-- left side -->
            <div class="info">
              <b-avatar class="user"></b-avatar>
              <div class="info-content">
                <p>{{ output.data.name }}</p>
                <p class="span">added this data</p>
              </div>
            </div>
            <!-- rightside -->
            <div>
              <p class="span">Just now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "DataView",

  data() {
    return {
      value: 60,
      max: 100,
      output: null,
      cards: [
        {
          id: "o1",
          room: "office1",
          accordation: "my-office1",
        },
        {
          id: "o2",
          room: "office2",
          accordation: "my-office2",
        },
        {
          id: "o3",
          room: "office3",
          accordation: "my-office3",
        },
        {
          id: "o4",
          room: "office4",
          accordation: "my-office4",
        },
        {
          id: "f1",
          room: "factory1",
          accordation: "my-factory1",
        },
        {
          id: "f2",
          room: "factory2",
          accordation: "my-factory2",
        },
      ],
      selected: null,
      list: [
        "Natural Gas",
        "Gas oil",
        "Propane",
        "Mazout",
        "Option5",
        "(Etc.)",
      ],
      hide: "",
    };
  },
  mounted() {
    // fetching user's info
    axios.get("https://swapi.dev/api/people/1/").then((res) => {
      this.output = res;
    });
  },
  methods: {
    toggle: () => {
      console.log("clicked");
    },
    setHide() {
      if (this.hide === "") {
        this.hide = "hidden";
      } else if (this.hide === "hidden") {
        this.hide = "";
      }
    },
  },
};
</script>

<style>
.main {
  background: rgb(246, 242, 242);
  position: absolute;
  width: 95%;
  height: 95%;
  padding: 0px 50px;
}
.head {
  display: flex;
  gap: 5px;
  font-weight: bold;
}

.bar {
  display: flex;
  align-items: center;
  gap: 20px;
}

.bar p {
  padding-top: 15px;
}
.progress {
  width: 130px;
  height: 15px;
}

.side-screen {
  display: none;
  background-color: #fff;
  position: absolute;
  top: -61px;
  right: 0;
  width: 400px;
  height: 100%;
  font-size: 12px;
}
.hidden {
  display: block;
}
.side-page-head {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
}
.side-page-head button {
  border: none;
  background: none;
}
.page-body {
  margin: 20px;
  width: 85%;
}
.tabs {
  margin: 20px 0px;
  width: 101%;
  height: 350px;
  border-bottom: 1px solid rgb(246, 242, 242);
}

.tabs p {
  margin: 20px 40px;
}

.drop-list {
  width: 50%;
  margin-left: 40px;
}
.uploading {
  display: flex;
  flex-direction: column;
  height: 60px;
  gap: 2;
  justify-content: space-between;
}
.note,
.attach {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
.lower-part {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 15px;
}
.lower-part > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info {
  width: 70%;
  gap: 15px;
  font-weight: bold;
  display: flex;
}

.info p {
  margin-top: 10px;
}
.info-content {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  gap: 5px;
}
.span {
  font-weight: 200;
  margin-top: 10px;
}
</style>

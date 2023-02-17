<template>
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
                            <b-button block v-b-toggle.office1 variant="white">
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
  </div>
</template>

<script>
export default {
  name: "MainPage",

  data() {
    return {
      value: 60,
      max: 100,
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
    };
  },
  methods: {
    toggle: () => {
      console.log("clicked");
    },
  },
};
</script>

<style>
.main {
  background: rgb(246, 242, 242);
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -50px;
  left: 55px;
  z-index: 0;
  padding-top: 50px;
  padding-left: 30px;
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
</style>

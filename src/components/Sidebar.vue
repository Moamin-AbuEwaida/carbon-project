<template>
  <div class="sidebar">
    <!-- upper list -->
    <div class="upper-part">
      <div
        v-for="(item, i) in items"
        :key="i"
        @click="setActive"
        :class="{ active }"
        class="icon"
      >
        <b-icon :icon="item.icon"></b-icon>
        <p>{{ item.text }}</p>
      </div>
      <!-- <div class="icon" :class="{ active }" @click="setActive">
        <b-icon icon="bell"></b-icon>
        <p>bell</p>
      </div> -->
    </div>
    <!-- lower part -->
    <div class="lower-part">
      <img src="../assets/lower-image.png" alt="CoffeeBell" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarCompnent",

  data: () => {
    return {
      items: [
        { icon: "house-door", text: "Home" },
        { icon: "list-ul", text: "Data" },
        { icon: "graph-down", text: "Analysis" },
        { icon: "map", text: "Plan" },
      ],
      active: "",
    };
  },
  methods: {
    setActive() {
      console.log("click");
      if (this.active === "") {
        this.active = "active";
      } else if (this.active === "active") {
        this.active = "";
      }
    },
  },
};
</script>

<style>
.sidebar {
  width: 60px;
  height: 100vh;
  border-right: 1px solid #eeeeee;
  position: relative;
}

.upper-part {
  position: absolute;
  left: 5px;
  top: 60px;
}

.icon {
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(171, 171, 171, 1);
  font-size: 18px;
  margin-bottom: 20px;
  cursor: pointer;
}

.icon:hover {
  scale: calc(1.2);
}
.icon p {
  margin-top: 5px;
  font-size: 9px;
  font-weight: 500;
}
.lower-part {
  position: absolute;
  bottom: 90px;
  left: 5px;
}

.active {
  scale: calc(1.2);

  color: #000;
}
</style>

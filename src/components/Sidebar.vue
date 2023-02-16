<template>
  <div class="sidebar">
    <!-- upper list -->
    <div class="upper-part">
      <div class="icon">
        <b-icon-house></b-icon-house>
        <p>Home</p>
      </div>
      <div class="icon">
        <b-icon-list-ul></b-icon-list-ul>
        <p>Data</p>
      </div>
      <div class="icon">
        <b-icon-graph-down></b-icon-graph-down>
        <p>Analysis</p>
      </div>
      <div class="icon">
        <b-icon-map></b-icon-map>
        <p>Plan</p>
      </div>
    </div>
    <!-- lower part -->
    <div class="lower-part">
      <img src="../assets/lower-image.png" alt="CoffeeBell" />
    </div>
  </div>
</template>

<script>
import {
  BIconHouse,
  BIconListUl,
  BIconGraphDown,
  BIconMap,
} from "bootstrap-vue";
export default {
  name: "SidebarCompnent",
  components: {
    BIconHouse,
    BIconListUl,
    BIconGraphDown,
    BIconMap,
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
  left: 15px;
  top: 60px;
}

.icon {
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
</style>

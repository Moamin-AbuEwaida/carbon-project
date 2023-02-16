<template>
  <nav>
    <!-- left side -->
    <div class="left-side">
      <!-- logo -->
      <div class="logo">
        <img src="../assets/carbon-img.png" alt="logo" />
      </div>
      <!-- tab title -->

      <!-- tab name -->
      <div class="tab-name">
        <b-icon-list-ul font-scale="1.5"></b-icon-list-ul>

        <h2>Emission Data</h2>
      </div>
      <!-- tab drop list -->
      <div class="filters">
        <select name="All company">
          <option value="All company">All company</option>
          <option value="office2">office1</option>
          <option value="office3">office2</option>
          <option value="office4">office3</option>
        </select>
        <select name="Year">
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        <b-icon-funnel-fill></b-icon-funnel-fill>
      </div>

      <div></div>
    </div>
    <!-- right side -->
    <div class="right-side">
      <b-icon-search></b-icon-search>
      <!-- <b-divider></b-divider> -->
      <b-icon-bell></b-icon-bell>

      <div class="user">AD</div>
    </div>
  </nav>
</template>

<script>
import {
  BIconListUl,
  BIconFunnelFill,
  BIconSearch,
  BIconBell,
} from "bootstrap-vue";

export default {
  name: "navbarComponent",
  components: {
    BIconListUl,
    BIconFunnelFill,
    BIconSearch,
    BIconBell,
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eeeeee;
}
.left-side {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-side {
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
}
.logo {
  margin-right: 20px;
}

.logo img {
  width: 35px;
  height: 35px;
}
.tab-name {
  display: flex;

  justify-content: center;
  gap: 5px;
}
h2 {
  opacity: 1;
  color: rgba(68, 68, 68, 1);
  font-size: 24px;
  font-weight: 500;
  margin-left: 5px;
  text-align: left;
}

.filters {
  display: flex;
  width: 80px;
  gap: 10px;
}
select {
  border: none;
}

.user {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.264558;
  background-color: rgba(0, 0, 0, 1);
}
</style>

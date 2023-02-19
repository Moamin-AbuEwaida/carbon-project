<template>
  <div class="sidebar">
    <!-- upper list -->
    <div class="upper-part">
      <router-link to="/" class="icon" active-class="active" exact>
        <div>
          <b-icon icon="house-door"></b-icon>
          <p>Home</p>
        </div>
      </router-link>
      <router-link to="/data" class="icon" active-class="active" exact>
        <div>
          <b-icon icon="list-ul"></b-icon>
          <p>Data</p>
        </div>
      </router-link>
      <router-link to="/analysis" class="icon" active-class="active" exact>
        <div>
          <b-icon icon="graph-down"></b-icon>
          <p>Analysis</p>
        </div>
      </router-link>
      <router-link to="/plan" class="icon" active-class="active" exact>
        <div>
          <b-icon icon="map"></b-icon>
          <p>Plan</p>
        </div>
      </router-link>
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
      active: "",
    };
  },
};
</script>

<style>
.sidebar {
  background-color: #fff;
  width: 60px;
  height: 100vh;
  border-right: 1px solid #eeeeee;
  position: relative;
  z-index: 1;
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
  text-decoration: none;
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

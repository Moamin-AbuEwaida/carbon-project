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
        <b-icon icon="list-ul" font-scale="1.5"></b-icon>

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
        <b-icon
          icon="funnel-fill"
          font-scale="1.2"
          variant="secondary"
        ></b-icon>
      </div>

      <div></div>
    </div>
    <!-- right side -->
    <div class="right-side">
      <div class="search-bar">
        <b-form-input placeholder="" style="border: none"></b-form-input>
        <b-icon
          icon="search"
          font-scale="1.2"
          style="margin: 0 2px 0 5px"
        ></b-icon>
      </div>
      <b-icon icon="bell" font-scale="1.2"></b-icon>
      <b-avatar class="user"></b-avatar>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbarComponent",
  data() {
    return {};
  },
};
</script>

<style>
nav {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eeeeee;
  z-index: 1;
}
.left-side {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-side {
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
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
  align-items: center;
  justify-content: center;
  gap: 5px;
}
h2 {
  opacity: 1;
  color: rgba(68, 68, 68, 1);
  font-size: 24px;
  font-weight: 500;
  margin-left: 5px;
  padding-top: 10px;
  text-align: left;
}

.filters {
  display: flex;
  width: 80px;
  gap: 10px;
  align-items: center;
}
select {
  border: none;
}
.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eeeeee;
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

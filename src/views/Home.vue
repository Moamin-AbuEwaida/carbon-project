<template>
  <div>
    <div class="home">
      <!-- user info -->
      <h1>User's info</h1>
      <div class="info">
        <!-- left side -->
        <div class="left-side">
          <div class="name">Name: {{ name }}</div>
        </div>
        <!-- right side -->
        <div class="right-side">
          <div class="gender">Gender: {{ gender }}</div>
          <div class="height">Height: {{ height }}</div>
          <div class="year">Date of birth: {{ year }}</div>
        </div>
      </div>
      <!-- vehicle info -->
      <h1>Vehicle Info</h1>
      <div class="car-info">
        <div class="model">Car model: {{ model }}</div>
        <div class="model">Car length: {{ length }}m</div>
        <div class="model">No. of passengers: {{ passengers }}</div>
        <div class="model">Period: {{ consumables }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      name: null,
      gender: null,
      height: null,
      year: null,
      model: null,
      length: null,
      passengers: null,
      consumables: null,
    };
  },
  mounted() {
    // fetching user's info
    axios.get("https://swapi.dev/api/people/1/").then((res) => {
      this.name = res.data.name;
      this.gender = res.data.gender;
      this.height = res.data.height;
      this.year = res.data.birth_year;
    });
    axios.get("https://swapi.dev/api/vehicles/4/").then((res1) => {
      this.model = res1.data.model;
      this.length = res1.data.length;
      this.passengers = res1.data.passengers;
      this.consumables = res1.data.consumables;
    });
  },
};
</script>

<style scoped>
.home {
  background: rgb(246, 242, 242);
  position: absolute;
  top: 0;
  width: 95%;
  height: 95%;
  padding: 50px 50px;
  overflow: scroll;
}
.info,
.car-info {
  width: 95%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
.info > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
}

.right-side {
  width: 60%;
}

.car-info {
  flex-direction: column;
}
.car-info > div {
  display: flex;
  margin: 10px 0px 0px 10px;
  border-bottom: 1px solid #ccc;
}
</style>

<template>
  <div>
    <div class="home">
      <!-- user info -->

      <div class="mt-4">
        <h4>User's info</h4>
        <b-card
          img-src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          img-alt="Card image"
          img-left
          class="mb-3"
          style="height: 200px"
        >
          <b-card-text>
            <div class="user-info">
              <p class="name">Name: {{ name }}</p>
              <p class="gender">Gender: {{ gender }}</p>
              <p class="height">Height: {{ height }}</p>
              <p class="year">Date of birth: {{ year }}</p>
            </div>
          </b-card-text>
        </b-card>
      </div>

      <!-- vehicle info -->
      <div class="mt-4">
        <h4>Vehicle Info</h4>
        <b-card
          img-src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          img-alt="Card image"
          img-right
          class="mb-3"
          style="height: 200px"
        >
          <b-card-text>
            <div class="user-info">
              <p>Car model: {{ model }}</p>
              <p>Car length: {{ length }}m</p>
              <p>No. of passengers: {{ passengers }}</p>
              <p>Period: {{ consumables }}</p>
            </div>
          </b-card-text>
        </b-card>
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
.user-info p {
  text-align: initial;
  font-size: 20px;
  font-weight: bold;
}
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
  flex-direction: column;
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

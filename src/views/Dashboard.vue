<template>
  <div>
    <Navbar />
    <Sidebar />

    <div class="dashboard">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "DashView",
  components: { Navbar, Sidebar },
};
</script>

<style scoped>
.dashboard {
  background: rgb(246, 242, 242);
  top: 61px;
  left: 0;
  position: absolute;
  height: 92vh;
  width: 100vw;
  padding: 60px;
  overflow: hidden;
}
</style>

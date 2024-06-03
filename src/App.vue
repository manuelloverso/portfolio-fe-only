<script>
// IMPORTS
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    ProjectCard,
  },
  data() {
    return {};
  },

  mounted() {
    document.addEventListener("mousemove", function (e) {
      // Get cursor position
      let cursor = document.getElementById("cursor");
      let x = e.clientX - cursor.offsetWidth / 2;
      let y = e.clientY - cursor.offsetHeight / 2;

      // Set cursor position
      setTimeout(function () {
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
      }, 70);
    });
  },
};
</script>
<template>
  <div id="cursor"></div>
  <!-- Site Header -->
  <AppHeader />

  <RouterView />

  <!-- Site Footer -->
  <AppFooter />
</template>
<style scoped>
#cursor {
  position: fixed;
  z-index: 4;
  width: 25px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  pointer-events: none; /* so that the cursor doesn't interfere with other elements */
}
</style>

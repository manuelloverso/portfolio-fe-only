<script>
// IMPORTS
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import ProjectCard from "./components/ProjectCard.vue";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
MouseFollower.registerGSAP(gsap);
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
    const cursor = new MouseFollower({
      speed: 0.5,
      skewingText: 0,
    });

    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  },
};
</script>
<template>
  <div ref="bg-1" class="bg-bobble1 bg-home"></div>
  <div ref="bg-2" class="bg-bobble2 bg-home"></div>
  <!-- Site Header -->
  <AppHeader />

  <RouterView v-slot="{ Component }">
    <transition name="slide-fade" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </RouterView>

  <!-- Site Footer -->
  <AppFooter />
</template>
<style>
/* background */
.bg-home {
  background-color: rgb(7, 27, 139);
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.mf-cursor::before {
  background: rgb(197, 205, 209);
  transform: scale(0.4);
}

.mf-cursor-text {
  color: black;
}
</style>

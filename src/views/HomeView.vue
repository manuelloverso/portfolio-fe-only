<script>
import AboutMe from "../components/AboutMe.vue";
import HomeProjects from "../components/HomeProjects.vue";
import MySkills from "../components/MySkills.vue";

export default {
  name: "HomeView",
  components: {
    AboutMe,
    HomeProjects,
    MySkills,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <!-- Home Page Jumbotron -->
  <div class="home-jumbotron">
    <div class="md-container">
      <div class="jumbo-text">
        <h1>I'm Manuel Loverso</h1>
        <h3 class="mb-5">Jr. Full Stack Web Developer</h3>
        <a href="#about-me">
          <button class="btn-gradient">
            About Me <i class="fa-solid fa-arrow-down"></i>
          </button>
        </a>
      </div>
    </div>
  </div>

  <!-- Page Main -->
  <main id="home-main">
    <AboutMe />

    <HomeProjects />

    <MySkills />
  </main>
</template>

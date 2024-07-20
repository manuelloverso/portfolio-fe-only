<script>
import AboutMe from "../components/AboutMe.vue";
import HomeProjects from "../components/HomeProjects.vue";
import MySkills from "../components/MySkills.vue";
import Scroller from "../components/Scroller.vue";

export default {
  name: "HomeView",
  components: {
    AboutMe,
    HomeProjects,
    MySkills,
    Scroller,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div id="home">
    <!-- Home Page Jumbotron -->
    <div class="home-jumbotron">
      <div class="md-container">
        <div class="jumbo-text tracking-in-contract-bck-top updated">
          <h1>Manuel Loverso</h1>
          <h3 class="mb-5">Jr. Full Stack Web Developer</h3>
        </div>
        <Scroller />
      </div>
    </div>

    <!-- Page Main -->
    <main id="home-main">
      <AboutMe />

      <HomeProjects />

      <MySkills />
    </main>
  </div>
</template>

<style scoped>
.home-jumbotron {
  height: 80vh;
  display: flex;
  align-items: center;

  .md-container {
    position: relative;
  }

  .jumbo-text {
    text-align: center;
    color: var(--accent);
    margin-bottom: 100px;
    white-space: pre;
    & h1 {
      /* font-size: 5.5rem; */
      font-size: 11vw;
      padding-top: 20px;
      font-weight: 300;
      margin-bottom: 30px;
    }

    & h3 {
      font-size: 6vw;
      font-weight: 300;

      line-height: 0.9;
      padding-top: 20px;
      overflow: hidden;
    }
  }
}

@media screen and (min-width: 992px) {
  .jumbo-text {
    text-align: start !important;

    & h1 {
      font-size: 5.5rem !important;
    }

    & h3 {
      font-size: 3rem !important;
    }
  }
}

/* animations */
.tracking-in-contract-bck-top {
  -webkit-animation: tracking-in-contract-bck-top 3s
    cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: tracking-in-contract-bck-top 3s
    cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@-webkit-keyframes tracking-in-contract-bck-top {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(400px) translateY(-300px);
    transform: translateZ(400px) translateY(-300px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
@keyframes tracking-in-contract-bck-top {
  0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(400px) translateY(-300px);
    transform: translateZ(400px) translateY(-300px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
</style>

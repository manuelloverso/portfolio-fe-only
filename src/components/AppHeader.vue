<script>
import { RouterLink } from "vue-router";

export default {
  name: "AppHeader",
  data() {
    return {};
  },

  mounted() {
    const header = document.getElementById("app-header");
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 80) {
        header.classList.add("bg-header");
      }

      if (window.scrollY < 100 && header.classList.contains("bg-header")) {
        header.classList.remove("bg-header");
      }
    });
  },
};
</script>
<template>
  <header id="app-header">
    <!-- Navigation bar -->
    <nav class="md-container">
      <!-- Site Logo -->
      <RouterLink class="logo" :to="{ name: 'home' }">
        <h1>ML</h1>
      </RouterLink>

      <div class="nav-right-side d-flex">
        <ul class="nav-links">
          <li>
            <RouterLink :to="{ name: 'projects' }">
              Progetti
              <span></span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'contacts' }">
              Contattami
              <span></span>
            </RouterLink>
          </li>
        </ul>

        <ul class="socials d-flex">
          <li>
            <a target="_blank" href="https://github.com/manuelloverso/">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://linkedin.com/in/manuel-loverso-30582b282"
              ><i class="fa-brands fa-linkedin"></i
            ></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

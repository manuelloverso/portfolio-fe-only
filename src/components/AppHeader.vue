<script>
import { RouterLink } from "vue-router";
import { Collapse } from "bootstrap";

export default {
  name: "AppHeader",
  data() {
    return {};
  },

  methods: {
    toggleCollapse() {
      const navbarCollapse = this.$refs.navbarCollapse;
      if (navbarCollapse.classList.contains("show")) {
        const collapseInstance = new Collapse(navbarCollapse);
        collapseInstance.hide();
      }
    },
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
    <nav class="md-container navbar">
      <!-- Site Logo -->
      <RouterLink class="logo align-self-start" :to="{ name: 'home' }">
        <h1>ML</h1>
      </RouterLink>

      <div class="nav-right-side d-none d-md-flex align-items-center">
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

      <div class="btn-group d-block d-md-none text-end">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#n_bar"
          aria-controls="navbarNavAltMarkup"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="n_bar" ref="navbarCollapse">
          <ul class="navbar-nav toggle-nav-links text-end">
            <li class="nav-item">
              <RouterLink
                :to="{ name: 'projects' }"
                class="nav-link"
                @click="toggleCollapse"
                >Progetti</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                :to="{ name: 'contacts' }"
                @click="toggleCollapse"
                >Contattami</RouterLink
              >
            </li>
            <li class="nav-item">
              <a
                target="_blank"
                class="nav-link"
                href="https://github.com/manuelloverso/"
                @click="toggleCollapse"
              >
                <i class="fa-brands fa-github"></i>
                Github
              </a>
            </li>
            <li class="nav-item">
              <a
                target="_blank"
                class="nav-link"
                href="https://linkedin.com/in/manuel-loverso-30582b282"
                @click="toggleCollapse"
              >
                <i class="fa-brands fa-linkedin"></i>
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
#app-header {
  transition: background-color 1s ease;
  padding: 1rem 0;
  position: sticky;
  z-index: 2;
  top: 0;

  .toggle-nav-links {
    & li:hover {
      color: var(--accent);
    }
  }

  .navbar-toggler {
    color: var(--accent);
    border: 1px solid var(--text-grey);

    & span {
      color: white !important;
    }
  }

  & nav {
    display: flex;
    justify-content: space-between;
    animation: tracking-in-contract-bck 2s cubic-bezier(0.215, 0.61, 0.355, 1)
      both;

    .logo {
      color: var(--text-grey);
      text-decoration: none;
      cursor: none;
      transition: transform 0.3s linear, color 0.4s ease-in-out;

      & h1 {
        font-size: 3rem;
        font-weight: 400;
        margin: 0 !important;
      }

      &:hover {
        color: var(--accent) !important;
        transform: scale(1.3);
      }
    }

    .nav-right-side {
      gap: 1.2rem;
      font-size: 1.2rem;

      .nav-links {
        display: flex;
        gap: 0.4rem;

        & a {
          cursor: none;
          position: relative;
          color: var(--text-grey);
          text-decoration: none;
          padding: 6px 20px;
          transition: 0.5s;

          &:hover {
            color: var(--accent) !important;
            span {
              transform: scale(1) translateY(0);
              opacity: 1;
            }
          }

          & span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            border-bottom: 2px solid var(--accent);
            border-radius: 15px;
            transform: scale(0) translateY(50px);
            opacity: 0;
            transition: 0.5s;
          }
        }
      }

      .socials {
        gap: 1.3rem;
        font-size: 1.3rem;
        & li a {
          text-decoration: none;
          color: var(--text-grey);
          transition: color 0.3s;
          cursor: none;

          &:hover {
            color: var(--accent) !important;
          }
        }
      }
    }
  }
}

.bg-header {
  background-color: rgba(10, 10, 10, 0.889);
}

@keyframes tracking-in-contract-bck {
  0% {
    letter-spacing: 1em;
    transform: translateZ(400px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
</style>

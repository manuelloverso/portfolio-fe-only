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
        <img src="/img/logo.png" alt="" />
      </RouterLink>

      <div class="nav-right-side d-none d-md-flex align-items-center">
        <ul class="nav-links">
          <li>
            <RouterLink :to="{ name: 'projects' }" activeClass="active-route">
              Progetti
              <span></span>
            </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'contacts' }" activeClass="active-route">
              Contattami
              <span></span>
            </RouterLink>
          </li>
        </ul>

        <ul class="socials d-flex">
          <li>
            <a target="_blank" href="https://github.com/manuelloverso/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                class="icon"
              >
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              href="https://linkedin.com/in/manuel-loverso-30582b282"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="icon"
              >
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </a>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="hamburger"
          >
            <path
              d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </button>
        <div class="collapse navbar-collapse" id="n_bar" ref="navbarCollapse">
          <ul class="navbar-nav toggle-nav-links text-end">
            <li class="nav-item">
              <RouterLink
                :to="{ name: 'projects' }"
                class="nav-link"
                activeClass="active-route"
                @click="toggleCollapse"
                >Progetti</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink
                class="nav-link"
                activeClass="active-route"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  class="icon"
                >
                  <path
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
                <span>Github</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                target="_blank"
                class="nav-link"
                href="https://linkedin.com/in/manuel-loverso-30582b282"
                @click="toggleCollapse"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="icon"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
                <span>Linkedin</span>
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

  .active-route {
    color: var(--accent) !important;
  }

  .hamburger {
    width: 20px;
    fill: var(--accent);
  }

  .toggle-nav-links {
    & li {
      & a {
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 5px;
      }
      &:hover {
        color: var(--accent);

        .icon {
          fill: var(--accent);
        }
      }

      .icon {
        display: block;
        width: 18px;
        fill: var(--text-grey);
        transition: fill 0.3s ease;
      }
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

      & img {
        width: 80px;
      }

      &:hover {
        transform: scale(1.2);
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
        align-items: center;

        & li {
          & a {
            display: block;
            text-decoration: none;
            color: var(--text-grey);
            cursor: none;

            .icon {
              display: block;
              width: 18px;
              fill: var(--text-grey);
              transition: fill 0.3s ease;
            }

            &:hover .icon {
              fill: var(--accent);
            }
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

<script>
import { store } from "../store.js";

export default {
  name: "CustomCursor",
  data() {
    return {
      store,
    };
  },

  methods: {
    customCursor() {
      /* custom cursor */
      const cursor = document.getElementById("cursor");
      const cursorShadow = document.getElementById("cursor-shadow");

      const coords = {
        x: 0,
        y: 0,
      };

      const prevCoords = {
        x: 0,
        y: 0,
      };

      window.addEventListener("mousemove", (e) => {
        coords.x = e.clientX;
        coords.y = e.clientY;
      });

      function update() {
        cursor.style.top = `${coords.y}px`;
        cursor.style.left = `${coords.x}px`;

        const y = lerp(prevCoords.y, coords.y, 0.15);
        const x = lerp(prevCoords.x, coords.x, 0.15);

        cursorShadow.style.top = `${y}px`;
        cursorShadow.style.left = `${x}px`;

        prevCoords.x = x;
        prevCoords.y = y;

        requestAnimationFrame(update);
      }

      requestAnimationFrame(update);

      function lerp(a, b, t) {
        return a * (1 - t) + b * t;
      }
    },

    /* handles the cursor on ever anchor tags */
    hoverLinks() {
      const anchors = document.querySelectorAll("a");
      const cursorShadow = document.getElementById("cursor-shadow");
      const cursor = document.getElementById("cursor");

      anchors.forEach((anchor) => {
        if (!anchor.classList.contains("card-link")) {
          anchor.addEventListener("mouseenter", () => {
            cursorShadow.style.opacity = 0;
            cursor.style.width = "25px";
          });

          anchor.addEventListener("mouseleave", () => {
            cursorShadow.style.opacity = 1;
            cursor.style.width = "10px";
          });

          anchor.addEventListener("click", () => {
            cursorShadow.style.opacity = 1;
            cursor.style.width = "10px";
          });
        }
      });
    },
  },

  watch: {
    $route() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.hoverLinks();
        }, 2000);
      });
    },
    "store.projectsLoading"(newVal) {
      if (!newVal) {
        /* questo serve per lanciare la funzione dopo che il dom è aggiornato */
        this.$nextTick(() => {
          this.hoverLinks();
        });
      }
    },
  },

  mounted() {
    this.customCursor();
    this.hoverLinks();
  },
};
</script>
<template>
  <!-- cursor -->
  <div id="cursor"></div>
  <div id="cursor-shadow">
    <p class="card-text">Scopri di più</p>
  </div>
</template>
<style scoped>
#cursor {
  pointer-events: none;
  aspect-ratio: 1;
  border-radius: 50%;
  width: 10px;
  position: fixed;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.774);
  z-index: 100;
  transition: width 0.3s ease-in-out;
}

#cursor-shadow {
  border: 1px solid rgba(255, 255, 255, 0.774);
  pointer-events: none;
  aspect-ratio: 1;
  border-radius: 50%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: 100;
  transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out,
    opacity 0.2s ease-in-out;
}

.card-text {
  color: black;
  display: none;
}

.card-hover#cursor {
  display: none;
}

.card-hover#cursor-shadow {
  background-color: rgba(255, 255, 255, 0.774);
  width: 120px;

  .card-text {
    display: block;
  }
}
</style>

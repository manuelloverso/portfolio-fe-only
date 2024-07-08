<script>
export default {
  name: "CustomCursor",
  data() {
    return {};
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

    hoverLinks() {
      const anchors = document.querySelectorAll("a");
      console.log(anchors);
    },
  },

  watch: {},

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
  background-color: white;
  z-index: 100;
  mix-blend-mode: difference;
}

#cursor-shadow {
  border: 1px solid white;
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
  mix-blend-mode: difference;
  transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.card-text {
  color: black;
  display: none;
}

.card-hover#cursor {
  display: none;
}

.card-hover#cursor-shadow {
  background-color: white;
  width: 120px;

  .card-text {
    display: block;
  }
}
</style>

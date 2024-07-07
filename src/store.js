import { reactive } from "vue";

export const store = reactive({
  cardCursor() {
    const cursor = document.getElementById("cursor");
    const cursorShadow = document.getElementById("cursor-shadow");

    cursorShadow.classList.add("card-hover");
  },

  cardCursorLeave() {
    const cursor = document.getElementById("cursor");
    const cursorShadow = document.getElementById("cursor-shadow");

    cursorShadow.classList.remove("card-hover");
  },
});

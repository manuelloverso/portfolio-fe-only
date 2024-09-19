import { reactive } from "vue";

export const store = reactive({
  isTouch: null,

  isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  },
});

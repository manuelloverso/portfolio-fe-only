import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  projects: [],
  projectsLoading: true,
  failed: false,
  isTouch: null,

  /* get projects */
  callApi() {
    axios
      .get("https://admin.manuelloverso.com/api/projects")
      .then((response) => {
        this.projects = response.data.response;
        this.projectsLoading = false;
      })
      .catch((err) => {
        console.log(err);
        this.projectsLoading = false;
        this.failed = true;
      });
  },

  isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  },
});

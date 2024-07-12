import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  projects: [],
  projectsLoading: true,
  failed: false,

  /* get projects */
  callApi() {
    axios
      .get("http://127.0.0.1:8000/api/projects")
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
});

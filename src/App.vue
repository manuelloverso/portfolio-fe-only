<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      projects: [],
    };
  },

  methods: {
    callApi(url) {
      axios.get(url).then((response) => {
        console.log(response.data.response);
        this.projects = response.data.response;
      });
    },
  },

  mounted() {
    this.callApi("http://127.0.0.1:8000/api/projects");
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="project in projects">
        <div class="card">
          <h1>{{ project.title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

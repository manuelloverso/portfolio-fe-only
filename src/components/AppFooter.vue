<script>
export default {
  name: "AppFooter",
  data() {
    return {};
  },
};
</script>
<template>
  <footer id="app-footer">
    <div class="md-container row">
      <div class="col-12 col-md-4">
        <nav class="d-flex flex-column g-3">
          <div class="logo">ML</div>

          <span>Progetti</span>
          <span>Contattami</span>
        </nav>
      </div>

      <div class="col-12 col-md-4">
        <div class="socials d-flex g-3">
          <span>Linkedin</span>
          <span>Github</span>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="portfolio-links d-flex flex-column g-3">
          <h3>Codice del Portfolio</h3>
          <span>Front-end Repo</span>
          <span>Back-end Repo</span>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
#app-footer {
  padding: 3rem 0;
  background-color: rgba(10, 10, 10, 0.545);
  color: rgb(197, 205, 209);
}
</style>

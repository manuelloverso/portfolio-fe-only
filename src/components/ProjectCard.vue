<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div class="col-4">
    <div class="card project-card slide-fwd-center">
      <h1>{{ project.title }}</h1>
    </div>
  </div>
</template>
<style scoped></style>

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
    <div class="h-100 project-card">
      <div class="card-img">
        <img
          v-if="project.image.startsWith('http')"
          class="w-100"
          :src="project.image"
          alt=""
        />
        <img
          v-else
          class="w-100"
          :src="'http://127.0.0.1:8000' + '/storage/' + project.image"
          alt=""
        />
      </div>
      <div class="card-body">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <p v-if="project.type != null">
          <strong>Type: </strong>{{ project.type.name }}
        </p>
        <p v-if="project.technologies.length != 0">
          <strong>Technologies: </strong>
          <span class="mx-1" v-for="tech in project.technologies">
            {{ tech.name }}
          </span>
        </p>
        <p v-if="project.date != null">
          <strong>Created: </strong>{{ project.date }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>

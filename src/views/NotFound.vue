<script>
export default {
  name: "Not Found",
  data() {
    return {};
  },
};
</script>
<template>
  <main>
    <div class="md-container nf-container">
      <h2>404</h2>
      <h4>Spiacente, quello che stai cercando non esiste</h4>
      <RouterLink :to="{ name: 'home' }">
        <button class="btn-gradient">Torna alla Home</button>
      </RouterLink>
    </div>
  </main>
</template>
<style scoped>
main {
  color: rgb(197, 205, 209);

  .nf-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;

    & h2 {
      font-size: 5rem;
      font-weight: 400;
    }

    & h4 {
      font-size: 2.5rem;
      font-weight: 400;
      margin-bottom: 20px;
    }
  }
}
</style>

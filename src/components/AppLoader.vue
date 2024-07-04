<script>
export default {
  name: "AppLoader",
  data() {
    return {};
  },
};
</script>
<template>
  <div class="loader-container">
    <span class="loader"></span>
  </div>
</template>
<style scoped>
.loader-container {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid rgb(197, 205, 209);
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-bottom: 4px solid rgb(103, 102, 107);
  border-left: 4px solid transparent;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

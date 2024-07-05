<script>
export default {
  name: "Scroller",
  data() {
    return {};
  },
};
</script>
<template>
  <div class="scroller-container">
    <div class="indicator"></div>
  </div>
</template>
<style scoped>
.scroller-container {
  display: flex;
  justify-content: center;
}

.indicator {
  width: 2px;
  height: 110px;
  position: relative;
  background: transparent;
  animation: indicator 5s ease infinite;
  border-radius: 100%;
  margin: 0 auto;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgb(197, 205, 209), transparent);
  }
}

@keyframes indicator {
  0% {
    transform-origin: top;
    transform: scaleY(0);
  }
  45% {
    transform-origin: top;
    transform: scaleY(1);
  }
  55% {
    transform-origin: bottom;
    transform: scaleY(1);
  }
  100% {
    transform-origin: bottom;
    transform: scaleY(0);
  }
}
</style>

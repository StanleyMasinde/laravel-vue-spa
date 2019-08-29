<template>
  <div data-progress>
    <div data-bar></div>
  </div>
</template>

<script>
export default {
  mounted() {
    var elem = document.querySelector('[data-bar]')
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        width = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width * 1 + "%";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  &[data-progress] {
    width: 100%;
    background-color: #ddd;
  }
  &[data-bar] {
    width: 10%;
    height: 2px;
    background-color: #4caf50;
    text-align: center;
    line-height: 30px;
    color: white;
  }
}
</style>
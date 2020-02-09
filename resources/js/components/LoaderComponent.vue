<template>
  <div class="progress">
    <div
      class="progress-bar progress"
      :style="`width: ${width}%;`"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 0
    };
  },
  methods: {
    animate() {
      setInterval(() => {
        if (this.width < 40) {
          this.width = this.width + 15;
        }
        if (this.width == 85) {
          return;
        }
        this.width++;
      }, 500);
    }
  },
  mounted() {
    this.animate();
  }
};
</script>

<style>
.progress {
  height: 3px;
}
</style>
<template>
  <div class="alert" :class="alertColorr">
    {{ task.content }}
  </div>
</template>

<script>
export default {
  name: "TaskView",
  props: {
    task: Object,
    alertColor: {
      type: String,
      default: "secondary",
    },
  },
  computed: {
    alertColorr() {
      return `alert-${this.alertColor}`;
    },
  },
};
</script>

<style scoped></style>

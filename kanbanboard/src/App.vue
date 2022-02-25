<template>
  <div class="container mt-5">
    <div class="row">
      <div
        class="col-4"
        v-for="statusCard in statusCards"
        :key="statusCard.status"
      >
        <StatusCard
          :title="statusCard.tittle"
          :titleClasses="statusCard.titleClasses"
          :newTasks="statusCard.newTasks"
          :status="statusCard.status"
          :tasks="filteredTasks(statusCard.status)"
          @new-task="addTask"
          @status-updated="updateStatus"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StatusCard from "./components/StatusCard.vue";
import logger from "./mixins/logger";

export default {
  name: "App",
  mixins: [logger],
  components: {
    StatusCard,
  },
  provide() {
    return {
      maxNumberOfChars: 255,
    };
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          content: "Dashboard überarbeiten.",
          status: 0,
        },
        {
          id: 2,
          content: "Anwendung auf Vue.js umstellen.",
          status: 0,
        },
      ],
      statusCards: [
        {
          title: "Neue Aufgaben",
          titleClasses: "bg-secondary text-white",
          newTasks: true,
          status: 1,
        },
        {
          title: "In Bearbeitung",
          titleClasses: "bg-primary text-white",
          newTasks: false,
          status: 1,
        },
        {
          title: "In Bearbeitung",
          titleClasses: "bg-success text-white",
          newTasks: false,
          status: 2,
        },
      ],
    };
  },
  /*   mounted() {
    console.log("App-Component ist vollständig bereit.");
  }, */
  methods: {
    filteredTasks(status) {
      return this.tasks.filter((task) => task.status === status);
    },
    addTask(task) {
      task.id = Math.random();
      this.tasks.push(task);
      this.writeLogEntry("Neue Aufgabe hinzugefügt.");
    },
    updateStatus(statusDO) {
      const task = this.tasks.find((task) => task.id === Number(statusDO.taskId));
      task.status = statusDO.newStatus;
    },
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
</style>

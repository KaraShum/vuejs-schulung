<template>
  <div>
    <input
      type="text"
      class="form-control"
      placeholder="Neue Aufgabe"
      v-model="content"
      v-focus="{ color: 'green' }"
    />
    <small>Noch {{ numberOfCharactersLeft }} Zeichen erlaubt</small>
    <div class="d-grid my-2">
      <button class="btn btn-secondary" @[mode]="submitTask()">
        Eintragen
      </button>
    </div>
    <teleport to="#settings">
      <select class="form-select" v-model="mode">
        <option value="click">Einfacher Klick</option>
        <option value="dblclick">Doppelklick</option>
      </select>
    </teleport>
  </div>
</template>

<script>
export default {
  name: "NewTask",
  inject: ["maxNumberOfChars"],
  /*   emits: ["new-tasks"], */
  emits: {
    "new-task": (task) => {
      if (task.content === "") {
        console.warn("NewTaskComponent: Der Content sollte nicht leer sein.");
        return false;
      }
      return true;
    },
  },
  data() {
    return {
      content: "",
      mode: "click",
    };
  },
  computed: {
    numberOfCharactersLeft() {
      return this.maxNumberOfChars - this.content.length;
    },
  },
  methods: {
    submitTask() {
      this.$emit("new-task", {
        // Payload
        content: this.content,
      });
      this.content = "";
    },
  },
};
</script>

<style scoped></style>

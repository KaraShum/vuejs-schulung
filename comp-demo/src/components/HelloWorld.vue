<template>
  <div class="hello">
    <h1>
      {{ getGreeting }} - {{ greetingReverse }}
      <button @click="updateGreeting">Aktualisiere die Begrüßung</button>
    </h1>
    <hr />
    <h1>
      {{ greetingObj.message }} - {{ greetingObj.description }}
      <button @click="updateGreetingObj">Aktualisiere die Begrüßung</button>
    </h1>
    <h2>{{ message }} - {{ description }}</h2>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed, onMounted } from "vue";
export default {
  name: "HelloWorld",
  // Wird ausgeführt bevor die Component erzeugt wird
  // und NACHDEM die props verfügbar sind
  setup() {
    // Logik, Logik, Logik
    const getGreeting = ref("Hello World");
    const updateGreeting = () => {
      return (getGreeting.value = "Herzlich Willkommen");
    };
    const greetingReverse = computed(() => {
      return getGreeting.value.split("").reverse().join("");
    });

    const greetingObj = reactive({
      message: "Salut",
      description: "Willkommen zur App!",
    });
    const greetingObjRefs = toRefs(greetingObj);
    const { message, description } = greetingObjRefs;
    const updateGreetingObj = () => {
      greetingObj.message = "Servus";
      greetingObj.description = "Herzlich Willkommen zur App!";
    };

    onMounted(() => console.log("Component mounted"));

    return {
      getGreeting,
      updateGreeting,
      greetingReverse,
      greetingObj,
      updateGreetingObj,
      message,
      description,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

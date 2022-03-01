<template>
  <div class="app" :class="{ 'bg-dark': darkMode }">
    <div class="container pt-5">
      <div v-if="loading">
        <div class="progress" style="height: 10px">
          <div class="progress-bar" role="progressbar" style="width: 60%"></div>
        </div>
      </div>
      <div v-if="!loading">
        <ListingsList :listings="listings" />
      </div>
      <button
        class="btn mt-2"
        :class="{ 'btn-light': darkMode, 'btn-dark': !darkMode }"
        @click="toggleDarkMode"
      >
        {{ darkModeButtonText }}
      </button>
    </div>
  </div>
</template>

<script>
import { computed, inject } from "vue";
// import { useStore } from "vuex";
// import { mapGetters } from "vuex";
import useDarkMode from "@/hooks/useDarkMode";
import ListingsList from "./components/ListingsList";

export default {
  name: "App",
  components: {
    ListingsList,
  },
  setup() {
    // const store = useStore();
    const store = inject("store");
    const { darkMode, toggleDarkMode } = useDarkMode();

    // const isDark = ref(false);
    const darkModeButtonText = computed(() => {
      return darkMode.value ? "Helle Ansicht" : "Dunkle Ansicht";
    });

    const listings = computed(() => store.state.listings);
    const loading = computed(() => store.state.loading);

    store.actions.getListings();
    // store.dispatch("getListings");

    return {
      darkMode,
      darkModeButtonText,
      listings,
      loading,
      toggleDarkMode,
    };
  },

  /*   data() {
    return {
      isDark: false,
    };
  }, */
  /*   computed: {
    ...mapGetters(["listings", "loading"]),
    darkModeButtonText() {
      return this.isDark ? "Helle Ansicht" : "Dunkle Ansicht";
    },
  }, */
  /*   methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark;
    },
  }, */
  /*   created() {
    this.$store.dispatch("getListings");
  }, */
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";

html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>

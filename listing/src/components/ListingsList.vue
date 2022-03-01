<template>
  <div id="listings">
    <Notification
      :notification="notification"
      :toggleNotification="toggleNotification"
    />
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="listing in listings" :key="listing.id">
        <ListingsListItem :listing="listing" />
      </div>
    </div>
    <button
      class="btn btn-primary mt-2"
      @click="resetListings"
      :disabled="listings.length === 3"
    >
      Reset
    </button>
  </div>
</template>

<script>
import { onMounted, inject } from "vue";
// import { useStore } from "vuex";
// import { mapActions } from "vuex";
import useNotification from "@/hooks/useNotification";
import useDarkMode from "@/hooks/useDarkMode";
import ListingsListItem from "./ListingsListItem";
import Notification from "./Notification";

export default {
  name: "ListingsList",
  components: {
    ListingsListItem,
    Notification,
  },
  props: ["listings", "isDark"],
  setup() {
    // const store = useStore();
    const store = inject("store");
    const { notification, setNotification, toggleNotification } =
      useNotification();
    const { darkMode } = useDarkMode();

    const resetListings = () => {
      setNotification("Liste wurde zurückgesetzt");
      store.actions.resetListings();
      // store.dispatch("resetListings");
    };

    onMounted(() => {
      setNotification("Herzlich Willkommen");
      /*       notification.value = "Herzlich Willkommen!";
      setTimeout(() => {
        notification.value = null;
      }, 3000); */
    });

    return {
      darkMode,
      notification,
      resetListings,
      toggleNotification,
    };
  },
  /*   data() {
    return {
      notification: null,
    };
  }, */
  /*   methods: {
    ...mapActions(["resetListings"]),
  }, */

  /*   mounted() {
    this.notification = "Herzlichen Willkommen!";

    setTimeout(() => {
      this.notification = null;
    }, 3000);
  }, */
};
</script>

const app = Vue.createApp({
  // Optionen
  data: function () {
    return {
      submissions: submissions, // aus seed.js
      /*       totalVotes: 0, */
    };
  },
  computed: {
    totalVotes() {
      return this.submissions.reduce((totalVotes, submission) => {
        return totalVotes + submission.votes;
      }, 0);
    },
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
    cardHeaderBackgroundColor() {
      /*       return {
        "bg-primary": this.totalVotes >= 50,
        "text-white": this.totalVotes >= 50,
      }; */
      if (this.totalVotes >= 50) {
        return ["bg-primary", "text-white"];
      }
    },
    cardTitleFontSize() {
      return { fontSize: this.totalVotes + "px" };
    },
  },
  methods: {
    /* upvote: function () {}, */
    /* Keine Arrow Functions benutzen!!! */
    /*     upvote(submissionId) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
      );
      submission.votes++;
    }, */
    /*     logConsole(text) {
      console.log(text);
    }, */
    /*     totalVotes() {
      return this.submissions.reduce((totalVotes, submission) => {
        return totalVotes + submission.votes;
      }, 0);
    }, */
  },
  watch: {
    /*     submissions: {
      handler(newValue, oldValue) {
        this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
          return totalVotes + submission.votes;
        }, 0);
      },
      deep: true,
      immediate: true,
    },
    totalVotes(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    }, */
  },
});

// Globale Komponente
app.component("SubmissionListItem", {
  // Optionen
  props: ["submission"],
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
      );
      submission.votes++;
    },
  },
  template: `<div class="d-flex">
    <div class="d-shrink-0">
      <img v-bind:src="submission.img" alt="" />
    </div>
    <div class="flex-grow-1 ms-3">
      <h5>
        {{ submission.title }}
        <!--                       <span
        class="float-end text-primary"
        style="cursor: pointer"
        v-on:click.right="upvote(), logConsole('Stimme abgegeben!')"
        ><i class="fa fa-chevron-up"></i>
        <strong>{{ submissions[0].votes }}</strong></span
      > -->
        <span
          class="float-end text-primary"
          style="cursor: pointer"
          v-on:click="upvote(submission.id)"
          ><i class="fa fa-chevron-up"></i>
          <strong>{{ submission.votes }}</strong></span
        >
      </h5>
      <!--  <div v-html="submissions[0].desc">{{ submissions[0].desc }}</div> -->
      <div v-html="submission.desc"></div>
      <!--           <div v-pre>{{ submissions[0].desc }}</div> -->
      <small class="text-muted"
        >Eingereicht von: {{ submission.author }}</small
      >
    </div>
  </div>`,
});

// Liefer die Instant zur Root-Component zurück
const vm = app.mount("#app");

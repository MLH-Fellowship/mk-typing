<template >
  <div class="gen">
    <AppBar />

    <v-container class="mt-5">
      <div class="center">
        <p>Stage: {{ currentStage }}</p>
        <p>Score: {{ score }} </p>
        <p class="font-weight-bold mt-2">Type out the following Paragraph</p>

        <div class="mt-5">
          {{ stages[currentStage - 1].text }}
        </div>

        <v-text-field
          label="Answer"
          placeholder="Type here..."
          single-line
          hide-details
          class="cta"
          v-model="answer"
        ></v-text-field>

        <v-btn class="cta"  v-on:click="changeStage"> Submit </v-btn>

        <v-alert :value="alert" type="error" class="mt-5"> Incorrect! </v-alert>

        <div class="counter mt-5 center">
          <p>Time remaining: {{ stages[currentStage - 1].counter }}</p>
        </div>

        <v-btn class="cta"  v-on:click="goToLeaderboard"> Leaderboard </v-btn>

      </div>
    </v-container>
  </div>
</template>

<script>
import AppBar from "../components/AppBar";

export default {
  name: "home",
  created() {
    this.beginStage();
  },
  components: {
    AppBar,
  },
  methods: {
    changeStage: function () {
      if (this.stages[this.currentStage - 1].counter != 0) {
        console.log(this.answer == this.stages[this.currentStage - 1].text);

        this.alert = false;
        this.score += this.stages[this.currentStage - 1].counter

        if (this.answer == this.stages[this.currentStage - 1].text) {
          if (this.currentStage == 3) {
            this.$router.push({name: 'game-won', params: {score: this.score}});
          }
          this.moveOnToNextStage();
          this.resetCounter();
        } else {
          this.alert = !this.alert;
        }
      }
    },

    moveOnToNextStage: function () {
      if (this.currentStage + 1 <= 3) {
        this.currentStage += 1;
      } else {
        this.currentStage = 1;
      }
    },
    resetCounter: function () {
      this.stages[this.currentStage - 1].counter = 30;
    },
    beginStage: function () {
      let interval = setInterval(() => {
        if (
          this.stages[this.currentStage - 1].counter == 0 &&
          this.currentStage <= 2 &&
          this.answer == this.stages[this.currentStage - 1].text
        ) {
          this.moveOnToNextStage();
        }
        if (
          this.stages[this.currentStage - 1].counter == 0 &&
          this.answer !== this.stages[this.currentStage - 1].text
        ) {
          console.log("Game Failed");
        }
        if (this.stages[this.currentStage - 1].counter != 0) {
          this.stages[this.currentStage - 1].counter -= 1;
        }

        if (this.stages[this.currentStage - 1].counter == 0) {
          this.$router.push({name: 'game-over', params: {score: this.score}});
          clearInterval(interval);
        }
      }, 1000);
    },
    goToLeaderboard: function () {
      this.$router.push("leaderboard")
    }
  },
  data() {
    return {
      alert: false,
      answer: "",
      stages: [
        {
          number: 1,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          counter: 30,
        },
        {
          number: 2,
          text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`,
          counter: 30,
        },
        {
          number: 3,
          text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
          counter: 30,
        },
      ],
      currentStage: 1,
      score: 0
    };
  },
};
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.input {
  width: 80%;
}


.gen{
      width: 100%;
      height: 100%;
      background: #1D6DD5;
    }



        .cta{
  
    width: 50%;
    display: block;
    color: black;
    border-radius: 20px;
    padding: .5em;
    text-decoration: none;
    font-size: 1.5em;
    margin: 3% auto 7%;
    position: relative;
    z-index: 4;
}

    .mainboard{
  color:#EB4320 ;

}

</style>
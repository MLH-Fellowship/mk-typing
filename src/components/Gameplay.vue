<template>
  <div>
    <AppBar />

    <v-container class="mt-5">
      <div class="center">
        <p>Stage {{ currentStage }}</p>
        <p class="font-weight-bold mt-2">Type out the following Paragraph</p>

        <div class="mt-5">
          {{ stages[currentStage - 1].text }}
        </div>

        <v-text-field
          label="Answer"
          placeholder="Type here..."
          single-line
          hide-details
          class="input mt-5"
        ></v-text-field>

        <v-btn class="mt-5" dark v-on:click="changeStage"> Submit </v-btn>

        <div class="counter mt-5 center">
          <p>Count down</p>
          <p>{{ stages[currentStage - 1].counter }}</p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import AppBar from "./AppBar";

export default {
  created() {
    this.beginStage();
  },
  components: {
    AppBar,
  },
  methods: {
    changeStage: function () {
      if (this.currentStage + 1 <= 3) {
        this.currentStage += 1;
      } else {
        this.currentStage = 1;
      }
    },
    beginStage: function () {
      setInterval(() => {
        this.stages[this.currentStage - 1].counter -= 1;
        if(this.stages[this.currentStage - 1].counter == 0 ) {
          this.currentStage += 1;
        }
      }, 1000);
    },
  },
  data() {
    return {
      stages: [
        {
          number: 1,
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
          counter: 30,
        },
        {
          number: 2,
          text: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
          `,
          counter: 30,
        },
        {
          number: 3,
          text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
          `,
          counter: 30,
        },
      ],
      currentStage: 1,
    };
  },
};
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input {
  width: 80%;
}
</style>
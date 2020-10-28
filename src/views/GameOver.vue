
<template >
    <div class="gen">
        <v-container class="gen">

            <div class="center">
                <p class="font-weight-bold mt-2">Game Over</p>
                <v-img
                    max-height="250"
                    max-width="350"
                    src="https://pngimg.com/uploads/game_over/game_over_PNG57.png"
                ></v-img>
                <div class="mt-5">Score: {{score}}</div>

                <v-btn class="mt-5" dark v-on:click="playAgain">Play Again</v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: ["score"],
    methods: {
        playAgain() {
            this.$router.push({ name: "home" });
        }
    }
};
</script>

<style scoped>
.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vw;
}

.input {
    width: 80%;
}

.gen{
      color: white;
      background: #EB4320;
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
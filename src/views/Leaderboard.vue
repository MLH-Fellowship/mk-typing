<template>
  <div>
    <AppBar />

    <v-container class="mt-5">
      <div class="center">
        <p>Leaderboard</p>
        <table>
            <thead>
                <tr>
                   <th class="rank">Rank</th>
                   <th class="name">Name</th>
                   <th class="score">Score</th>
                </tr>
            </thead>
            <tbody  v-bind:key="player.rank" v-for="player in players">           
                <tr >
                    <td class="rank">{{player.rank}}</td>
                    <td class="name">{{player.name}}</td>
                    <td class="score">{{player.score}}</td>
                </tr>   
            </tbody>
        </table>
        <v-btn class="mt-5" dark v-on:click="returnToGame">
          Return to Game
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import AppBar from "../components/AppBar";

export default {
  name: "leaderboard",
  components: {
    AppBar,
  },
  methods: {
    returnToGame: function () {
      this.$router.push({ name: "home" });
    },
  },
  data() {
    return {
      players: [
        {
            rank: 1,
            name: "Player 1",
            score: 300
        },
        {
            rank: 2,
            name: "Player 2",
            score: 200
        },
        {
            rank: 3,
            name: "Player 3",
            score: 100
        }        
      ],
    };
  },
};
</script>

<style scoped>
<<<<<<< HEAD


.mainboard{
  color:black ;

}



=======
>>>>>>> cd8aeb96915195772b0b89809511c849e1f84b4a
    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
<<<<<<< HEAD
        background: #20EB71;
        height: 100vw;
        border-radius: 5%;
        color: white;
        padding: 30px;
    }

    .gen{
      width: 100%;
      height: 100%;
      background: #1D6DD5;
=======
>>>>>>> cd8aeb96915195772b0b89809511c849e1f84b4a
    }

    table {
      width: 50%;
      border: 1px;
      border-spacing: 1px      
    }

    th.rank {
      width: 30%;
    }

<<<<<<< HEAD
    

    .cta{
    background-color: #00cc80;
    width: calc(100% - 1em);
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

=======
>>>>>>> cd8aeb96915195772b0b89809511c849e1f84b4a
    th.name {
      width: 40%;
    } 

</style>
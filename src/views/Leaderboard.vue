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
            <tbody v-bind:key="player.rank" v-for="player in players">           
                <tr>
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
    .center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    table {
      width: 50%;
      border: 1px;
      border-spacing: 1px      
    }

    th.rank {
      width: 30%;
    }

    th.name {
      width: 40%;
    } 

</style>
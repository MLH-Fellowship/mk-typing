<template>
  <div class="gen">
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


        <v-btn class="cta"  v-on:click="returnToGame">
          Return to Game
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import AppBar from "../components/AppBar";
//import LeaderBoard from "../components/LeaderboardComponent";

export default {

  // 1D6DD5 blue EB4320 red #20EB71

  /*
.gen{
      width: 100%;
      height: 100%;
      background: #1D6DD5;
    }

    .mainboard{
  color:#EB4320 ;

}



  */
  name: "leaderboard",
  components: {
    AppBar
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


.mainboard{
  color:black ;

}


    .center {
        display: flex;
        flex-direction: column;
        align-items: center;

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
    }

    table {
      width: 100%;
      border: 5px;
      border-spacing: 5px;
      padding: 10px;      
    }

    th.rank {
      width: 30%;
      background-color: #00cc80;
  padding: 10px;
  color: white;
  font-family:sans-serif;
    }


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

    th.name {
      width: 40%;
      background: #00c2ff;
      color: white;
    padding: 10px;
    font-family:sans-serif;
    } 

    th.score {
      width: 40%;
      background: #00c2ff;
    padding: 10px;
    color: white;
    font-family:sans-serif;
    } 

</style>
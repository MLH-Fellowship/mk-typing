<template>
   
   <div>
     <Gameplay />
   </div>
</template>

<script>
import Gameplay from "./components/Gameplay"

export default {
  name: 'App',

  components: {
    Gameplay
  },

  data() {
    return {
      paragraphs: [
        {
          id: 1,
          text: "Test paragraph for MK Typing. This is way shorter than it should be",
          time: 0
        },
        {
          id: 2,
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          time: 0
        }
      ]
    }
  }
    
};
</script>


<style>

* {
  font-family: "Merienda", Helvetica, Arial;
  font-size: 20px;
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto"),   url(./fonts/Roboto/Roboto-Black.ttf) format("truetype");}
</style>


<template>
   
   <div>    
     <br/>
     <h2 align="center">MK Typing</h2>
     <br/>
     <Paragraphs v-bind:paragraphs="paragraphs"/>
   </div>
</template>

<script>
import Paragraphs from './components/Paragraphs'

export default {
  name: 'App',

  components: {
    Paragraphs,
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

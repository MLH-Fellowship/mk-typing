<template>
  <div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  icons: {
    iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
};

</script>


<style>
* {
  font-family: "Merienda", Helvetica, Arial;
  font-size: 20px;
}
@font-face {
  font-family: "Roboto";
  src: local("Roboto"), url(./fonts/Roboto/Roboto-Black.ttf) format("truetype");
}
</style>


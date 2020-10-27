<template>
  <div>
    <div>Game Over</div>
    <div>Score: {{score}}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["score"]
};
</script>

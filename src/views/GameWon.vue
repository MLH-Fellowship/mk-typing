<template>
  <div>
    <div>Game Won</div>
    <div>Score: {{score}}</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["score"]
};
</script>

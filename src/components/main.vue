<template lang="html">
  <div class="main">
    <g-head></g-head>
    <g-content></g-content>
    <back-top></back-top>
  </div>
</template>

<script>
import head from "./head/head"
import content from "./content/content"
export default {
  components:{
    "g-head":head,
    "g-content":content,
  }
}
</script>

<style lang="css">
</style>

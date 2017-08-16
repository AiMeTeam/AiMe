<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <template>
      <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
      <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
    </template>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '11111',
      radio: '1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <div class="setting">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'setting',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

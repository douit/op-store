<template>
  <div>
    <header-com></header-com>
    <main-content></main-content>
    <footer-com></footer-com>
  </div>
</template>

<script>
  import HeaderCom from './layout/HeaderCom'
  import MainContent from './layout/MainContent'
  import FooterCom from './layout/FooterCom'
  export default {
    name: "Home",
    components: {
      HeaderCom,
      MainContent,
      FooterCom
    }
  }
</script>

<style>

</style>
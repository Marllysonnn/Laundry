<template>
    <div id="app">
      <SideBar />
      <NavUp />
      <img src="/img/backgroun-image.png" alt="Public Image">
      <div id="text">
        <h1>Welcome To Our <br> Application</h1>
        <h2>Click Button Below to Start the Program</h2>
        <ButtonDegrad
        nameButton="Get’s Started"
        style="margin-top: 4em;"
         />
      </div>
    </div>
</template>
  
<script>
import SideBar from '../components/SideBar.vue'
import NavUp from '../components/Nav.vue'
import ButtonDegrad from '../components/ButtonDegrad.vue'

  export default {
    name: 'HomePage',
    components: {
        SideBar,
        NavUp,
        ButtonDegrad
    }
  };
</script>

<style scoped>
    #app{
      width: 100vw;
      display: grid;
      grid-template-columns: 0fr 1fr;
      margin: 0;
      padding: 0;
    }
    #text{
      grid-area: 2/2;
      margin-left: 5em;
      color: #fff;
    }
    h1, h2{
      font-weight: 600;
      letter-spacing: 0.1em;
      text-shadow: 0.1em 0.1em 0.2em #00000080;
    }
    h1{
      font-size: 4em;
    }
    h2{
      margin-top: 1em;
      font-size: 2em;
    }
    img{
      width: 100%;
      height: 100vh;
      z-index: -1;
      position: absolute;
    }
</style>
  
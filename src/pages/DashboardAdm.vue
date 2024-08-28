<template>
    <div id="app">
        <SideBar />
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'

export default {
    name: 'DashboardAdm',
    components: {
        SideBar,
    }
}
</script>

<style scoped>
#app{
    display: flex;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
}
</style>
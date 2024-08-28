<template>
    <div id="app">
        <SideBar />
        <NavUp
            nameNav="Dashboard"
        />
        <div id="section">
            <div id="clothes">
                <CardClothes />
                <CardClothes />
                <CardClothes 
                    src="/icon/Womens Hoodie.png"
                    nameClothe="Clothes"
                />
                <CardClothes />
            </div>
        </div>
    </div>    
</template>

<script>
import SideBar from '../components/SideBar.vue'
import NavUp from '../components/Nav.vue'
import CardClothes from '../components/CardClothes.vue'

export default {
    name: 'DashboardAdm',
    components: {
    SideBar,
    NavUp,
    CardClothes
}
}
</script>

<style scoped>
#app{
    display: grid;
    grid-template-columns: 0fr 1fr;
    align-items: center;
    justify-content: center;
}
#section{
    width: 60%;
    height: 100%;
}
#clothes{
    display: flex;
    gap: 1em;
    height: 30em;
}
</style>
<template>
    <div id="app">
        <SideBar />
        <NavUp
            nameNav="Dashboard"
        />
        <div id="section">
            <div id="clothes">
                <CardClothes 
                    src="/icon/Clothes.png"
                    nameClothe="Clothes"
                />
                <CardClothes 
                    src="/icon/pants.png"
                    nameClothe="Pants"
                />
                <CardClothes 
                    src="/icon/Womens Hoodie.png"
                    nameClothe="Jackets"
                />
                <CardClothes 
                    src="/icon/More Details.png"
                    nameClothe="See More"
                />
            </div>
            <Balance 
                valor="1.000.000"
                porcent="26.5"
            />
        </div>
    </div>    
</template>

<script>
import SideBar from '../components/SideBar.vue'
import NavUp from '../components/Nav.vue'
import CardClothes from '../components/CardClothes.vue'
import Balance from '../components/Balance.vue'

export default {
    name: 'DashboardAdm',
    components: {
    SideBar,
    NavUp,
    CardClothes,
    Balance,
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
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 100%;
    height: 100%;
    gap: 2em;
}
#clothes{
    display: flex;
    gap: 1em;
    height: 100%;
}
</style>
<template>
    <div id="app">
        <SideBar />
        <NavUp
            nameNav="Dashboard"
        />
        <div id="section">
            <section>
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
            <div id="lists">
                <h2>Recent Order</h2>
                <listOrder />
                <listOrder />
                <listOrder />
                <listOrder />
                <ButtonList 
                nameButton="See all"
                style="
                padding: 0.2em 2.2em; 
                border-radius: 0.5em;
                align-self: flex-end;
                "
                />
            </div>
        </section>
        </div>
    </div>   
</template>

<script>
import SideBar from '../components/SideBar.vue'
import NavUp from '../components/Nav.vue'
import CardClothes from '../components/CardClothes.vue'
import Balance from '../components/Balance.vue'
import listOrder from '../components/listOrder.vue'
import ButtonList from '../components/Button.vue'

export default {
    name: 'DashboardAdm',
    components: {
    SideBar,
    NavUp,
    CardClothes,
    Balance,
    listOrder,
    ButtonList,
}
}
</script>

<style scoped>
#app{
    display: grid;
    grid-template-columns: 0fr 1fr;
    align-items: center;
    justify-content: center;
    background-color: #FCFCFC;
}
#section{
    width: 100%;
    height: 100%;
}
section{
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 2em;
    gap: 2em;
}
#clothes{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1em;
}
#clothes, #lists{
    height: fit-content;
    border-radius: 1em;
    background-color: #F3F3F3;
    padding: 1em;
}
#lists{
    display: flex;
    flex-direction: column;
}
h2{
    text-align: start;
    font-size: 1.8em;
    margin: 0.8em 0;
    color: #1678F3;
}
</style>
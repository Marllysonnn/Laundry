<template>
    <div id="app">
        <SideBar />
        <NavUp nameNav="Customers" />
        <div id="section">
            <div id="itensTop">
                <InputText />
                <div>
                    <ButtonList nameButton="Delete User" style="
                padding: 0.2em 2.2em; 
                border-radius: 0.5em;
                align-self: flex-end;
                background-color: #F31666;
                " />
                    <ButtonList nameButton="Edit User" style="
                padding: 0.2em 2.2em; 
                border-radius: 0.5em;
                align-self: flex-end;
                " />
                </div>
            </div>
            <section>
                <div id="lists">
                    <h2>Recent Order</h2>
                    <listOrder />
                    <listOrder />
                    <listOrder />
                    <listOrder />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import NavUp from '../components/Nav.vue'
import listOrder from '../components/listOrder.vue'
import ButtonList from '../components/Button.vue'
import InputText from '../components/Input.vue'

export default {
    name: 'DashboardAdm',
    components: {
        SideBar,
        NavUp,
        listOrder,
        ButtonList,
        InputText,
    }
}
</script>

<style scoped>
#app {
    display: grid;
    grid-template-columns: 0fr 1fr;
    align-items: center;
    justify-content: center;
    background-color: #FCFCFC;
}

#section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

#itensTop {
    width: 90%;
    display: flex;
    align-items: center;
    padding: 1em;
    justify-content: space-between;
}
#itensTop div {
    display: flex;
    gap: 1.5em;
}
section {
    width: 90%;
    display: grid;
    grid-template-columns: 0fr 0fr;
    padding: 2em;
    gap: 2em;
}

#lists {
    display: flex;
    flex-direction: column;
}

h2 {
    text-align: start;
    font-size: 1.8em;
    margin: 0.8em 0;
    color: #1678F3;
}
</style>
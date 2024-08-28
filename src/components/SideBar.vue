<template>
    <div>
        <div id="cube"></div>
        <nav>
            <a href=""><router-link to="/dashboard_adm"><img src="/icon/Dashboard Layout.png" alt="Public Icon"></router-link></a>
            <a href=""><img src="/icon/Customer.png" alt="Public Icon"></a>
            <a href=""><img src="/icon/Shopping Trolley.png" alt="Public Icon"></a>
            <a href=""><img src="/icon/Settings.png" alt="Public Icon"></a>
        </nav>
        <nav>
            <a href=""><img src="/icon/User.png" alt="Public Icon"></a>
            <a href="">
                <router-link to="/">
                    <img src="/icon/Export.png" alt="Public Icon">
                </router-link></a>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'SideBar',
        components: {

        }
    }

</script>

<style scoped>
    #cube{
        width: 100%;
        height: 4em;   
        background: #F3F3F3;
    }
    div, div a, nav{
        display: flex;
        flex-direction: column;
    }
    div{
        height: 100vh;
        width: fit-content;
        grid-row: span 2;
        justify-content: space-between;
        background: #F9F9F9;
    }
    nav{
        padding: 0 1.4em;
        gap: 2.5em;
    }
    nav:nth-child(3){
        margin-bottom: 2em;
    }
    img{
        width: 1.5em;
    }
</style>
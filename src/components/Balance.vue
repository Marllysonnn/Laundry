<template>
    <div id="content">
        <div id="desc">
            <h2>BALANCE</h2>
            <img src="/icon/Card Wallet.png" alt="Public icon">
        </div>
        <div id="valor">
            <h1>Rp.{{ valor }}</h1>
            <h3>{{ porcent}}% This Week</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'balanceCard',
    components: {

    },
    props: {
        valor: {
            type: String,
            required: false,
            default: '000.000.00'
        },
        porcent: {
            type: String,
            default: '0%'
        }
    }
}

</script>

<style scoped>
    #content{
        border-radius: 2em;
        box-shadow: 0.3em 0.5em 2em #00000020;
        background-color: #fff;
    }
    #desc, #valor{
        padding: 1em 2em;
    }
    #desc{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 1em 1em 0 0;
        color: #fff;
        background-color: #4DBAE9;
    }
    #valor{
        display: flex;
        flex-direction: column;
        border-radius: 0 0 1em 1em;
        color: #4DBAE9;
    }
    img{
        width: 2.5em;
    }
    h2{
        font-size: 1.8em;
        font-weight: 300;
    }
    h3{
        font-size: 1.2em;
    }
</style>
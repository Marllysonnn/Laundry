<template>
    <div id="card">
        <img 
        :src="src" alt="Public Icon"
        >
        <h2>{{ nameClothe }}</h2>
    </div>
</template>

<script>
export default {
    name: 'CardClothes',
    components: {

    },
    props: {
        src: {
            type: String,
            requery: true,
        },
        nameClothe: {
            type: String,
            default: ""
        }
    }
}
</script>

<style scoped>
#card {
    width: 10vw;
    height: 14vh;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 1em;
    border-radius: 1.8em;
    align-items: center;
    justify-content: center;
    box-shadow: 0.3em 0.5em 2em #00000020;
    background-color: #64A6F9;
}
h2{
    font-weight: 600;
    color: #fff;
}
img{
    width: 4em;
}
</style>
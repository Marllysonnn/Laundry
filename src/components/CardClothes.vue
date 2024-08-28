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
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    border-radius: 1.8em;
    align-items: center;
    justify-content: center;
    background-color: #1678F3;
}
h2{
    font-weight: 600;
    color: #fff;
}
img{
    width: 4em;
}
</style>
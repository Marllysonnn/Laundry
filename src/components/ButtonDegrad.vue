<template>
    <div>
        <button>{{ nameButton }}</button>
    </div>
</template>

<script>
export default {
    name: 'ButtonDegrad',
    components: {

    },
    props: {
        nameButton: {
            type: String,
            required: true
        },
        type: {
            type: String,
            defaut: "text"
        }
    },
}
</script>

<style scoped>
button {
    align-self: center;
    border: none;
    padding: 0.4em 2em;
    color: #fff;
    font-size: 1.2em;
    font-weight: 300;
    letter-spacing: 0.1em;
    border-radius: 2em;
    cursor: pointer;
    background: linear-gradient(-107deg, #807EF3, #E683F4);
}
</style>
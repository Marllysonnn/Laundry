<template>
    <div id="nav"><h2>{{ nameNav }}</h2></div>
</template>

<script>
export default {
    name: 'NavUp',
    companents: {
        
    },
    props: {
        nameNav: {
            type: String,
            default: "",
        }
    }
}
</script>

<style scoped>
#nav{
    width: 100%;
    height: 4em;
    display: flex;
    align-self: flex-start;
    align-items: center;
    background: #FCFCFC;
}
h2{
    font-size: 1.8em;
    letter-spacing: 0.1em;
    font-weight: 400;
    margin-left: 1em;
}
</style>
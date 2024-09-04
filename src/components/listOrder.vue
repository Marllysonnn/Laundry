<template>
    <div id="list">
        <div>
            <img :src="src" alt="">
            <h2>{{ nameList }}</h2>
            <h2>{{ clothesList }}</h2>
            <h2>${{ valorList }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'listOrder',
    components: {

    },
    props: {
        src: {
            type: String,
            default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgvmQwHu88e6Pku3ZXGMlpKpbMQ6MjnGwBeQ&s'
        },
        nameList: {
            type: String,
            requerid: true,
            default: 'nome'
        },
        clothesList: {
            type: String,
            requerid: true,
            default: 'clothes'
        },
        valorList: {
            type: Number,
            requerid: true,
            default: 0
        }
    },

}
</script>

<style>
#list {
    width: 100%;
    border-radius: 0.8em;
}
#list:nth-child(2n-2){
    background-color: #FDFDFD;
}
#list div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 2em;
}
#list img {
    width: 4.5em;
    border-radius: 25%;
}
</style>
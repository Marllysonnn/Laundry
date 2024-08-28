<template>
    <div id="list">
        <img :src src="" alt="">
        <h2>{{ nameList }}</h2>
        <h2>{{ clothesList }}</h2>
        <h2>${{ valorList }}</h2>
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
            default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPLVF8yTfOEUY61S13lYjG2uIhM1oxAuGiw&s'
        }, 
        nameList: {
            type: String,
            requerid: true
        },
        clothesList: {
            type: String,
            requerid: true
        },
        valorList: {
            type: Number,
            requerid: true
        }
    },

}
</script>

<style>
    
</style>
<template>
    <div id="content">
        <div id="desc">
            <h2>REPORT</h2>
            <img src="/icon/Attendance.png" alt="Public icon">
        </div>
        <div id="valor">
            <div>
                <h3>Total Order</h3>
                {{ valorOrder }}
            </div>
            <div>
                <h3>Received</h3>
                {{ valorReceived }}
            </div>
            <div>
                <h3>On Progress</h3>
                {{ valorProgress }}
            </div>
            <div>
                <h3>Completed</h3>
                {{ valorCompleted }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReportBox',
    components: {

    },
    props: {
        valorOrder: {
            type: String,
            default: '0',
            Required: false
        },
        valorReceived: {
            type: String,
            default: '0',
            Required: false
        },
        valorProgress: {
            type: String,
            default: '0',
            Required: false
        },
        valorCompleted: {
            type: String,
            default: '0',
            Required: false
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
        height: 79%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border-radius: 0 0 1em 1em;
        color: #4DBAE9;
    }
    #valor div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    h2{
        font-size: 1.8em;
        font-weight: 300;
    }
    h3{
        font-size: 1.5em;
    }
    img{
        width: 2.5em;
    }
</style>
<template>
    <div class="visor">
        <input type="text" :value="resultado" placeholder="0" readonly>

    </div>
</template>

<script>
    export default {
    name: 'VisorView',
    data() {
        return {
        result: ''
        }
    },
    props: {
        resultado: {
        type: String,
        result: '0',
        },
    },

    }
</script>

<style>
    input {
        width: 100%;
        height: 100%;
        font-size: 2em;
        text-align: right;
        border: none;
        background-color: transparent;
        color: #ffffff;
    }
    input::placeholder{
        color: #ffffff;
    }
    .visor {
        background-color: #343a40;
        color: #ffffff;
        font-size: 2em;
        text-align: right;
        padding: 0.5em 1em;
        border-radius: 0.5em;
        box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.5);
        overflow: hidden;
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .resultado {
        margin: 0;
        font-family: 'Courier New', Courier, monospace;
    }
</style>
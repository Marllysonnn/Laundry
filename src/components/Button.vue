<template>
    <button type="submit">{{ nameButton }}</button>
</template>

<script>
export default {
    name: "ButtonSubmit",
    props: {
        nameButton: {
            type: String,
            required: true
        },
        type: {
            type: String,
            defaut: "submit"
        }
    },
}
</script>

<style>
button{
  align-self: center;
  border: none;
  padding: 0.6em 5em;
  color: #fff;
  font-size: 1em;
  border-radius: 2em;
  cursor: pointer;
  background: #1678F3;
}
</style>
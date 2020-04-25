<template>
    <div id="app">
        <my-header></my-header>
        <router-view />
        <my-footer></my-footer>
    </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
    name: "App",
    components: {
        // componenti che "compongono" la pagina "App"
        MyHeader,
        MyFooter
    }
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>

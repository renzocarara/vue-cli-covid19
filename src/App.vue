<template>
    <div id="app">
        <my-header></my-header>
        <!-- router-view renderizza il contenuto della pagina attiva -->
        <transition name="fade" mode="out-in" appear>
            <router-view />
        </transition>
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

// transizione pagina in ingresso, la pagina da visualizzarci mette 1s prima di essere vidsibile completamente
.fade-enter-active{ transition: opacity .6s;}
.fade-enter { opacity: 0;}

// transizione pagina in uscita, la pagina visualizzta ci mette 1s per scomparire gradualmente
.fade-leave-active { transition: opacity .6s;}
.fade-leave-to { opacity: 0; }
</style>

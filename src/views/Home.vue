<template>
    <div class="">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <my-main></my-main>
    </div>
</template>

<script>
// @ is an alias to /src
import MyMain from "@/components/MyMain.vue";

export default {
    name: "Home",
    components: {
        // componenti che "compongono" la pagina "Home"
        MyMain
    }
};
</script>

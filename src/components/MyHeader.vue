<!-- Questo è un componente che "disegna" l'header (navbar) della mia pagina "App.vue" -->
<template>
 <div class="container-fluid my-header bg-primary-color">
    <b-navbar toggleable="lg" type="light" class="navbar-z bg-primary-color">

      <b-navbar-brand href="#">
        <div>
          <img src="../assets/corona.png" alt="coronavirus image" />
          <router-link to="/">Covid-19</router-link>
        </div>
      </b-navbar-brand>

      <b-navbar-toggle  class="" target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="bg-primary-color">
           <b-navbar-nav class="ml-auto">
               <b-nav-item v-for="(item, index) in items" :key="index">
                  <div class="float-right pr-3">
                    <router-link :to="item.address">{{ item.title }}</router-link>
                  </div>
               </b-nav-item>
           </b-navbar-nav>
      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
export default {
    name: "MyHeader",
    data() {
        return {
            // questo array di oggetti mi contiene le voci per il menu della navbar
            items: [
                { address: "/", title: "Home" },
                { address: "/about", title: "About" }
            ]
        };
    }
};
</script>

<!-- "scoped" stabilisce che questo stile è "locale" a questo componente -->
<!-- per dichiarare dello stile globale devo farlo nel file app.vue o comunque in una sezione Style  -->
<!-- che non ha "scoped" -->
<!-- posso anche importare un file .scss con @import -->
<style lang="scss" scoped>
// NOTA: '@' è un alias che punta alla cartella "/src"
@import "@/sass/app.scss";

.my-header {
    height: $headerHeight;
    padding-left: 0;
    padding-right: 0;

    img {
        height: 50px;
        margin-right: 20px;
    }

    a {
        font-weight: bold;
        color: $secondaryColor;
        &:hover {
            color: $hoverColor;
            text-decoration: none;
        }
        &.router-link-exact-active {
            color: $activeColor;
        }
    }
}
</style>

<template lang="html">
    <div class="p-5 my-page-min-h d-flex justify-content-center align-content-center flex-column">
      <div>
          <h1>Errore 404</h1>
          <h3>La pagina che hai cercato non esiste.</h3>
          <p>Prova a ripartire dalla
              <router-link to="/" class="btn my-button">Home</router-link>
          </p>
          <p>oppure
              <!-- la linea qui sotto può essere anche scritta così: <back-button /> -->
              <!-- oppure invece di "back-button" potrei scrivere "BackButton" o "backButton" o ancora "Back-Button" -->
             <back-button></back-button>
          </p>
      </div>
    </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";

export default {
    name: "NotFound",
    components: {
        // componenti utilizzati nella pagina "NotFound"
        BackButton
    }
};
</script>

<style lang="scss" scoped>
@import "@/sass/app.scss";

</style>

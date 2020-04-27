<template>
  <div class="p-5 my-page-min-h d-flex justify-content-center align-content-center flex-column">
    <div>
        <h1>Questa è un esercizio didattico sull'utilizzo di Vue CLI.</h1>
          <p>
          E' stato utilizzato uno scaffolding preparato con Vue CLI 3.<br>
          E' stata inclusa la gestione del routing (vue-router).<br></p>
          Dipendenze aggiuntive:
          <p class="d-flex justify-content-center align-content-center">
          <ul class="text-left">
            <li><strong>axios</strong> (per chiamata asincrona alle API che forniscono i dati da visualizzare)</li>
            <li><strong>bootstrap-vue</strong> (per lo stile reattivo)</li>
            <li><strong>moment.js</strong> (per la formattazione delle date)</li>
          </ul>
          </p>
          <p>
          E' inoltre stato incluso il foglio di stile di Bootstrap 4.<br>
          <small>NOTA: non è stato utilizzato Jquery.</small>
          </p>

          <!-- la linea qui sotto può essere anche scritta così: <back-button /> -->
          <!-- oppure invece di "back-button" potrei scrivere "BackButton" o "backButton" o ancora "Back-Button" -->
          <back-button></back-button>

    </div>
  </div>
</template>

<script>
import BackButton from "@/components/BackButton.vue";

export default {
    name: "About",
    components: {
        // componenti utilizzati nella pagina "About"
        BackButton
    }
};

</script>

<style lang="css" scoped>
</style>

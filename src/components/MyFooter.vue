<!-- Questo è un componente che "disegna  il footer della mia pagina App.vue" -->
<!-- verrà appunto "richiamato" dalla Appe.vue -->
<template>
  <div class="container-fluid my-footer bg-primary-color text-light">
      <div class="row">
          <div class="col">
               Copyright &copy; 2020 - Renzo Carara
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {};
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

.my-footer {
    height: 50px;
}
</style>

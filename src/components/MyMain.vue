<template>
  <div class="container">
    <div class="my-page-min-h pt-5">
      <div class="row">
        <div class="col-12 col-md-6 col-xl-4">
          <p class="h2">Paese: {{ options.find(x => x.value === selected).text }}</p>
          <p class="h4">{{ day }}</p>
        </div>

        <div class="col-12 col-md-6 col-xl-4 mb-2">
          <span class="h4">Cambia paese:</span>
          <b-form-select @change="getData" v-model="selected" :options="options"></b-form-select>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6 col-xl-4 mb-2">
          <div class="card border-danger">
            <h5 class="card-header bg-transparent">Casi:</h5>
            <div class="card-body">
              <p class="card-text">
                Nuovi contagiati: {{ cases_new }}
              </p>
              <p class="card-text">
                Totale contagiati: {{ cases_active }}
              </p>
              <p class="card-text">
                Critici: {{ cases_critical }}
              </p>
              <p class="card-text">
                Guariti: {{ cases_recovered }}
              </p>
            </div>
            <div class="card-footer bg-transparent">
              Totale casi: {{ cases_total }}
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-xl-4">
          <div class="card border-danger">
            <h5 class="card-header bg-transparent">Decessi:</h5>
            <div class="card-body">
              <p class="card-text">Nuovi: {{ deaths_new }}</p>
            </div>
            <div class="card-footer bg-transparent">
              Totale decessi: {{ deaths_total }}
            </div>
          </div>

          <div class="card border-danger mt-2 mb-2">
            <h5 class="card-header bg-transparent">Tamponi:</h5>
            <div class="card-footer bg-transparent">
              Totale tamponi: {{ tests_total }}
            </div>
          </div>
        </div>

        <div class="col-12 col-md-12 col-xl-4 mb-2">
          <div class="card border-secondary">
            <div class="card-header">
              Link utili:
            </div>
            <div>
              <b-list-group>
                <b-list-group-item><a target="_blank" href="http://www.salute.gov.it/portale/nuovocoronavirus/dettaglioFaqNuovoCoronavirus.jsp?id=228&lingua=italiano">FAQ Ministero della salute</a></b-list-group-item>
                <b-list-group-item><a target="_blank" href="https://www.iss.it/coronavirus">ISS - Istituto Superiore di Sanità</a></b-list-group-item>
                <b-list-group-item><a target="_blank" href="http://www.protezionecivile.gov.it/">Dipartimento per Protezione Civile</a></b-list-group-item>
                <b-list-group-item><a target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">OMS (World Health Organization)</a></b-list-group-item>
              </b-list-group>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="row mt-5">
        <div class="col-12">
          <b-card
            class=""
            border-variant="secondary"
            header="Ultime notizie"
            header-bg-variant="light"
            header-text-variant="dark"
            align="center"
          >
            <b-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.</b-card-text
            >
          </b-card>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// import axios from "axios";

import moment from "moment";
moment.locale("it");

// con export default rendo disponibile lo script all'applicazione
export default {
    // registro (dichiaro) i componenti utilizzati da questo componente
    components: {
        // nomecomponente
    },
    // qui, in data(), definisco le mie variabili, le variabili di questo componente
    data() {
        return {
            selected: "Italy",
            options: [
                // { value: null, text: "Seleziona un paese" },
                { value: "Italy", text: "Italia" },
                { value: "France", text: "Francia" },
                { value: "Spain", text: "Spagna" },
                { value: "Germany", text: "Germania" },
                { value: "USA", text: "USA" },
                { value: "UK", text: "UK" }
            ],

            // dati ricevuti dalla chiamata API
            day: "",
            cases_active: "n.d.",
            cases_new: "n.d.",
            cases_recovered: "n.d.",
            cases_total: "n.d.",
            cases_critical: "n.d.",
            deaths_new: "n.d.",
            deaths_total: "n.d.",
            tests_total: "n.d."

            // covid_date: "" // tbd: per selezionare i dati di uno specifico giorno
        };
    },
    // questa funzione mounted() viene chiamata solo quando il componente è già stato montato
    mounted() {
        // mi salvo il riferimento a questo componente, per poi utilizzarlo all'interno delle funzioni richiamate
        // in modo da poter accedere ai dati (data()) di questo componente
        let self = this;

        // eseguo la chiamata all'API per recuperare i dati
        this.callAxios(self, this.selected);
    },
    methods: {
        extractData(self, data) {
            // DESCRIZIONE:
            //  riceve in ingresso i dati (data) inviati dalla API e li smista in variabili dedicate

            // estraggo i dati dalla response ricevuta dalla chiamata API
            self.day = moment(data.day).format("dddd, D MMMM YYYY"); // converto la data in un formato "moment", localizzato
            self.cases_active =
                data.cases.active != null ? data.casesactive : "n.d.";
            self.cases_new = data.cases.new != null ? data.cases.new : "n.d.";
            self.cases_recovered =
                data.cases.recovered != null ? data.cases.recovered : "n.d.";
            self.cases_total =
                data.cases.total != null ? data.cases.total : "n.d.";
            self.cases_critical =
                data.cases.critical != null ? data.cases.critical : "n.d.";
            self.deaths_new =
                data.deaths.new != null ? data.deaths.new : "n.d.";
            self.deaths_total =
                data.deaths.total != null ? data.deaths.total : "n.d.";
            self.tests_total =
                data.tests.total != null ? data.tests.total : "n.d.";
        },

        getData() {
            // DESCRIZIONE:
            // viene chiamata quando viene selezionato un nuovo paese nella "select"
            // esegue una chiamata "axios" per recuperare i dati in base al paese selezionato

            // mi salvo il riferimento a questo componente, per poi utilizzarlo all'interno della funzione anonima richiamamta da axios
            // in modo da poter accedere ai dati di questo componente
            let self = this;
            this.callAxios(self, this.selected);
        },

        callAxios(self, selected_country) {
            // DESCRIZIONE:
            // chiamata asincrona (tipo AJAX), uso $http che è un alias di axios, definito "globalmente" in main.js
            // attraverso l'uso di "prototype", altrimenti se volevo CHIAMARE direttamente "axios" dovevo importarlo localmente
            // in questo componente con: import axios from "axios";
            // riceve il parametro "self", che poi viene passato ad una funzione chiamata,
            // self serve per poter accedere alle proprietà dichiarate in data()
            // riceve anche il nome del paese selezionato dall'utente, per il quale verranno richiesti i dati

            this.$http({
                // axios({
                method: "GET",
                url: "https://covid-193.p.rapidapi.com/statistics",
                headers: {
                    "content-type": "application/json",
                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                    "x-rapidapi-key":
                        "0708d8f6a0msh5e394cccc50dbcdp11905cjsn5c63890b8b90"
                },
                params: {
                    country: selected_country
                }
            })
                .then(response => {
                    // chiamo una funzione per estrarre i dati dalla risposta ricevuta
                    this.extractData(self, response.data.response[0]);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style lang="scss">
// NOTA: '@' è un alias che punta alla cartella "/src"
@import "@/sass/app.scss";
</style>

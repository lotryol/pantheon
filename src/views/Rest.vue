<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="home"></ion-back-button>
        </ion-buttons>
        <ion-title>Bienvenido </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Bienvenido</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <ion-label class="title-app">
              <h1 id="icon-papanoel"></h1>
              <h1>Objetos de league of draven</h1>
              <img src="../theme/images/draven.jpg" alt="" width="300" height="150" class="imagen-tag">
            </ion-label>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-label position="floating">Id</ion-label>
              <ion-input type="text" v-model="id"></ion-input>
            </ion-item>
          </ion-list>
          <ion-button expand="block" @click="viewApi">Get</ion-button>
          <!-- <ion-button expand="block" @click="login">Post</ion-button> -->

          <!-- <ion-button expand="block" @click="registro">Registro</ion-button> -->
        </ion-card-content>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-label >Titulo</ion-label>
              <p>{{titulo}}</p>
            </ion-item>
            <ion-item>
              <ion-label>Autor</ion-label>
              <p>{{autor}}</p>
            </ion-item>
            <ion-item>
              <ion-label >Genero</ion-label>
              <p>{{ genero }}</p>
            </ion-item>
            <ion-item>
              <ion-img :src="imagen" width="50" height="50" class="imagen-tag"></ion-img>
            </ion-item>
            <ion-item>
              <ion-label >Descripcion</ion-label>
              <p>{{descripcion}}</p>
            </ion-item>
          </ion-list>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonLabel,
  alertController,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonButton,
  IonButtons,
  IonBackButton,
  IonImg,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { apiRest } from "../Api/Rest";
// import axios from 'axios';
export default defineComponent({
  name: "RestLinea",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonLabel,
    IonCardContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonButton,
    IonButtons,
    IonBackButton,
    IonImg,
  },
  data() {
    return {
      id: "",
      titulo: "",
      autor: "",
      genero: "",
      imagen: "",
      descripcion: "",
      error:"",
      uri:""
    };
  },
  methods: {
    async errorLogin(error: string) {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Error en la conexión",
        // subHeader: "Datos no encontrados",
        message: error + " Ingrese un ID valido",
        buttons: ["OK"],
      });
      await alert.present();
    },
    viewApi() {
      apiRest("http://10.157.17.94:8080/libros/"+ this.id).then((response) => {
        console.log(response.data);
        this.titulo = response.data.titulo;
        this.autor = response.data.autor;
        this.genero = response.data.genero;
        this.imagen = response.data.imagen;
        this.descripcion = response.data.descripcion;
        
      }).catch((error) => {
        this.errorLogin(error);
      });
    },
  },
});
</script>
<style>
  .title-app {
    text-align: center;
  }
  .imagen-tag {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>
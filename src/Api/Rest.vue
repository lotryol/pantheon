<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Rest Api</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  <ion-label>
                    <h2>Rest</h2>
                  </ion-label>
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-item>
                    <ion-label position="floating">ID</ion-label>
                    <ion-input type="text" v-model="id"></ion-input>
                  </ion-item>
                    <ion-button expand="block" @click="get">GET</ion-button>
                    <ion-button expand="block" @click="post">POST</ion-button>
                  <ion-item>
                    <ion-label position="floating">Nombre</ion-label>
                    <ion-input type="text" v-model="nombre" placeholder=""></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Correo</ion-label>
                    <ion-input type="text" v-model="correo"></ion-input>
                  </ion-item>
                    <ion-item>
                        <ion-label position="floating">Username</ion-label>
                        <ion-input type="text" v-model="usuario"></ion-input>
                  </ion-item>
                </ion-list>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonCardTitle,
  IonCardHeader,
  IonItem,
  IonList,
  IonButton,
  IonCardContent,
  IonCard,
  IonCol,
  IonRow,
  IonGrid,
  IonInput,
  alertController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import router from "@/router";
export default {
    name: "RestApi",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonCardTitle,
    IonCardHeader,
    IonItem,
    IonList,
    IonButton,
    IonCardContent,
    IonCard,
    IonCol,
    IonRow,
    IonGrid,
    IonInput,
  }
}
</script>

<style>

</style>
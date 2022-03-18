<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Monte Targon</ion-title>
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
                    <h2>Pantheon la lanza inquebrantable</h2>
                  </ion-label>
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                    <ion-item>
                  <p>Cuanto podríamos avanzar si no tuvíeramos que cargar con nuestros miedos a cuesta.</p>
                    </ion-item>
                </ion-list>
                <ion-button expand="block" @click="home">Cerrar Sesion</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import router from '@/router';
import "@/dbFirebase/initFirebase";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonCardTitle, IonCardHeader, IonItem, IonList, IonButton, IonCardContent, IonCard, IonCol, IonRow, IonGrid } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LoginLinea',
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
    IonGrid
  },
  data() {
    return {
      usuario: '',
      password: ''
    }
  },
  login(){
    console.log(this.usuario)
    console.log(this.password)
  },methods:{
  home(){
    router.push('/Home')
  }
  }
  
});
</script>
<style scoped>
</style>
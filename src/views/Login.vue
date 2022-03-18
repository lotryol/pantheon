<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Login Linea APP</ion-title>
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
                    <h2>Login</h2>
                  </ion-label>
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-item>
                    <ion-label position="floating">Usuario</ion-label>
                    <ion-input type="text" v-model="usuario"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Contraseña</ion-label>
                    <ion-input type="password" v-model="password"></ion-input>
                  </ion-item>
                </ion-list>
                <ion-button expand="block" @click="login">Iniciar Sesion</ion-button>
                <ion-button expand="block" @click="Register">Registrar</ion-button>
                <ion-button expand="block" @click="home">Pantalla Principal</ion-button>
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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LoginLinea',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
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
    Register(){
        router.push('/Register')
  },
  home(){
    router.push('/Home')
  }
  }
  
});
</script>
<style scoped>
</style>
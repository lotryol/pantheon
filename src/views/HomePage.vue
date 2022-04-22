<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Aplicacion</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <strong>Pantheon</strong>
        <p>Hola, bienvenido a la Aplicacion</p>
        
        <p>
          <ion-button expand="block" @click="Login">iniciar sesion</ion-button>
          <ion-button expand="block" @click="Register">Registrar</ion-button>
          <ion-button expand="block" @click="rest">WEB</ion-button>
          <ion-button expand="block" @click="ubicacionH">Ubicacion</ion-button>
          {{longitud}}
          {{latitud}}
        </p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// echo por leonardo
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import {ubicacionPrueba} from '../methods/methods';
import router from '@/router';

export default defineComponent({
  data(){
    return{
      latitud: NaN,
      longitud: NaN,
    }
  },
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },methods:{
  Login(){
    router.push('/Login')
  },
  Register(){
    router.push('/Register')
  },
  rest(){
    router.push('/rest')
  },
  ubicacionH(){
    const ubic= new ubicacionPrueba();
    ubic.ubla()

    
  }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>

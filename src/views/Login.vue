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
              {{passIncorrect}}
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
import app from "../dbFirebase/initFirebase";
import { getFirestore,doc, getDoc} from "firebase/firestore/lite";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonCardTitle, IonCardHeader, IonItem, IonList, IonButton, IonCardContent, IonCard, IonCol, IonRow, IonGrid, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';
import sha256 from 'js-sha256';
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
    IonGrid,
    IonInput
  },
  data() {
    return {
      usuario: '',
      password: '',
      passIncorrect: ''
    }
  },
  methods:{
    Register(){
        router.push('/Register')
  },
  home(){
    router.push('/Home')
  },
  async login(){
    const db = getFirestore(app);
    const docRef = doc(db, "usuarios", this.usuario);
  const docSnap = await getDoc(docRef);

  
  if (docSnap.exists()) {
    const contrasena = docSnap.data();
    //contrasena.password
    const comparar= sha256.sha256(this.password)
    if(comparar==contrasena.password){
      router.push('/Pantalla')
    }else{
      this.passIncorrect='Datos erroneos'
    }

    //console.log("Document data:", docSnap.data());
  } else {
  // doc.data() will be undefined in this case
    this.passIncorrect='Datos erroneos'
    console.log("No such document!");
  }
  },
}});
</script>
<style scoped>
</style>
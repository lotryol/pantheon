<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Registro</ion-title>
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
                    <h2>Registro</h2>
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
                    <ion-label position="floating">Email</ion-label>
                    <ion-input
                      type="email"
                      v-model="email"
                      placeholder=""
                    ></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Contraseña</ion-label>
                    <ion-input type="password" v-model="password"></ion-input>
                  </ion-item>
                </ion-list>
                <ion-button expand="block" @click="comparador"
                  >Registrar</ion-button
                >
                <ion-button expand="block" @click="login"
                  >Iniciar Sesion</ion-button
                >
                <ion-button expand="block" @click="home"
                  >Pantalla Principal</ion-button
                >
                {{ err }}
                {{ eme }}
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
<script lang="typescript">
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
} from "@ionic/vue";
import { defineComponent } from "vue";
// import frs from "@firebase/firestore";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  QuerySnapshot,
} from "firebase/firestore/lite";
import "@/dbFirebase/initFirebase";
import router from "@/router";
import app from "../dbFirebase/initFirebase";
import sha256 from "js-sha256";
export default defineComponent({
  name: "RegisterLinea",
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
  },
  data() {
    return {
      usuario: "",
      password: "",
      email: "",
      err: "",
      eme: "",
    };
  },
  methods: {
    async registrar() {
      const db = getFirestore(app);
      const docRef = doc(db, "usuarios", this.usuario);
      const docSnap = await getDoc(docRef)
          if (this.usuario.length > 0 && this.password.length > 0 && this.email.length > 0) {
            this.eme = "soy el tercer if";

            setDoc(doc(db, "usuarios", this.usuario), {
              email: this.email,
              password: sha256.sha256(this.password),
            });
            this.usuario = "";
            this.password = "";
            this.email = "";

            router.push("/login");
      }
    },
    login() {
      router.push("/login");
    },
    home() {
      router.push("/Home");
    },
    async comparador(){
      const db =getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "usuarios"))

      querySnapshot.forEach(doc => {
        if(doc.data().email==this.email){
          console.log("este email ya esta registrado")
        }else if(doc.id==this.usuario){
          console.log("este usuario ya esta registrado")
        }else{
          this.registrar()
        }
      })
    }
  },
});
</script>

<style>
</style>
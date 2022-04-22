import { defineComponent } from "vue";

// export const data={
//     latitud: NaN,
//     longitud: NaN,
// }
// export const ubicacion=function (){
//     navigator.geolocation.getCurrentPosition(function(position){
//         position.coords.latitude;
//         position.coords.longitude;
//         // console.log("Función ubicacion: "+data.latitud+" "+data.longitud);
//         const datos={
//             latitud: position.coords.latitude,
//             longitud: position.coords.longitude,
//         }
//     });
// }
export class ubicacionPrueba{
    latitud=NaN;
    longitud=NaN;

     ubla=function(){
        navigator.geolocation.getCurrentPosition(function(position){
            position.coords.latitude;
            // position.coords.longitude;
            // console.log("Función ubicacion: a "+ position.coords.latitude+" "+position.coords.longitude);
            
            // this.latitud=position.coords.latitude
            // this.longitud= position.coords.longitude
            
           
                return position.coords.latitude
                // longitud: position.coords.longitude
            
        });

    }
    ublo=function(){
        navigator.geolocation.getCurrentPosition(function(position){
            // position.coords.latitude;
            position.coords.longitude;
            // console.log("Función ubicacion: a "+ position.coords.latitude+" "+position.coords.longitude);
            
            // this.latitud=position.coords.latitude
            // this.longitud= position.coords.longitude
            
           
                
                return position.coords.longitude
            
        });
    }
}

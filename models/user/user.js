import mongoose from 'mongoose';
const { Schema, model } = mongoose;

//import { Enum_Rol, Enum_EstadoUsuario } from '../enums/enums.js';

// interface User {
//   correo: string;
//   identificacion: string;
//   nombre: string;
//   apellido: string;
//   rol: Enum_Rol;
//   estado: Enum_EstadoUsuario;
// }

const userSchema = new Schema({
  correo: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      // (email) => {
      //   if (email.includes('@') && email.includes('.')) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // },
      message: 'El formato del correo electrónico está malo.',
    },
  },
  identificacion: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
    enum: ['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR'],
  },
  estado: {
    type: String,
    enum: ['PENDIENTE', 'AUTORIZADO', 'NO_AUTORIZADO'],
    default: 'PENDIENTE',
  },

},

{
  toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
  toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
},
);


//ESTO ES PARA PODER HACER LAS POPULACIONES ONE TO MANY UN PROYECTO MULTIPLES AVANCES  O UN PROYECTO MUCHAS INSCRIPCIONES PARA ESO SE USA EL VIRTUAL
//ojo no funciona
//  userSchema.virtual('estudiantes', {
//    ref: 'Usuario',
//    localField: '_id',
//    foreignField: 'rol',
//  });

userSchema.virtual('proyectos',{
  ref: 'Proyecto',
  localField: '_id',
  foreignField:'lider',
});

userSchema.virtual('avances',{
  ref: 'Avance',
  localField: '_id',
  foreignField:'creadoPor',
});

userSchema.virtual('usuarios',{
  ref: 'Usuario',
  localField: '_id',
  foreignField:'_id',
});

const UserModel = model('User', userSchema);

export { UserModel };
//estoy pendiente de utilizar aqui los virtuales para poder revisar los listados 
//de estudiantes 
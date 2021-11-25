import mongoose from 'mongoose';
//import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_EstadoAprobado, Enum_TipoObjetivo} from '../enums/enums';
import { UserModel } from '../user/user.js';
const { Schema, model } = mongoose;

// interface Proyecto {
//   nombre: string;
//   presupuesto: number;
//   fechaInicio: Date;
//   fechaFin: Date;
//   aprobado: Enum_EstadoAprobado;
//   estado: Enum_EstadoProyecto;
//   fase: Enum_FaseProyecto;
//   lider: Schema.Types.ObjectId;
//   objetivos:[Schema.Types.ObjectId];
 
//}

const projectSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },

  aprobado:{
    type:String,
    enum:['APROBADO', 'NO_APROBADO','PENDIENTE'],
    default: 'PENDIENTE',
  },
  estado: {
    type: String,
    enum: ['ACTIVO','INACTIVO'],
    default: 'INACTIVO',
  },
  fase: {
    type: String,
    enum: ['INICIADO','EN_DESARROLLO','TERMINADO','PENDIENTE'],
    default: 'PENDIENTE',
  },
  lider: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: UserModel,
  },
  objetivos: [
    {
      descripcion: {
        type: String,
        required: true,
      },
      tipo: {
        type: String,
        enum: ['GENERAL', 'ESPECIFICO'],
        required: true,
      },
    },
  ],
  
},
{
  toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
  toObject: { virtuals: true }, // So `console.log()` and other functions that use `toObject()` include virtuals
}

);
//ESTO ES PARA PODER HACER LAS POPULACIONES ONE TO MANY UN PROYECTO MULTIPLES AVANCES  O UN PROYECTO MUCHAS INSCRIPCIONES PARA ESO SE USA EL VIRTUAL
projectSchema.virtual('avances', {
  ref: 'Avance',
  localField: '_id',
  foreignField: 'proyecto',
});

projectSchema.virtual('inscripciones', {
  ref: 'Inscripcion',
  localField: '_id',
  foreignField: 'proyecto',
});



const ProjectModel = model('Proyecto', projectSchema);

export { ProjectModel };

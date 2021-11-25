import mongoose from 'mongoose';

import { ProjectModel } from '../project/project.js';
import { UserModel } from '../user/user.js';
const { Schema, model } = mongoose;
// interface Avance {
//   fecha: Date;
//   descripcion: string;
//   observaciones: [string];
//   fase:Enum_FaseProyecto;
//   proyecto: Schema.Types.ObjectId;
//   creadoPor: Schema.Types.ObjectId;
// }

const advancementSchema = new Schema({
  fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
    },
  ],

  fase: {
    type: String,
    enum: ['INICIADO','EN_DESARROLLO','TERMINADO','PENDIENTE'],
    required:false,
  },
  

  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },
});

const AdvancementModel = model('Avance', advancementSchema);

export { AdvancementModel };

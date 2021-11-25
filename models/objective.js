import mongoose from 'mongoose';
const { Schema, model } = mongoose;
// interface Objective{
//   descripcion: string;
//   tipo: Enum_TipoObjetivo;
//   proyecto: Schema.Types.ObjectId;
// }

const objectiveSchema = new Schema({
  descripcion: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['GENERAL', 'ESPECIFICO'],
    required: true,
  },
});

// interface Objective {
//   descripcion: string;
//   tipo: Enum_TipoObjetivo;
// }

// const objectiveSchema = new Schema<Objective>({
//   descripcion: {
//     type: String,
//     required: true,
//   },
//   tipo: {
//     type: String,
//     enum: Enum_TipoObjetivo,
//     required: true,
//   },
// });

const ObjectiveModel = model('Objetivo', objectiveSchema);

export { ObjectiveModel };

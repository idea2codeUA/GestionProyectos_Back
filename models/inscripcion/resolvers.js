import { InscriptionModel } from './inscripcion.js';

const resolverInscripciones = {
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find();
      return inscripciones;
    },

    InscripcionProyecto: async (parent, args) => {
      const inscripcionProyecto = await InscriptionModel.find({proyecto: args.idProyecto});
      return inscripcionProyecto;
    },

    // filtrarAvance: async (parents, args) => {
    //   const avanceFiltrado = await AdvancementModel.find({ proyecto: args.idProyecto })
    //     .populate({path:'proyecto'})
    //     .populate({path:'creadoPor'});
    //   return avanceFiltrado;
    // },


  },
  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await InscriptionModel.create({
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcionCreada;
    },
    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(args.id, {
        estado: 'ACEPTADA',
        fechaIngreso: Date.now(),
      },
      {new:true}
      );
      return inscripcionAprobada;
    },
  },
};

export { resolverInscripciones };

import { AdvancementModel } from './avances.js';

const resolversAvance = {
  Query: {
    Avances: async (parent, args) => {
      const avances = await AdvancementModel.find().populate({path:'proyecto'}).populate({path:'creadoPor'});
      return avances;
    },
    filtrarAvance: async (parents, args) => {
      const avanceFiltrado = await AdvancementModel.find({ proyecto: args.idProyecto })
        .populate({path:'proyecto'})
        .populate({path:'creadoPor'});
      return avanceFiltrado;
    },

    

  },
  Mutation: {
    crearAvance: async (parents, args) => {
      const avanceCreado = AdvancementModel.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      
      });
      return avanceCreado;
    },

    
    editarAvance: async (parent, args) => {
      const avanceEditado = await AdvancementModel.findByIdAndUpdate(args._id, {
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      },
      {new:true});

      return avanceEditado;
    },

  },
};

export { resolversAvance };

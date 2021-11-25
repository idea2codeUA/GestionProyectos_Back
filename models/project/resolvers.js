import { ProjectModel } from './project.js';

const resolversProyecto = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ProjectModel.find().populate({path:'avances'}).populate({path:'inscripciones'});
      return proyectos;
    },

    Proyecto: async (parent, args) => {
      const proyecto = await ProjectModel.findOne({ _id: args._id }).populate({path:'avances'});
      return proyecto;
    },
  }, 
  
   


  

  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectoCreado;
    },

    editarProyecto: async (parent, args) => {
      const proyectoEditado = await ProjectModel.findByIdAndUpdate(args._id, {
        nombre: args.nombre,
        aprobado:args.aprobado,
        estado: args.estado,
        fase: args.fase,
        presupuesto: args.presupuesto,
        
      },
      {new:true});
      return proyectoEditado
    }
  },
};

export { resolversProyecto };

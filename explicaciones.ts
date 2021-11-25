import conectarBD from './db/db';
import { UserModel } from './models/user/user';
import { Enum_Rol,Enum_EstadoUsuario, Enum_TipoObjetivo, Enum_EstadoInscripcion, Enum_FaseProyecto, Enum_EstadoAprobado} from './models/enums/enums';
import { ProjectModel } from './models/project/project';
import { ObjectId } from 'mongoose';
import { ObjectiveModel } from './models/objective';
import{InscriptionModel} from './models/inscripcion/inscripcion';
import { AdvancementModel } from './models/avance/avances';

const main = async()=>{
  await conectarBD();



  const lider1 = await UserModel.create({
    nombre: 'Hector',
    apellido: 'Delgado',
    correo: 'delgado.h.a@gmail.com',
    identificacion: '123435',
    rol: Enum_Rol.LIDER,
    estado:Enum_EstadoUsuario.PENDIENTE,
    
    });

    const administrador = await UserModel.create({
      nombre: 'Johan ',
      apellido: 'Castillo',
      correo: 'johinymazzo@gmail.com',
      identificacion: '223439',
      rol: Enum_Rol.ADMINISTRADOR,
      estado:Enum_EstadoUsuario.AUTORIZADO,
      
      });

      const lider2 = await UserModel.create({
        nombre: 'Camilo',
        apellido: 'Ortiz',
        correo: 'camiloorvi@gmail.com',
        identificacion: '2343230',
        rol: Enum_Rol.LIDER,
        estado:Enum_EstadoUsuario.PENDIENTE,
        
        });

        const estudiante1 = await UserModel.create({
          nombre: 'Juan',
          apellido: 'Perez',
          correo: 'jfl28488@gmail.com',
          identificacion: '123422',
          rol: Enum_Rol.ESTUDIANTE,
          estado:Enum_EstadoUsuario.PENDIENTE,
          
          });

          const estudiante2 = await UserModel.create({
            nombre: 'David',
            apellido: 'Trujillo',
            correo: 'dtrujillo1003@gmail.com',
            identificacion: '876598',
            rol: Enum_Rol.ESTUDIANTE,
            estado:Enum_EstadoUsuario.PENDIENTE,
            
            });



    const proyectoMastitis = await ProjectModel.create({
    nombre: 'Early Mastitis Detection',
    fechaInicio: new Date ('2021/12/01'),
    fechaFin: new Date ('2022/12/01'),
    presupuesto: 12000000,
    lider: lider1._id,
    
      });
    
    const objetvoGeneral = await ObjectiveModel.create({
      descripcion:'Detectar mastitis clinica en los primeros 100 dias post parto using MLT',
      tipo:Enum_TipoObjetivo.GENERAL,
      proyecto: proyectoMastitis._id,
    });
    
    const objetvoEspecifico1 = await ObjectiveModel.create({
      descripcion:'Seleccionar hatos con documentacion completa',
      tipo:Enum_TipoObjetivo.ESPECIFICO,
      proyecto: proyectoMastitis._id,
    });
    const objetvoEspecifico2 = await ObjectiveModel.create({
      descripcion:'Determinar cual algoritmo tienen la mejor especificidad y sensibilidad',
      tipo:Enum_TipoObjetivo.ESPECIFICO,
      proyecto: proyectoMastitis._id,
    });


    const proyectoMascotas = await ProjectModel.create({
      nombre: 'Proyecto Tenencia Responsable de Mascotas',
      fechaInicio: new Date ('2021/12/01'),
      fechaFin: new Date ('2023/12/01'),
      presupuesto: 12000000,
      lider: lider2._id,
      
        });
      
      const objetvoGeneral2 = await ObjectiveModel.create({
        descripcion:'Educar a los tenedores de mascotas en la zona norte de Bogota en tenencia responsable',
        tipo:Enum_TipoObjetivo.GENERAL,
        proyecto: proyectoMascotas._id,
      });
      
      const objetvoEspecifico12 = await ObjectiveModel.create({
        descripcion:'Capacitar lideres comunitarios de 20 barrios en TRM',
        tipo:Enum_TipoObjetivo.ESPECIFICO,
        proyecto: proyectoMascotas._id,
      });
      const objetvoEspecifico22 = await ObjectiveModel.create({
        descripcion:'Esterilizar el 70% de la poblacion canina y felina de la zona para evitar sobrepoblacion',
        tipo:Enum_TipoObjetivo.ESPECIFICO,
        proyecto: proyectoMascotas._id,
      });
  
      const objetvoEspecifico32 = await ObjectiveModel.create({
        descripcion:'Implementar el esquema de vacunacion en el 90% de la poblacion',
        tipo:Enum_TipoObjetivo.ESPECIFICO,
        proyecto: proyectoMascotas._id,
      });


      const inscripcion1 = await InscriptionModel.create({
        estado:Enum_EstadoInscripcion.PENDIENTE,
        fechaIngreso: new Date ('2021/12/15'),
        fechaEgreso: new Date ('2022/06/04'),
        proyecto: proyectoMascotas._id,
        estudiante:estudiante1._id,
      })


      const inscripcion2 = await InscriptionModel.create({
        estado: Enum_EstadoInscripcion.PENDIENTE,
        fechaIngreso: new Date ('2021/12/15'),
        fechaEgreso: new Date ('2022/03/15'),
        proyecto: proyectoMastitis._id,
        estudiante: estudiante2._id,
      })

      const avanceMast1 = await AdvancementModel.create({
        fecha: new Date ('2021/12/15'),
        descripcion: 'El proyecto de mastitis esta comenzando bien',
        observaciones: 'se necesita dinero pero ahi vamos',
        fase:Enum_FaseProyecto.INICIADO,
        proyecto:proyectoMastitis._id,
        creadoPor: estudiante1._id,

      })


      const avanceMast2 = await AdvancementModel.create({
        fecha: new Date ('2021/12/15'),
        descripcion: 'las fincas han sido seleccionadas',
        observaciones: 'se necesita dinero pero ahi vamos',
        fase:Enum_FaseProyecto.INICIADO,
        proyecto:proyectoMastitis._id,
        creadoPor: estudiante1._id,

      })

      const avanceMast3 = await AdvancementModel.create({
        fecha: new Date ('2021/12/15'),
        descripcion: 'La base de datos ha sido construida',
        observaciones: 'se necesita dinero pero ahi vamos',
        fase:Enum_FaseProyecto.INICIADO,
        proyecto:proyectoMastitis._id,
        creadoPor: estudiante1._id,

      })

      const avanceMascotas = await AdvancementModel.create({
        fecha: new Date ('2021/12/23'),
        descripcion: 'El proyecto de identificacion de mascotas comenzo',
        observaciones: 'hay fondos pero hay problemas con el estudiante por tiempo asignado',
        fase:Enum_FaseProyecto.INICIADO,
        proyecto:proyectoMascotas._id,
        creadoPor: estudiante2._id,

      })

};









// const proyecto = await ProjectModel.findOne({ _id: '618e9c8f93e8750282199664'});
// console.log('el proyecto encontrado fue: ', proyecto);

// const objetivos = await ObjectiveModel.find({project: '618e9c8f93e8750282199664'})
// console.log('los objetivos del proyecto son: ',objetivos);

// const proyectoConObjetivos = {...proyecto, objetivos}
// console.log('el proyecto y los objetivos son: ', proyectoConObjetivos)


main();










// // METODOLOGÍA ONE TO MANY #1
// const crearProyectoConObjetivos1 = async () => {
//   const usuarioInicial = await UserModel.create({
//     nombre: 'Hector',
//     apellido: 'Delgado',
//     correo: 'hd@cc.com',
//     identificacion: '23456',
//     rol: Enum_Rol.administrador,
//     estado: Enum_EstadoUsuario.autorizado,
//   });

//   const proyectoCreado = await ProjectModel.create({
//     nombre: 'Proyecto Dairy Brain',
//     fechaInicio: new Date('2021/12/24'),
//     fechaFin: new Date('2022/12/24'),
//     presupuesto: 1500000,
//     lider: usuarioInicial._id,
//   });

//   const objetivoGeneral = await ObjectiveModel.create({
//     descripcion: 'este es el objetivo general',
//     tipo: Enum_TipoObjetivo.general,
//     proyecto: proyectoCreado._id,
//   });

//   const objetivoEspecifico1 = await ObjectiveModel.create({
//     descripcion: 'este es el objetivo especifico 1',
//     tipo: Enum_TipoObjetivo.especifico,
//     proyecto: proyectoCreado._id,
//   });

//   const objetivoEspecifico2 = await ObjectiveModel.create({
//     descripcion: 'este es el objetivo especifico 2',
//     tipo: Enum_TipoObjetivo.especifico,
//     proyecto: proyectoCreado._id,
//   });
// };
// const consultaProyectoConObjetivos1 = async () => {
//   const proyecto = await ProjectModel.findOne({ _id: '618d52f71098bc9a121e95d5' });

//   console.log('el proyecto que encontré fue', proyecto);

//   const objetivos = await ObjectiveModel.find({ project: '618d52f71098bc9a121e95d5' });

//   console.log('los objetivos del proyecto son: ', objetivos);

//   const proyectoConObjetivos = { ...proyecto, objetivos };

//   console.log('el proyecto con objetivos es: ', proyectoConObjetivos);
// };

// // METODOLOGIA ONE TO MANY #2
// const crearProyectoConObjetivos2 = async () => {
//   const usuarioInicial = await UserModel.create({
//     nombre: 'Daniel',
//     apellido: 'Saldarriaga',
//     correo: 'dsl@cc.com',
//     identificacion: '1234',
//     rol: Enum_Rol.administrador,
//     estado: Enum_EstadoUsuario.autorizado,
//   });

//   const objetivoGeneral = await ObjectiveModel.create({
//     descripcion: 'este es el objetivo general',
//     tipo: Enum_TipoObjetivo.general,
//   });

//   const objetivoEspecifico1 = await ObjectiveModel.create({
//     descripcion: 'este es el objetivo especifico 1',
//     tipo: Enum_TipoObjetivo.especifico,
//   });

//   const objetivoEspecifico2 = await ObjectiveModel.create({
//     descripcion: 'este es el objetivo especifico 2',
//     tipo: Enum_TipoObjetivo.especifico,
//   });

//   const proyectoCreado = await ProjectModel.create({
//     nombre: 'Proyecto Mision TIC',
//     fechaInicio: new Date('2021/12/24'),
//     fechaFin: new Date('2022/12/24'),
//     presupuesto: 120000,
//     lider: usuarioInicial._id,
//     objetivos: [objetivoGeneral._id, objetivoEspecifico1._id, objetivoEspecifico2._id],
//   });
// };
// const consultaProyectoConObjetivos2 = async () => {
//   const proyecto = await ProjectModel.find({ id: '618d578f431abaa895d7696d' }).populate(
//     'objetivos'
//   );
// };

// // METODOLOGIA ONE TO MANY #3

// const crearProyectoConObjetivos3 = async () => {
//   const usuarioInicial = await UserModel.create({
//     nombre: 'Daniel',
//     apellido: 'Saldarriaga',
//     correo: 'dsl@cc.com',
//     identificacion: '1234',
//     rol: Enum_Rol.administrador,
//     estado: Enum_EstadoUsuario.autorizado,
//   });

//   const proyectoCreado = await ProjectModel.create({
//     nombre: 'Proyecto Mision TIC',
//     fechaInicio: new Date('2021/12/24'),
//     fechaFin: new Date('2022/12/24'),
//     presupuesto: 120000,
//     lider: usuarioInicial._id,
//     objetivos: [
//       { descripcion: 'Este es el objetivo general', tipo: Enum_TipoObjetivo.general },
//       { descripcion: 'Este es el objetivo especifico 1', tipo: Enum_TipoObjetivo.especifico },
//       { descripcion: 'Este es el objetivo especifico 2', tipo: Enum_TipoObjetivo.especifico },
//     ],
//   });
// };
// const consultaProyectoConObjetivos3 = async () => {
//   const proyectoCreado = await ProjectModel.find({ id: '618d5b22e4e2a99bddab693e' });
//   console.log('proyecto', proyectoCreado);
// };

// const main = async () => {
//   await conectarBD();
// };

// main();

// CRUD USUARIOS

// CREAR UN USUARIO
// await UserModel.create({
//   apellido: 'Saldarriaga',
//   correo: 'lksk.dflcccc.com@',
//   identificacion: '123456789',
//   nombre: 'daniel',
//   rol: Enum_Rol.administrador,
// })
//   .then((u) => {
//     console.log('usuario creado', u);
//   })
//   .catch((e) => {
//     console.error('Error creando el usuario', e);
//   });

// OBTENER LOS USUARIOS
// await UserModel.find()
//   .then((u) => {
//     console.log('usuarios', u);
//   })
//   .catch((e) => {
//     console.error('error obteniendo los usuarios', e);
//   });

// OBTENER UN SOLO USUARIO
// await UserModel.findOne({ identificacion: '16546' })
//   .then((u) => {
//     console.log('usuario encontrado', u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// EDITAR UN USUARIO
// await UserModel.findOneAndUpdate(
//   { correo: 'dsl@cc.com' },
//   {
//     nombre: 'Juan',
//     apellido: 'López',
//   }
// )
//   .then((u) => {
//     console.log('usuario actualizado', u);
//   })
//   .catch((e) => {
//     console.error('Error actualizando', e);
//   });

// ELIMINAR UN USUARIO
// await UserModel.findOneAndDelete({ correo: 'dsl@cc.com' })
//   .then((u) => {
//     console.log('usuario eliminado: ', u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

import {types}from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';
import { gql } from 'apollo-server-express';
import { ApolloServer } from 'apollo-server-express';
import conectarBD from './db/db.js';
import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();
await conectarBD();

const server = new ApolloServer({
  typeDefs: types,
  resolvers: resolvers,
});

// USUARIOS 

it('fetches user', async () => {
  const result = await server.executeOperation({
    query: gql`
    
      query Usuario ($id:String!){
        Usuario(_id:$id){
          correo
        }
      }
    `,
    variables: {
      id: '61a3d7d83c727ab1f221626c'
    },
  });
  assert.equal(result.data.Usuario.correo, 'delgado.h.a@gmail.com');
});



it('creates user', async () => {
  const result = await server.executeOperation({
    query: gql`
      
        mutation crearUsuario(
          $nombre: String!
          $apellido: String!
          $identificacion: String!
          $correo: String!
          $rol: Enum_Rol!
        ) {
          crearUsuario(
            nombre:$nombre
            apellido:$apellido
            identificacion:$identificacion
            correo:$correo
            rol:$rol
          ){
            correo
          }
        }
      
    `,
    variables: {
      nombre: 'Luisa',
      apellido: 'Martinez',
      identificacion: '1034543',
      correo: 'luisa@testing.com',
      rol: 'ESTUDIANTE',
      
    },
  });

  assert.equal(result.data.crearUsuario.correo, 'luisa@testing.com');
});

//PROYECTO 

it('fetches project', async () => {
  const result = await server.executeOperation({
    query: gql`
    
      query Proyecto ($id:String!){
        Proyecto(_id:$id){
          estado
        }
      }
    `,
    variables: {
      id: '61a3d7d83c727ab1f2216278'
    },
  });
  assert.equal(result.data.Proyecto.estado, 'ACTIVO');
});

//INSCRIPCION


it('creates inscripcion', async () => {
  const result = await server.executeOperation({
    query: gql`
      
        mutation crearInscripcion(
      $estado: Enum_EstadoInscripcion
      $proyecto: String!
      $estudiante: String!
        ) {
          crearInscripcion(
            estado:$estado
            proyecto:$proyecto
            estudiante:$estudiante
          ){
            estado
          }
        }
      
    `,
    variables: {
      proyecto: '61b137a342597c776d0e9c01',
      estudiante: '61a57c354016592b278f1cb3',
      
      
    },
  });

  assert.equal(result.data.crearInscripcion.estado, 'PENDIENTE');
});


//AVANCES


it('creates avance ', async () => {
  const result = await server.executeOperation({
    query: gql`
    
      mutation crearAvance(
          $fecha: Date!, 
          $descripcion: String!,
          $observaciones: String, 
          $proyecto: String!, 
          $creadoPor: String!)
    {
      crearAvance(
        fecha: $fecha, 
        descripcion: $descripcion,
        observaciones: $observaciones, 
        proyecto: $proyecto, 
        creadoPor: $creadoPor
      ){
        descripcion
      }
    }
      
    `,
    variables: {
      fecha:new Date ('2021/12/26'), 
        descripcion: 'Iniciaron los entrenamientos de los evaluadores',
        observaciones: 'El grupo de evaluadores ha comenzado sus entrenamientos OK ', 
        proyecto: "61a3ee19cae8fccdb500a80a", 
        creadoPor: "61a57c354016592b278f1cb3"
    },
  });
  assert.equal(result.data.crearAvance.descripcion, 'Iniciaron los entrenamientos de los evaluadores');
});






// it('deletes user', async () => {
//   const result = await server.executeOperation({
//     query: gql`
//       mutation EliminarUsuario($correo: String) {
//         eliminarUsuario(correo: $correo) {
//           correo
//         }
//       }
//     `,
//     variables: {
//       correo: 'testing@testing.com',
//     },
//   });
//   assert.equal(result.data.eliminarUsuario.correo, 'testing@testing.com');
// });

// it('fetches user after deletion', async () => {
//   const result = await server.executeOperation({
//     query: gql`
//       query Usuarios($filtro: FiltroUsuarios) {
//         Usuarios(filtro: $filtro) {
//           correo
//         }
//       }
//     `,
//     variables: {
//       filtro: {
//         correo: 'testing@testing.com',
//       },
//     },
//   });

//   assert.equal(result.data.Usuarios.length, 0);
// });

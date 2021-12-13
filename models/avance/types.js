import { gql } from 'apollo-server-express';

const tiposAvance = gql`
  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: String
    fase:Enum_FaseProyecto
    proyecto: Proyecto!
    creadoPor: Usuario!
  }

  type Query {
    Avances: [Avance]
    filtrarAvance(idProyecto: String!): [Avance]
    filtrarAvanceUnico(_id:String!):[Avance]
  }
  type Mutation {
    crearAvance(fecha: Date!, 
      descripcion: String!,
      observaciones: String, 
      proyecto: String!, 
      creadoPor: String!): Avance

    editarAvance(
      _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: String
    proyecto: String!
    creadoPor: String!
    ): Avance
  }


`;

export { tiposAvance };

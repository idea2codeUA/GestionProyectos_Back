import { gql } from 'apollo-server-express';

const tiposInscripcion = gql`
  type Inscripcion {
    _id: ID!
    estado: Enum_EstadoInscripcion!
    fechaIngreso: Date
    fechaEgreso: Date
    proyecto: Proyecto!
    estudiante: Usuario!
  }

  type Query {
    Inscripciones: [Inscripcion]
    InscripcionProyecto(idProyecto: String!): [Inscripcion]
  }

  type Mutation {
    crearInscripcion(
      estado: Enum_EstadoInscripcion
      proyecto: String!
      estudiante: String!
    ): Inscripcion

    aprobarInscripcion(id: String!
      estado: Enum_EstadoInscripcion!): Inscripcion
  }
`;

export { tiposInscripcion };

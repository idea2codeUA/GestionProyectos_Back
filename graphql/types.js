import { gql } from 'apollo-server-express';
import { tiposEnums } from '../models/enums/types.js';
import { tiposUsuario } from '../models/user/types.js';
import { tiposProyecto } from '../models/project/types.js';
import { tiposAvance } from '../models/avance/types.js';
import { tiposInscripcion } from '../models/inscripcion/types.js';


const tiposGlobales = gql`
  scalar Date
`;

export const types = [tiposGlobales, tiposEnums, tiposUsuario, tiposProyecto, tiposAvance,tiposInscripcion];

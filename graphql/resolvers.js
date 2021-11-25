
import { resolversProyecto } from '../models/project/resolvers.js';
import { resolversUsuario } from '../models/user/resolvers.js';
import { resolversAvance } from '../models/avance/resolvers.js';
import { resolverInscripciones } from '../models/inscripcion/resolvers.js';

export const resolvers = [resolversUsuario, resolversProyecto, resolversAvance, resolverInscripciones];

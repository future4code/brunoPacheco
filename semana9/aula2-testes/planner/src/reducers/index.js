import { combineReducers } from "redux";
import { segundaReducer } from './segunda';
import { tercaReducer } from './terca';
import { quartaReducer } from './quarta';
import { quintaReducer } from './quinta';
import { sextaReducer } from './sexta';
import { sabadoReducer } from './sabado';
import { domingoReducer } from './domingo';

export const rootReducer = combineReducers({
  segunda: segundaReducer,
});

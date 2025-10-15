import { combineReducers } from 'redux';
import chatReducer from '../components/pages/Chat/reducer';

const rootReducer = combineReducers({
  chat: chatReducer,
});

export default rootReducer;


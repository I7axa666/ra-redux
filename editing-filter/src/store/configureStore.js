import {
  combineReducers,
  compose,
  legacy_createStore
} from 'redux';
import notesReducer from '../actions/noteReduser';


const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.
__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      note: notesReducer,
    }),
    compose(
      ReactReduxDevTools,
    )
  );
}

export default configureStore
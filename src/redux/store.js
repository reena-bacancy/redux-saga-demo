import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { counterReducer } from './reducer';
import { rootSaga } from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    counter: counterReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(
        sagaMiddleware,
        createLogger(),
    ),
);

sagaMiddleware.run(rootSaga);

export {
    store,
}

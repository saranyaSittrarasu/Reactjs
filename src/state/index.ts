import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { save, load } from 'redux-localstorage-simple';

export type RootActionTypes = any;

export interface IRootState {
}

const rootReducer = (state: IRootState, action: RootActionTypes) => {
    return combineReducers<IRootState, RootActionTypes>({
    })(state, action);
};

const composeCallback = composeWithDevTools({
    trace: true,
});

export const store: Store<IRootState, RootActionTypes> = createStore(
    rootReducer,
    load() as IRootState,
    composeCallback(applyMiddleware(save()))
);

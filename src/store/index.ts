import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { spacexAPI } from "services/api";

const rootReducer = combineReducers({
    [spacexAPI.reducerPath]: spacexAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(spacexAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
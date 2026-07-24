import { configureStore } from "@reduxjs/toolkit";
import builderReducer from "./builderSlice";

export const store = configureStore({
  reducer: {
    builder: builderReducer,
  },
});

//I don't think this is the best place for this logic. Consider moving the persistence out of the store.
store.subscribe(() => {
  localStorage.setItem(
    "builder-state",
    JSON.stringify(store.getState().builder),
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

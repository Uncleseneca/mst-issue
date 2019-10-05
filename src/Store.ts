import { types } from "mobx-state-tree";
import { Actions } from "./Actions";

export const Store = types
  .model({
    data: types.maybeNull(types.number)
  })
  .actions(Actions);

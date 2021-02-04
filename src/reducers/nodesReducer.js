import { nodesObject } from "./initial_values/nodes";

const omit = (obj, arr) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

export default (state = { ...nodesObject }, action) => {
  switch (action.type) {
    case "FETCH_NODES":
      return action.payload;
    case "DELETE_NODE":
      return omit(state, [action.payload]);
    default:
      return state;
  }
};

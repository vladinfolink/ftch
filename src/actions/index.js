export const fetchNode = (id) => async (dispatch, getState) => {
  return getState().nodes
};

export const deleteNode = (id) => async (dispatch, getState) => {
  // const response = await ...
  console.log(getState().nodes);
  dispatch({ type: "DELETE_NODE", payload: "s_6" });
};

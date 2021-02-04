

export const fetchNode = (id) => async (dispatch, getState) => {
  // const nodes = await ...
  console.log(getState().nodes)
  dispatch({ type: "FETCH_NODES", payload: 'asdasdasd' });
};


export const deleteNode = (id) => async (dispatch, getState) => {
  // const response = await ...
  console.log(getState().nodes);
  dispatch({ type: 'DELETE_NODE', payload: 's_6'});
};

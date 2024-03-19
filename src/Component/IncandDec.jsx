import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return { ...state, count: Math.max(0, state.count - 1) }
    case "inc":
      return { ...state, count: state.count + 1 };

    case "setCount":
      return { ...state, count: action.payload };
  }
}
function IncandDec() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  return { count, dec, inc, defineCount };
}

export default IncandDec;

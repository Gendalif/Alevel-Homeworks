import { Store } from "./Store.js";
import { Password } from "./Password.js";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

export const store = new Store(counterReducer, 0);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
console.log("GetSate", store.getState());

let p = new Password(document.body, true);

p.onChange((el) => console.log("data", el));

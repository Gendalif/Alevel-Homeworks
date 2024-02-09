export function Store(reducer, initialState) {
  let state = initialState;
  let callbacks = [];

  this.subscribe = function (callback) {
    callbacks.push(callback);
    return function unsubscribe() {
      callbacks = callbacks.filter((call) => call !== callback);
    };
  };

  this.dispatch = function (action) {
    state = reducer(state, action);
    callbacks.forEach((callback) => callback());
  };

  this.getState = function () {
    return state;
  };
}

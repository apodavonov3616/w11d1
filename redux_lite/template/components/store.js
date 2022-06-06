
class Store {
    constructor(rootReducer) {
        this.rootReducer = rootReducer;
        this.state = rootReducer({}, {});
    }

    getState() {
        return Object.assign({}, this.state);
    }

    dispatch(action) {
        this.state = this.rootReducer(this.state, action);
    }

}


function combineReducers(reducers) {
    return (initialState = {}, action) => {
        
        let obj = {}
        Object.keys(reducers).forEach(key => {
              obj[key] = reducers[key](initialState[key], action)
        });
        return obj;
  }
}

export {Store, combineReducers};
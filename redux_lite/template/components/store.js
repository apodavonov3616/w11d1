
export default class Store {
    constructor(rootReducer) {
        this.rootReducer = rootReducer;
        this.state = {};
    }

    getState() {
        return Object.assign({}, this.state);
    }

    combineReducers(reducers) {
        return (initialState = {}, action) => {
            
            let obj = {}
            Object.keys(reducers).forEach(key => {
                  obj[key] = reducers[key](initialState[key], action)
            });
            return obj;
      }
    }
}



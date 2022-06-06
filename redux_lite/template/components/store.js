
class Store {
    constructor(rootReducer) {
        this.rootReducer = rootReducer;
        this.subscriptions = [];
        this.state = rootReducer({}, {});
    }

    getState() {
        return Object.assign({}, this.state);
    }

    dispatch(action) {
        this.state = this.rootReducer(this.state, action, this.subscriptions);
    }

    subscribe(callback) {
        this.subscriptions.push(callback);
    }

}


function combineReducers(reducers) {
    return (initialState = {}, action, subscriptions = []) => {
        let obj = {}
        Object.keys(reducers).forEach(key => {
            if (subscriptions.length > 0 && initialState[key] !== reducers[key](initialState[key], action)) {
                subscriptions.forEach(callback => callback(key, reducers[key](initialState[key], action)));
            }
            obj[key] = reducers[key](initialState[key], action);
        });
        return obj;
  }
}



let init_state = {
    name: 'Abby',
    height: 6,
    color: "blue",
    age: 18
}

const nameReducer = (prevName = null, action) => {
    if (action.type === 'change name') {
        return action.newName
    } else {
        return prevName
    }
}

const heightReducer = (prevHeight = null, action) => {
    if (action.type === 'change height') {
        return action.newHeight
    } else {
        return prevHeight
    }
}
const ageReducer = (prevAge = null, action) => {
    if (action.type === 'change age') {
        return action.newAge
    } else {
        return prevAge
    }
}
const colorReducer = (prevColor = null, action) => {
    if (action.type === 'change color') {
        return action.newColor
    } else {
        return prevColor
    }
}

let reducers = {
    name: nameReducer,
    height: heightReducer,
    color: colorReducer,
    age: ageReducer
}

let new_action = {
      type: 'change color',
      newColor: 'Red'
}
let second_action = {
      type: 'change name',
      newName: 'Abigail'
}

const announceStateChange = (key, nextState) => {
    console.log(`That action changed the state! ${key} is now ${nextState}`);
}
let myRootReducer = combineReducers(reducers);
let myStore = new Store(myRootReducer);

myStore.subscribe(announceStateChange);

console.log(myStore.getState())
myStore.dispatch(new_action);

myStore.dispatch(second_action);
console.log(myStore.getState())

//export { Store, combineReducers };



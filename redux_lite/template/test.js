
const combineReducers = (reducers) => {
      // go through each reducer + value 
      // assign it to a new object 
      
      return (initialState = {}, action) => {
            
            let obj = {}
            Object.keys(reducers).forEach(key => {
                  obj[key] = reducers[key](initialState[key], action)
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

let myRootReducer = combineReducers(reducers);

console.log(init_state)
let newState = myRootReducer(init_state, new_action)

console.log(newState)
let newNewState = myRootReducer(newState, second_action);
console.log(newNewState)
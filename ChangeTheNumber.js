
const initialState = 0;

const ChangeTheNumber = (state = initialState, action) => {
    // This function takes two argument 1. current state and 2. action 
    // and return a new state value
    switch(action.type) {
        case "INCREMENT" : return state + action.payload;
        case "DECREMENT" : return state - action.payload;
        default: return state;
    }
}

export default ChangeTheNumber;
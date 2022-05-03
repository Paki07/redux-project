import ChangeTheNumber from "./ChangeTheNumber";
import {combineReducers} from "redux" ;

const rootReducer = combineReducers({
    ChangeTheNumber: ChangeTheNumber
    // ChangeTheBackground;
    // i can add another reducer like this 

})

export default rootReducer;
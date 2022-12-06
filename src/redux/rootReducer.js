import counterReducer from "./feature/counter.feature";
import employeesReducer from "./feature/employees.feature";
import userListReducer from "./feature/user.feature"
import timerSliceReducer from "./feature/timer.feature"
const rootReducer = {
  counter: counterReducer,
  employees: employeesReducer,
  users :userListReducer,
  timer: timerSliceReducer
};
export default rootReducer;

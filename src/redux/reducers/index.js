import { combineReducers } from 'redux'

const changeSwitch = (state = [], action) => {
  if (action.type === 'MENU_SWITCH') {
    return {
      isSwitch: action.isSwitch
    }
  } else {
    return {
      isSwitch: false
    }
  }
}

const reduceApp = combineReducers({
  changeSwitch
})

export default reduceApp

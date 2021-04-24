import { textType, actionType } from './types'

const reducer = (state: textType, action: actionType): textType => {
    switch (action.type) {
        case 'SYMBOL' :
            console.log(Object.assign({}, state, {symbol:action.payload}))
            return Object.assign({}, state, {symbol:action.payload}) as textType
        case 'TITLE' :
            console.log(Object.assign({}, state, {title: action.payload}))
            return Object.assign({}, state, {title: action.payload}) as textType
        case 'COLOR' :
            console.log(Object.assign({}, state, {color: action.payload}))
            return Object.assign({}, state, {color: action.payload}) as textType
        default:
            console.log()
            return state
    }
};

export default reducer
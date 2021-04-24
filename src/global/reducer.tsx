import { textType, actionType } from './types'

const reducer = (state: textType, action: actionType): textType => {
    switch (action.type) {
        case 'SYMBOL' :
            return Object.assign({}, state, {symbol:action.payload})
        case 'TITLE' :
            return Object.assign({}, state, {title: action.payload})
        case 'COLOR' :
            return Object.assign({}, state, {color: action.payload})
        default:
            return state
    }
};

export default reducer
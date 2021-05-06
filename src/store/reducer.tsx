import { optionsType, actionType } from './types'

const reducer = (state: optionsType, action: actionType): optionsType => {
    switch (action.type) {
        case 'SYMBOL':
            return Object.assign({}, state, { symbol: action.payload })
        case 'TITLE':
            return Object.assign({}, state, { title: action.payload })
        case 'COLOR':
            return Object.assign({}, state, { color: action.payload })
        case 'BACKGROUND':
            return Object.assign({}, state, { background: action.payload })
        case 'REMOVE_BACKGROUND':
            return Object.assign({}, state, { background: undefined })
        case 'OPACITY':
            return Object.assign({}, state, { opacity: parseInt(action.payload ?? '0') })
        case 'WIDTH':
            return Object.assign({}, state, { width: parseInt(action.payload ?? '0') })
        case 'HEIGHT':
            return Object.assign({}, state, { height: parseInt(action.payload ?? '0') })
        default:
            return state
    }
};

export default reducer
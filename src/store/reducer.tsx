import { storeType, actionType } from './types'

const reducer = (state: storeType, action: actionType): storeType => {
    const newState = Object.assign({}, state);
    
    switch (action.type) {
        case 'SYMBOL':
            newState.symbol = action.payload as string; break;
        case 'ANNOTATION':
            newState.annotation = action.payload as string; break;
        case 'COLOR':
            newState.color = action.payload as string; break;
        case 'BACKGROUND':
            newState.background = action.payload as string; break;
        case 'REMOVE_BACKGROUND':
            newState.background = undefined; break;
        case 'OPACITY':
            newState.opacity = parseInt(action.payload ?? '0'); break;
        case 'WIDTH':
            newState.width = parseInt(action.payload ?? '0'); break;
        case 'HEIGHT':
            newState.height = parseInt(action.payload ?? '0'); break;
    }

    return newState
};

export default reducer
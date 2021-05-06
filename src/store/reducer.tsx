import { storeType, actionType } from './types'

const reducer = (state: storeType, action: actionType): storeType => {
    const newState = Object.assign({}, state);
    
    switch (action.type) {
        case 'SYMBOL':
            newState.options.symbol = action.payload as string; break;
        case 'TITLE':
            newState.options.title = action.payload as string; break;
        case 'COLOR':
            newState.options.color = action.payload as string; break;
        case 'BACKGROUND':
            newState.options.background = action.payload as string; break;
        case 'REMOVE_BACKGROUND':
            newState.options.background = undefined; break;
        case 'OPACITY':
            newState.options.opacity = parseInt(action.payload ?? '0'); break;
        case 'WIDTH':
            newState.options.width = parseInt(action.payload ?? '0'); break;
        case 'HEIGHT':
            newState.options.height = parseInt(action.payload ?? '0'); break;
        case 'URL':
            newState.url = action.payload as string; break;
    }
    
    return newState
};

export default reducer
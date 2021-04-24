import { Dispatch, createContext } from 'react';
import { textType, actionType } from './types'

// const OptionContext = createContext(useReducer(reducer, {} as text));
const OptionContext = createContext<[textType, Dispatch<actionType>]>({} as [textType, Dispatch<actionType>])

export default OptionContext
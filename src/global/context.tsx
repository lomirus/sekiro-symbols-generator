import { createContext } from 'react';
import { contextType } from './types'

const Context = createContext<contextType>({} as contextType)

export default Context
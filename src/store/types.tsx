import { Dispatch } from 'react';

type storeType = {
    options: {
        symbol: string,
        annotation: string,
        color: string,
        background: string | undefined,
        opacity: number,
        width: number,
        height: number,
    }
    url: string
}
type actionType = {
    type: string,
    payload?: string
}
type contextType = [storeType, Dispatch<actionType>]


export { storeType, actionType, contextType }
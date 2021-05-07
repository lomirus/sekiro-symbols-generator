import { Dispatch } from 'react';

type storeType = {
    symbol: string,
    annotation: string,
    color: string,
    background: string | undefined,
    opacity: number,
    width: number,
    height: number,
}

type actionType = {
    type: string,
    payload?: string
}

type contextType = [storeType, Dispatch<actionType>]

export { storeType, actionType, contextType }
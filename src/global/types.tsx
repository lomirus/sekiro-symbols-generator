import { Dispatch } from 'react';

type textType = {
    symbol: string,
    title: string,
    color: string
}
type actionType = {
    type: string,
    payload: string
}
type contextType = [textType, Dispatch<actionType>]


export { textType, actionType, contextType }
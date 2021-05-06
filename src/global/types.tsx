import { Dispatch } from 'react';

type optionsType = {
    symbol: string,
    title: string,
    color: string,
    background: string | undefined,
    opacity: number
}
type actionType = {
    type: string,
    payload?: string
}
type contextType = [optionsType, Dispatch<actionType>]


export { optionsType, actionType, contextType }
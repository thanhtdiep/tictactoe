import React from 'react'

export interface IBoard {
    children: React.ReactNode,
    className?: string,
    style?: string
}

export interface ISquare {
    onClick: (e: RSquare) => void,
    turn: Turn,
    pos: Position,
    className?: string,
    clear: boolean
}

export interface RSquare {
    turn: Turn,
    pos: Position,
}

export interface Turn {
    title: string,
    value: number
}
export interface Position {
    row: number,
    col: number
}

export interface Game {
    score: number[],
    step: number
    turn: Turn,
    winner: Turn | null,
    status: string,
}



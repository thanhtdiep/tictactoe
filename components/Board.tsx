import React, { FC } from 'react'
import { IBoard } from 'types'

export default function Board({ children, className }: IBoard) {

    return (
        <div className={`border-2 ${className}`}>
            {/* count children adjust according to size chosen */}
            {/* Square */}
            {children}
        </div>
    )
}
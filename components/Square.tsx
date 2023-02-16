import React, { FC } from 'react'
import { ISquare } from 'types'

export default function Square({ children, className }: ISquare) {

    return (
        <div className={`border-2 ${className}`}>
            {/* count children adjust according to size chosen */}
            {/* Square */}
            {children}
        </div>
    )
}
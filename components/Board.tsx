import React, { FC } from 'react'
import { IBoard } from 'types'

const Board: FC<IBoard> = ({ children, className, style }) => {

    return (
        <div className={`${className} border-2 p-2 gap-2 justify-center items-center select-none`}>
            {/* count children adjust according to size chosen */}
            {/* Square */}
            {children}
        </div>
    )
}

export default Board;
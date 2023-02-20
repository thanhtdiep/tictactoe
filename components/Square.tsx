import React from 'react'
import { ISquare } from 'types'

export default function Square({ pos, turn, clear, onClick, className }: ISquare) {
    const [value, setValue] = React.useState<string>('')
    const handleValue = () => {
        const value = {
            turn: turn,
            pos: pos
        }
        setValue(turn.title)
        // callback render
        onClick(value)
    }
    React.useEffect(() => {
        if (clear) setValue('')
    }, [clear])
    return (
        <div onClick={handleValue} className={`bg-green-300 text-black w-[30px] h-[30px] cursor-pointer ${className}`}>
            {value}
        </div>
    )
}
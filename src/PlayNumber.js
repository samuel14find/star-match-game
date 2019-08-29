import React from 'react'

export function PlayNumber(props){
    return (
        <button className="number" onClick={() => console.log('Num', props.number)}>{props.number}</button>
    )
}
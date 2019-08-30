import React from 'react'
import {colors} from "./StarMatch";

export function PlayNumber(props){
    return (
        <button
            className="number"
            style={{backgroundColor: colors[props.status]}}
            onClick={() => console.log('Num', props.number)}
        >
            {props.number}
        </button>
    )
}
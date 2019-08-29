import React from 'react'
import {utils} from "./StarMatch";

export function StarsDisplay(props) {
  let Range = utils.range(1, props.count);
  return(
      Range.map(starId =>
          <div key={starId} className="star"></div>
      )
  )
}
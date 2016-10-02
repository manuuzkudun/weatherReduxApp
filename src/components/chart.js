import React from 'react';
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
  
function average(data) {
    return Math.round(data.reduce( (acc,value) => acc + value,0) / data.length); 
}
  
  return(
    <div>
      <Sparklines data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{`${average(props.data)} ${props.units}`}</div>
    </div>
  );
}
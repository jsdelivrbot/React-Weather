import _ from 'lodash';
import React from 'react';
import {Sparklines,SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function calculateAverage(data) {
  return _.round(_.sum(data)/data.length);
}

const Chart = (props) => {
  return(
    <div>
      <Sparklines svgHeight={120} svgWidth={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{calculateAverage(props.data)} {props.unit}</div>
    </div>

  );
}

export default Chart;

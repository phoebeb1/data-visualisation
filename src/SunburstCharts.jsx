import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Sunburst from 'react-d3-zoomable-sunburst';
import data from './data';

const SunburstCharts = () => {
  const [chartData, setChartData] = useState(data.London);
  const handleData = (d) => {
    return setChartData(data[d])
  };

  return (
    <>
      <ButtonGroup>
        <Button variant="secondary" onClick={() => handleData("London")}>
          London 2012
        </Button>
        <Button variant="secondary" onClick={() => handleData("Rio")}>
          Rio 2016
        </Button>
        <Button variant="secondary" onClick={() => handleData("Tokyo")}>
          Tokyo 2020
        </Button>
      </ButtonGroup>
      <Sunburst
          data={chartData}
          scale="exponential"
          tooltipContent={ <div class="sunburstTooltip" style="position:absolute; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" /> }
          tooltip
          tooltipPosition="right"
          keyId="Sunburst"
          width={window.innerWidth * 0.8}
          value="size"
          height={window.innerHeight * 0.8}
      />
    </>
  )
}

export default SunburstCharts;

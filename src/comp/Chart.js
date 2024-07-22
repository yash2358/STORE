import React from 'react'
import ReactApexChart from 'react-apexcharts';
export const Chart = () => {
  const series=[
    {
      name:'product',
      type:"bar",
      data:[30,40,50,60,100,90,40,10,60],
      color:'#9b1fe8'
    }
  ];
  const options={
  title:{text:"chart"},
  labels:[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],

  }
  return (
    <ReactApexChart options={options} series={series} type="bar" height={380} width={600}/>
  )
}

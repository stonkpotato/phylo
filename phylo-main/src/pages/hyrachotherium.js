import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import useWindowDimensions from '../dims';
import equus from '../images/hyrachotherium.jpeg';
import equusBg from "../images/hyrachotherium-bg.jpeg"

const Equus = () => { 
  const data = [
      { name: 'Cheek Teeth Span (cm)', da: 4.3 },
      { name: 'Length of Tooth (mm)', da: 13 },
      { name: 'Length of Leg (mm)', da: 11 },
      { name: "Number of Toes", da: 4 },
      { name: "Number of Toes Bones", da: 12},
      { name: "Number of Ankle Bones", da: 7},
      { name: "Height (m)", da: 2.25}
  ];
  const {height, width} = useWindowDimensions();

  return (
    <div width={width} height={height}>
        <div style={{ display: "flex", flexDirection: "row-reverse",  backgroundImage: `url(${equusBg})`, backgroundSize: "cover"}}> 
            <div style={{ display: "flex", flexDirection: "column", flex:1 }}> 
                <div style={{float: "right", marginRight: '20px', border: "5px solid rgba(149, 165, 166, .7)", borderRadius: '15px', marginTop: '40px', justifyContent: 'space-evenly', backgroundColor: 'rgba(149, 165, 166, .5)'}}>
                    <img src={equus} width={26 * height / 57} height={1/3 * height} style={{display: "flex",  margin: '20px 20px 20px 90px'}}/>
                </div>
                <div style={{float: 'right', border: "5px solid rgba(149, 165, 166, .7)", backgroundColor: 'rgba(149, 165, 166, .5)', borderRadius: '15px', marginBottom: '20px', marginTop: '78px', marginRight: '20px'}}>
                    <BarChart
                        width={1/3 * width}
                        height={1/3 * height}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        style={{display: "flex", flex: 1, float: 'right',  margin: '20px 20px 20px 20px'}}
                    >
                        <text x={1/6 * width} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
                            <tspan fontSize="14">Properties of Hyrachotherium</tspan>
                        </text>
                        <XAxis dataKey="name" tick={{fontSize: 5}} interval={0} angle={20} textAnchor="beginning"/>
                        <YAxis tick={{fontSize: 15}} domain={[0, 40]}/>
                        <Bar dataKey="da" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
            <div style={{ display: "flex", flex:2 }}> 
                <div style={{border: "5px solid rgba(149, 165, 166, .7)", backgroundColor: 'rgba(149, 165, 166, .5)', borderRadius: '15px', marginTop: '40px', marginBottom: '40px', marginLeft: '40px', marginRight: '40px'}}>
                    <div style={{fontSize: '40px', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}><strong>Hyrachotherium</strong></div>
                    <div style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>Eohippus, or the dawn horse, was present from 70-50 million years ago. It was around 30-60 centimeters tall, which is about the size of a small modern dog. Since it had 4 toes, we can infer that it needed expert balance and high mobility over speed. One of the main environments in which this is required is a tropical rainforest; indeed, fossils of Eohippus have been found in tropical rainforests, and other woodland areas. Its teeth were 13mm in length and had a 4.3 cm teeth span which allowed it to easily ear soft leaves and plant in a wet forest type environment.</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Equus;
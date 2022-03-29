import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import useWindowDimensions from '../dims';
import equus from '../images/mesohippus.jpeg';
import equusBg from "../images/mesohippus-bg.jpeg"

const Equus = () => { 
  const data = [
      { name: 'Cheek Teeth Span (cm)', da: 7.3 },
      { name: 'Length of Tooth (mm)', da: 13.3 },
      { name: 'Length of Leg (mm)', da: 12.25 },
      { name: "Number of Toes", da: 4 },
      { name: "Number of Toes Bones", da: 9},
      { name: "Number of Ankle Bones", da: 6},
      { name: "Height (m)", da: 0.7}
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
                            <tspan fontSize="14">Properties of Mesohippus</tspan>
                        </text>
                        <XAxis dataKey="name" tick={{fontSize: 5}} interval={0} angle={20} textAnchor="beginning"/>
                        <YAxis tick={{fontSize: 15}} domain={[0, 40]}/>
                        <Bar dataKey="da" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
            <div style={{ display: "flex", flex:2 }}> 
                <div style={{border: "5px solid rgba(149, 165, 166, .7)", backgroundColor: 'rgba(149, 165, 166, .5)', borderRadius: '15px', marginTop: '40px', marginBottom: '40px', marginLeft: '40px', marginRight: '40px'}}>
                    <div style={{fontSize: '40px', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}><strong>Mesohippus</strong></div>
                    <div style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>The Mesohippus was present from 35-30 million years ago. It stood up to 0.7 meters tall or 70 cm tall. This was slightly larger than a small modern dog. The Mesohippus had four toes presumably for balance and stability rather than speed and mobility. It is thought that these animals lived in the open plains so the four toes were not ideal as there was nowhere for them to escape from predators. This was the start of the Horse’s decrease in the number of toes. The Miohippus had a presumed 13.5-13.5 mm length and a 7.3 cm teeth span. This made it easier for it to eat tough twigs and fruits in its newer environment.</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Equus;
import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import useWindowDimensions from '../dims';
import equus from '../images/miohippus.jpeg';
import equusBg from "../images/miohippus-bg.jpeg"

const Equus = () => { 
  const data = [
      { name: 'Cheek Teeth Span (cm)', da: 8.3 },
      { name: 'Length of Tooth (mm)', da: 13.5 },
      { name: 'Length of Leg (mm)', da: 14.5 },
      { name: "Number of Toes", da: 3 },
      { name: "Number of Toes Bones", da: 9},
      { name: "Number of Ankle Bones", da: 6},
      { name: "Height (m)", da: 0.8}
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
                            <tspan fontSize="14">Properties of Miohippus</tspan>
                        </text>
                        <XAxis dataKey="name" tick={{fontSize: 5}} interval={0} angle={20} textAnchor="beginning"/>
                        <YAxis tick={{fontSize: 15}} domain={[0, 40]}/>
                        <Bar dataKey="da" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
            <div style={{ display: "flex", flex:2 }}> 
                <div style={{border: "5px solid rgba(149, 165, 166, .7)", backgroundColor: 'rgba(149, 165, 166, .5)', borderRadius: '15px', marginTop: '40px', marginBottom: '40px', marginLeft: '40px', marginRight: '40px'}}>
                    <div style={{fontSize: '40px', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}><strong>Miohippus</strong></div>
                    <div style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>The Miohippus was present from as early as 30 million years ago and as late as 25 million years ago. These animals stood at 80 cm or 0.8 m tall. This meant they were almost double the size of a small modern dog. Through its evolution journey, the Miohippus developed only three toes as they lived in mostly open areas and needed speed over stability. The Miohippus lived in open prairies, forests, and woodlands. Its tooth length was 13.5 mm in length and had an 8.3 cm teeth span. This helped it chew and consume the tough grasses and young tree and bush shoots in the open fields and forests.</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Equus;
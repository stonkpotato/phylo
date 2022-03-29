import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import useWindowDimensions from '../dims';
import equus from '../images/merychippus.jpeg';
import equusBg from "../images/merychippus-bg.jpeg"

const Equus = () => { 
  const data = [
      { name: 'Cheek Teeth Span (cm)', da: 12.5 },
      { name: 'Length of Tooth (mm)', da: 18 },
      { name: 'Length of Leg (mm)', da: 21 },
      { name: "Number of Toes", da: 3 },
      { name: "Number of Toes Bones", da: 9},
      { name: "Number of Ankle Bones", da: 4},
      { name: "Height (m)", da: 1}
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
                            <tspan fontSize="14">Properties of Merychippus</tspan>
                        </text>
                        <XAxis dataKey="name" tick={{fontSize: 5}} interval={0} angle={20} textAnchor="beginning"/>
                        <YAxis tick={{fontSize: 15}} domain={[0, 40]}/>
                        <Bar dataKey="da" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
            <div style={{ display: "flex", flex:2 }}> 
                <div style={{border: "5px solid rgba(149, 165, 166, .7)", backgroundColor: 'rgba(149, 165, 166, .5)', borderRadius: '15px', marginTop: '40px', marginBottom: '40px', marginLeft: '40px', marginRight: '40px'}}>
                    <div style={{fontSize: '40px', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}><strong>Merychippus</strong></div>
                    <div style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>The Merychippus was present 15 -7 million years ago in dusty and sand covered grasslands. Still, these animals had only three toes which was not very ideal for getting away from predators in these fields. These animals stood at about 1 meter tall which was about 3.5 feet tall. To adapt to its new environment and diet, these animals had teeth that were 18mm in length and 12.5 cm tooth span which allowed it to chew grasses and bushes as well as other young plant shoots/vegetation. </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Equus;
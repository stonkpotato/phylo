import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import useWindowDimensions from '../dims';
import equus from '../images/equus.jpeg';
import equusBg from "../images/equus-bg.jpeg"

const Equus = () => { 
  const data = [
      { name: 'Cheek Teeth Span (cm)', da: 17.6 },
      { name: 'Length of Tooth (mm)', da: 32 },
      { name: 'Length of Leg (mm)', da: 31 },
      { name: "Number of Toes", da: 1 },
      { name: "Number of Toes Bones", da: 3},
      { name: "Number of Ankle Bones", da: 4},
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
                        fill="black"
                    >
                        <text x={1/6 * width} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
                            <tspan fontSize="14">Properties of Equus</tspan>
                        </text>
                        <XAxis dataKey="name" tick={{fontSize: 5}} fill="black" interval={0} angle={20} textAnchor="beginning"/>
                        <YAxis tick={{fontSize: 15}} fill="black" domain={[0, 40]}/>
                        <Bar dataKey="da" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
            <div style={{ display: "flex", flex:2 }}> 
                <div style={{border: "5px solid rgba(149, 165, 166, .7)", backgroundColor: 'rgba(149, 165, 166, .5)', borderRadius: '15px', marginTop: '40px', marginBottom: '40px', marginLeft: '40px', marginRight: '40px'}}>
                    <div style={{fontSize: '40px', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}><strong>Equus</strong></div>
                    <div style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>The Equus is also known as the modern day horse, and is the horse that we most commonly think of when we think of a horse. It is currently alive, and originated around 1 million years ago. It is 2.25 meters tall, which is slightly larger than Mr. Koegle, and only has 1 toe, 3 toe bones, and 4 ankle bones. Since it has so few bones in its feet, we can infer that the Equus maximizes speed and doesn’t really care much about mobility. Thus, we can infer that the Equus normally lives in open areas. This is true, as it lives in plains and desert-like lands.</div>
                    <div style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>The Equus has the longest teeth and cheek size span of its generation, at 32mm and 17.6cm, respectively, which would be useful for grazing long grasses (as grasses are fibrous, and wear down teeth easily, which means that long teeth are required). The Equus does not have a further natural evolution, and evolved from the Merychippus separately from the Pliohippus; however, it has been a subject of selective breeding by humans trying to create the fastest horse possible.</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Equus;

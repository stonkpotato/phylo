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
                    <div style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut eros pretium magna aliquet luctus. Suspendisse maximus urna ut dui lacinia vehicula. Suspendisse maximus arcu eu est dapibus, eget venenatis augue ullamcorper. In hac habitasse platea dictumst. Sed in finibus elit, a ullamcorper massa. Nulla pellentesque tristique ipsum, id vestibulum orci fringilla semper. Sed eu ultricies quam. Duis suscipit congue nunc, sit amet molestie velit tristique non. Donec blandit tempus odio in scelerisque. Proin tempus, enim sit amet posuere mattis, justo mauris elementum dolor, non tempor nunc tortor sit amet nisi. Cras fringilla lectus quis laoreet vulputate. Donec urna enim, rhoncus sed maximus vel, semper in justo. Morbi id vulputate enim, nec imperdiet mauris. Sed at sem tortor. Nullam vel posuere turpis, id pharetra sapien.</div>
                    <div style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut eros pretium magna aliquet luctus. Suspendisse maximus urna ut dui lacinia vehicula. Suspendisse maximus arcu eu est dapibus, eget venenatis augue ullamcorper. In hac habitasse platea dictumst. Sed in finibus elit, a ullamcorper massa. Nulla pellentesque tristique ipsum, id vestibulum orci fringilla semper. Sed eu ultricies quam. Duis suscipit congue nunc, sit amet molestie velit tristique non. Donec blandit tempus odio in scelerisque. Proin tempus, enim sit amet posuere mattis, justo mauris elementum dolor, non tempor nunc tortor sit amet nisi. Cras fringilla lectus quis laoreet vulputate. Donec urna enim, rhoncus sed maximus vel, semper in justo. Morbi id vulputate enim, nec imperdiet mauris. Sed at sem tortor. Nullam vel posuere turpis, id pharetra sapien.</div>
                    <div style={{fontSize: '16px', marginLeft: '10px', marginRight: '10px', marginTop: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut eros pretium magna aliquet luctus. Suspendisse maximus urna ut dui lacinia vehicula. Suspendisse maximus arcu eu est dapibus, eget venenatis augue ullamcorper. In hac habitasse platea dictumst. Sed in finibus elit, a ullamcorper massa. Nulla pellentesque tristique ipsum, id vestibulum orci fringilla semper. Sed eu ultricies quam. Duis suscipit congue nunc, sit amet molestie velit tristique non. Donec blandit tempus odio in scelerisque. Proin tempus, enim sit amet posuere mattis, justo mauris elementum dolor, non tempor nunc tortor sit amet nisi. Cras fringilla lectus quis laoreet vulputate. Donec urna enim, rhoncus sed maximus vel, semper in justo. Morbi id vulputate enim, nec imperdiet mauris. Sed at sem tortor. Nullam vel posuere turpis, id pharetra sapien.</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Equus;
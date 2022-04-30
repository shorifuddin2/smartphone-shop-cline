import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = () => {
    const[data,setData] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[]);
    
    return (
        <div>
          <Container>
              <Row>
                  <Col md="6">
                      <h2 className='py-5'>Invest vs sell</h2>
                     
                  <LineChart width={500}
          height={400}
          data={data}>
                <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sell" stroke="#82ca9d" fill="#8884d8" />

           </LineChart>
                  
                  </Col>

                  <Col md="6">
                  <h2  className='py-5'>Invest vs sell</h2>
                  <BarChart width={500} height={400} data={data}>
          <Bar dataKey="investment" fill="#8884d8" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Bar dataKey="sell" stackId="a" fill="#82ca9d" />
        </BarChart>
                  </Col>
              </Row>
          </Container>
      
        </div>
    );
};

export default Rechart;
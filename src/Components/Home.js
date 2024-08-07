import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsCashStack, BsCashCoin, BsBagX, BsBagCheckFill, BsBagPlus}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { Table } from 'react-bootstrap';

function Home() {

    const data = [
        {
          name: 'Date 1',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Date 2',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Date 3',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Date 4',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Date 5',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Date 6',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Date 7',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
 return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h5>Total Orders</h5>
                    <BsBagPlus className='card_icon'/>
                </div>
                <h3>75</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h5>Total deliver</h5>
                    <BsBagCheckFill className='card_icon'/>
                </div>
                <h3>70</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h5>Total Cancel</h5>
                    <BsBagX className='card_icon'/>
                </div>
                <h3>05</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h5>Total Revenue</h5>
                    <BsCashCoin className='card_icon'/>
                </div>
                <h3>$12k</h3>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Net Profit</h3>
                    <BsCashStack className='card_icon'/>
                </div>
                <h1>$6759.25</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
          
          

    </main>

  )
}

export default Home
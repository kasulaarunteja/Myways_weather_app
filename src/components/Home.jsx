

import React, { useEffect, useState } from 'react';
import axios from "axios";


const Home = () =>  {

    const [data, setData] = useState([])
   



    useEffect(() => {
       axios.get("http://localhost:8080/weather").then((res) => {
       setData(res.data);
        console.log(res.data)
       })
    },[])


  return (
    <div>
      
       {data.map((e) => {
        return (
            <div className='container'>
                {/* main */}
                <div className='div1'>
                <h2>{e.query.results.channel.title}</h2>
                 <div className='right'>
                    <h1 key= {e.id} >{e.query.results.channel.wind.chill}°</h1>
                    <h5>Clear</h5>
                    <h2 key= {e.id}>{e.query.results.channel.item.forecast[0].date}</h2>
                 </div>
                </div>
                <hr/>

                {/* today forecast */}
                 <div className='div2'>
                 <h2>Today's Forecast for {e.query.results.channel.title}</h2>
                    <div className='sevendays'>
                       {e.query.results.channel.item.forecast.slice(0,4).map((el) => {
                        return (
                            <div>
                                <h4>{el.text}</h4>
                                <h4>Day :{el.day}</h4>
                                <h3>Temp High :{el.high} °</h3>
                                <h3>Temp Low :{el.low} °</h3>
                            </div>
                        )
                       })}
                    </div>
                 </div>
                   <hr/>
                 {/* grap data  */}

                 <div className='div3'>
                     <h2> Weather Today {e.query.results.channel.item.title}</h2>
                     <h1>{e.query.results.channel.item.condition.code} °</h1>
                     <p>Feels like</p>
                     <div className='sevendays'>
                        <div>
                            <h4>High/Low {e.query.results.channel.item.forecast[0].high}°/{e.query.results.channel.item.forecast[0].low}°</h4>
                            <h4>Humidity {e.query.results.channel.atmosphere.humidity} %</h4>
                            <h4>Pressure ↓{e.query.results.channel.atmosphere.pressure}</h4>
                            <h4>Visibility {e.query.results.channel.atmosphere.visibility}</h4>
                        </div>
                        <div className='div32'>
                            <h4>Wind {e.query.results.channel.wind.chill} km/h</h4>
                            <h4>Direction {e.query.results.channel.wind.direction} mi</h4>
                            <h4>speed {e.query.results.channel.wind.speed} mph</h4>
                            <h4>Moon Phase  Waing Giibbous</h4>

                        </div>

                     </div>
                 </div>

            </div>
        )
       })}
    </div>
  );
}

export default Home; 

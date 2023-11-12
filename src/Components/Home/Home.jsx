// import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css';
const Home = () => {

     const [allActors, setAllActors] = useState([])
     const [selectedActors, setSelectedActors] = useState([])
     const [remaining , setRemaining ]= useState(50000)
     const [totalCost, setTotalCost] = useState(0)
    useEffect(()=>{
        fetch('./data.json')
        .then((res) => res.json())
        .then((data) =>setAllActors(data) )
    },[])
// console.log(allActors)
const handleSelectActor =(actor)=>{
    const isSelected = selectedActors.find(actorName => actorName.id === actor.id);
    let cost  = actor.salary;
    if(isSelected){
        return alert('already selected')
    }
    else{
        selectedActors.forEach(actor => {
            cost = cost + actor.salary
        });
        const totalRemaining = 50000 - cost;
        if(cost > 50000){
            return  alert('you cant expense more than you have')
          }
        else{
            setTotalCost(cost)
            setRemaining(totalRemaining)  
            setSelectedActors([...selectedActors,actor])
        }
    }
};
// console.log(selectedActors)

    return (
        <div className='container'>
           <div className="home-container">
          <div className="card-container">
         {
            allActors.map(actor =>  (<div key={actor.id} className="card">
            <div className="card-img">
                <img className='photo' src={actor.image} alt="" />
            </div>
            <div>
                <h2>{actor.name}</h2>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum!</small></p>
                <div className="info">
                    <p>Salary:{actor.salary} $</p>
                    <p>{actor.role}</p>
                </div>
                <button onClick={()=>handleSelectActor(actor)} className='card-btn'>Select</button>
            </div>
        </div>))
         }
          </div>
                <div className="cart">
     
                  <Cart selectedActors={selectedActors} remaining ={remaining} totalCost ={totalCost}  ></Cart>
                </div>
           </div>
        </div>
    );
};

export default Home;

import React from 'react';
import '../App.css';
import myimage from '../Images/dino.PNG';


const Card = (props) => {

    return (
        <div>
            <img width="75" src ={myimage}/>
    
            <div className="cardStyle">
                <div className="cardName" >John Dino</div>
                <div>Company Lld</div>
            </div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div>
            <Card />
        </div>
    );
};


export default Card;
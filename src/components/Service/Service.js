import React from 'react';
import './Service.css'

const Service = (props) => {
    console.log(props.service);
    const { img, name, description } = props.service;
    return (

        <div class="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." height="300" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div >




        // Extra

        // <div>
        //     <img src={img} alt="" width="500" height="600" />
        //     <h1>Name: {name}</h1>
        //     <h5>Description: {description}</h5>
        // </div>
    );
};

export default Service;
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {

    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (

        <div>
            <div className='row row-cols-1 row-cols-md-3 g-4 p-5'  >
                {
                    services.map((service) => <Service key={service.id}
                        service={service}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;
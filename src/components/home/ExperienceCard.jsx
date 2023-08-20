import React from 'react';

import {
    Col,
} from "react-bootstrap";

const ExperienceCard = ({data}) => {
    return (
        <Col lg="6">
            <div className="pb-5 text-center">
                <a href={data.url}>
                    <img className=" bg-white mb-3" style={{width:128,}} src={data.companylogo} alt=""/>
                </a>
                <p className="lead">
                    {data.role}
                    <br/>
                    {data.date}
                </p>

            </div>
        </Col>
    );
}

export default ExperienceCard;
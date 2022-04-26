import React, { useState } from 'react';
import './CareerTimeLineContent.css';

function CareerTimeLineContent(props: any) {
    return (
        <div className='career-timeline-content-wrapper'>
            <div className='career-timeline-time'>{props.time}</div>
            <div className='career-timeline-company'><a target="_blank" href={props.url}>{props.company}</a></div>
            <div className='career-timeline-role'><i>as</i> <b>{props.role}</b></div>
        </div>
    )
}
export default CareerTimeLineContent;
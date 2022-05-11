import React from 'react';
import CareerTimeLineContent from './components/CareerTimeLineContent/CareerTimeLineContent';
import { navHeaderData, careerTimeLineData } from './constants';
import Timeline from './components/Timeline/Timeline';
import './Career.css';

function Career() {
    const { label } = navHeaderData.data['career'];
    return (
        <div id="career">
            <header>
                <span>{label}</span>
            </header>
            <Timeline data={careerTimeLineData} renderComponent={CareerTimeLineContent} />
        </div>
    );
}
export default Career;

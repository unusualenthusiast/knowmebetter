import React from 'react';
import './Timeline.css';

function Timeline(props: any) {
    return (
        <div className="timeline-wrapper">
            <div className="timeline">
                {props.data.map((_: any, ind: number) => {
                    return (
                        <div className={"container " + (ind % 2 == 0 ? "left" : "right")} key={`timeline-container-key` + ind}>
                            <div className="content">
                                {props.renderComponent(_)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Timeline;
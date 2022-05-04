import React from 'react';
import './TechStack.css';
import { FaReact, FaAngular, FaNodeJs, FaJava, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiSplunk, SiTypescript } from "react-icons/si";

const Component: any = {
    FaReact: FaReact,
    FaAngular: FaAngular,
    FaNodeJs: FaNodeJs,
    FaJava: FaJava,
    FaDatabase: FaDatabase,
    SiMongodb: SiMongodb,
    SiSplunk: SiSplunk,
    SiTypescript: SiTypescript
}
function TechStack(props: any) {
    const { total: { name, experience: totalExperience, stackTypes } } = props.data;
    const totalStackRowStyle = {
        width: `${100/totalExperience}%`
    };
    return (
        <div id="techstack-wrapper">
            <div className="techstack">
                <div className="total stack-type-row">
                    <div className="stack-type-label"><span>{name}</span></div>
                    <div className="stack-type-content">
                        <div className="stack-row">
                            {[...Array(totalExperience)].map((_, ind) => {
                                return (
                                    <div className="stack-row-content" key={`totalStackRow-${ind}`} style={totalStackRowStyle}>
                                        <div></div>
                                        <div>{ind+1}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                {stackTypes.map((stackType: any, ind: number) => {
                    const { type, stacks } = stackType;
                    return (
                        <div className="stack-type-row">
                            <div className="stack-type-label"><span>{type}</span></div>
                            <div className="stack-type-content">
                                {stacks.map((stack: any, index: number) => {
                                    const { name, experience, icon } = stack;
                                    const Icon = Component[icon];
                                    const progressStyle = {
                                        width: `${(experience / totalExperience)  * 100}%`
                                    }
                                    return (
                                        <div className="stack-row">
                                            <div className="stack-row-progress" style={progressStyle}>
                                                {/* <div>{experience}</div> */}
                                                <div></div>
                                            </div>
                                            <div className="stack-row-content"> 
                                                <div><Icon /></div>
                                                <div>{name}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default TechStack;
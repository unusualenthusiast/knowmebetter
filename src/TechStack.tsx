import React, { useState } from 'react';
import './TechStack.css';
import { FaReact, FaAngular, FaNodeJs, FaJava, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiSplunk, SiTypescript } from "react-icons/si";
import { navHeaderData, techStackData } from './constants';

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
function TechStack() {
    const [mode, updateMode] = useState<'experience' | 'expertise'>("experience");
    const { label } = navHeaderData.data['techStack'];
    const { order, data } = techStackData;
    const { level: totalLevel, label: totalLabel } = techStackData[mode];
    const totalStackRowStyle = {
        width: `${100 / totalLevel}%`
    };
    const onToggle = () => {
        if (mode == "experience") updateMode("expertise");
        else updateMode("experience");
    }
    return (
        <div id="tech-stack">
            <header>
                <span>{label}</span>
            </header>
            <div id="techstack-wrapper">
                <div className="techstack">
                    <div className="techstack-sticky-content">
                        <div id="techstack-by">
                            <div className={`${mode == "experience" ? "active" : ""}`}>Experience</div>
                            <div id="techstack-by-button" onClick={onToggle}>
                                <div className={(mode == 'experience' ? "globe-left" : "globe-right")} key="exp"></div>
                            </div>
                            <div className={`${mode == "expertise" ? "active" : ""}`}>Expertise</div>
                        </div>
                        <div className="total stack-type-row">
                            <div className="stack-type-label"><span>{totalLabel}</span></div>
                            <div className="stack-type-content">
                                <div className="stack-row">
                                    {[...Array(totalLevel)].map((_, ind) => {
                                        return (
                                            <div className="stack-row-content" key={`totalStackRow-${ind}`} style={totalStackRowStyle}>
                                                <div></div>
                                                <div>{ind + 1}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    {order.map((stackType: any, ind: number) => {
                        const { label: stackTypeLabel, order: _order, data: stackTypeData } = data[stackType];
                        const stackTypeOrder = _order[mode];
                        return (
                            <div className="stack-type-row" key={`stack-type-row-${ind}`}>
                                <div className="stack-type-label"><span>{stackTypeLabel}</span></div>
                                <div className="stack-type-content">
                                    {stackTypeOrder.map((stack: any, index: number) => {
                                        const { label, icon } = stackTypeData[stack];
                                        const stackLevel = stackTypeData[stack][mode]
                                        const Icon = Component[icon];
                                        const progressStyle = {
                                            width: `${(stackLevel / totalLevel) * 100}%`
                                        }
                                        return (
                                            <div className="stack-row" key={`stack-row-${index}`}>
                                                <div className="stack-row-progress" style={progressStyle}>
                                                    <div></div>
                                                </div>
                                                <div className="stack-row-content">
                                                    <div><Icon /></div>
                                                    <div>{label}</div>
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
        </div>
    )
}
export default TechStack;
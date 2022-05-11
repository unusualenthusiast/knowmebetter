/** constants - types */
export interface DynamicObject<T> {
    [key: string]: T
};
export interface IteratableObject<O, D> {
    "order": O,
    "data": {
        [key: string]: D
    }
};
export interface NavHeaderDataType {
    "label": string,
    "urlPath": string
};
export interface CareerTimeLineDataType {
    "time": string,
    "company": string,
    "url": string,
    "role": string
};
export interface StackDataType {
    "label": string,
    "experience": number,
    "expertise": number,
    "icon": string
}
export interface TechStackType extends IteratableObject<DynamicObject<string[]>, StackDataType> {
    "label": string
};
export interface TechStackDataType extends IteratableObject<string[], TechStackType> {
    "experience": {
        "level": number,
        "label": string
    },
    "expertise": {
        "level": number,
        "label": string
    }
};
/** constants - definition */
export const navHeaderData: IteratableObject<string[], NavHeaderDataType> = {
    "order": ["career", "techStack", "contact"],
    "data": {
        "home": {
            label: "Home",
            urlPath: "home"
        },
        "career": {
            label: "Career",
            urlPath: "career"
        },
        "techStack": {
            label: "Tech Stack",
            urlPath: "tech-stack"
        },
        "contact": {
            label: "Contact",
            urlPath: "contact"
        }
    }
};
export const homePageData: DynamicObject<string> = {
    "name": "Allan M. Valooran",
    "shortDescription": "I am a full stack developer"
};
export const careerTimeLineData: Array<CareerTimeLineDataType> = [
    {
        "time": "from 2021",
        "company": "DTCC - Depository Trust and Clearing Corporation",
        "url": "https://www.dtcc.com/",
        "role": "Senior Consultant"
    },
    {
        "time": "from 2017 to 2021",
        "company": "Altimetrik",
        "url": "https://www.altimetrik.com/",
        "role": "Senior Software Engineer"
    },
    {
        "time": "from 2015 to 2017",
        "company": "Wipro",
        "url": "https://www.wipro.com/",
        "role": "Software Engineer"
    }
];
export const techStackData: TechStackDataType = {
    "experience": {
        "level": 7,
        "label": "Total Experience (Yrs)"
    },
    "expertise": {
        "level": 10,
        "label": "Expertise (Scale)"
    },
    "order": ["frontEnd", "backEnd", "database", "others"],
    "data": {
        "frontEnd": {
            "label": "Front End",
            "order": {
                "experience": ["react", "angular", "reactNative"],
                "expertise": ["react", "angular", "reactNative"]
            },
            "data": {
                "react": {
                    "label": "React",
                    "experience": 5.5,
                    "expertise": 8.5,
                    "icon": "FaReact"
                },
                "angular": {
                    "label": "Angular",
                    "experience": 0.5,
                    "expertise": 5,
                    "icon": "FaAngular"
                },
                "reactNative": {
                    "label": "React Native",
                    "experience": 0.5,
                    "expertise": 4,
                    "icon": "FaReact"
                }
            }
        },
        "backEnd": {
            "label": "Back End",
            "order": {
                "experience": ["node", "java"],
                "expertise": ["node", "java"]
            },
            "data": {
                "node": {
                    "label": "Node",
                    "experience": 3,
                    "expertise": 7,
                    "icon": "FaNodeJs"
                },
                "java": {
                    "label": "Java",
                    "experience": 1,
                    "expertise": 4,
                    "icon": "FaJava"
                },
            }
        },
        "database": {
            "label": "Database",
            "order": {
                "experience": ["mongo", "sql"],
                "expertise": ["mongo", "sql"],
            },
            "data": {
                "mongo": {
                    "label": "Mongo DB",
                    "experience": 3,
                    "expertise": 6,
                    "icon": "SiMongodb"
                },
                "sql": {
                    "label": "SQL DB",
                    "experience": 1,
                    "expertise": 4,
                    "icon": "FaDatabase"
                },
            }
        },
        "others": {
            "label": "Others",
            "order": {
                "experience": ["typescript", "splunk"],
                "expertise": ["splunk", "typescript"]
            },
            "data": {
                "typescript": {
                    "label": "Typescript",
                    "experience": 2,
                    "expertise": 7,
                    "icon": "SiTypescript"
                },
                "splunk": {
                    "label": "Splunk",
                    "experience": 1,
                    "expertise": 7.5,
                    "icon": "SiSplunk"
                }
            }
        }
    }
}
export const contactData: DynamicObject<any> = {
    "email": {
        "id": "allanmvalooran@gmail.com"
    },
    "github": {
        "id": "GITHUB/queerpassenger",
        "url": "https://github.com/queerpassenger"
    },
    "phone": {
        "id": "8610677935"
    },
    "linkedIn": {
        "id": "LINKEDIN/allanmvalooran",
        "url": "https://in.linkedin.com/in/allan-valooran-236120171"
    }
}
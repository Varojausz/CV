import React from 'react';
import {ContainerStyle, MainStyle, SidebarStyle, ProfileStyle, EducationStyle, SummaryStyle, ExperienceStyle, StatisticsStyle, LanguagesStyle, ContactStyle, SoftSkillsStyle} from './styles'


const Profile = () => (
    <ProfileStyle>
        <div className="photo"></div>
        <h2 className="name">Álvaro Ruiz Montaner</h2>
        <h3 className="tagline">Self taught front-dev</h3>
        <br/>
        <h4 className="tagline">08 - 04 - 1994</h4>
    </ProfileStyle>
)
const Contact = () => (
    <ContactStyle>
        <ul className="list-unstyled contact-list">
            <li className="email"><svg className="svg-inline--fa fa-envelope fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg> <i className="fas fa-envelope"></i><a href="mailto: zoezil_ifra@hotmail.com">zoezil_ifra@hotmail.com</a></li>
            <li className="phone"><svg className="svg-inline--fa fa-phone fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg><i className="fas fa-phone"></i><a href="tel:0123 456 789">675 967 289</a></li>
            <li className="linkedin"><svg className="svg-inline--fa fa-linkedin-in fa-w-14" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg><i className="fab fa-linkedin-in"></i> --<a href="#" target="_blank">linkedin.com/in/álvaro-ruiz-montaner221a2b206</a></li>
            <li className="github"><svg className="svg-inline--fa fa-github fa-w-16" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg> <i className="fab fa-github"></i><a href="#" target="_blank">github.com/Varojausz/</a></li>
            <li className="github"><svg className="svg-inline--fa fa-globe fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg> <i className="fas fa-globe"></i><a href="#" target="_blank">https://todonotasworld.web.app/</a></li>
        </ul>
    </ContactStyle>
)
const Languages = () => (
    <LanguagesStyle>
        <h2 className="section-title"><span className="icon-holder"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg></span>Languages</h2>
        <ul className="list-unstyled interests-list">
            <li>Spanish <span className="lang-desc">(Native)</span></li>
            <li>English <span className="lang-desc">(Intermediate)</span></li>
            <li>Portuguese <span className="lang-desc">(Professional)</span></li>
            <li>Catalan <span className="lang-desc">(Amateur)</span></li>
        </ul>
    </LanguagesStyle>
)
const Statistics = () => (
    <StatisticsStyle>
        <h2 className="section-title"><span className="icon-holder"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" className="svg-inline--fa fa-chart-pie fa-w-17" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg><i className="fas fa-chart-pie"></i></span>Statistics</h2>
        <div className="skillset">        

            
            <div className="item">
                <h3 className="level-title">JavaScript, HTML5 &amp; CSS</h3>
                <div className="level-bar">
                    <div className="" style={{width: '75%'}}></div>
                </div>                              
            </div>
            
            <div className="item">
                <h3 className="level-title">React</h3>
                <div className="level-bar">
                    <div className="" style={{width: '65%'}}></div>
                </div>                                 
            </div>
            
            <div className="item">
                <h3 className="level-title">MERN</h3>
                <div className="level-bar">
                    <div className="" style={{width: '45%'}}></div>
                </div>                                 
            </div>

            
            <div className="item">
                <h3 className="level-title">Python &amp; SQlite</h3>
                <div className="level-bar">
                    <div className="" style={{width: '30%'}}></div>
                </div>                               
            </div>

        </div>
    </StatisticsStyle>
)
const SoftSkills = () => (
    <SoftSkillsStyle>
        <h2 className="section-title"><span className="icon-holder"><svg className="svg-inline--fa fa-rocket fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path></svg><i className="fas fa-rocket"></i></span>Fav Soft Skills</h2>
        <div className="skillset">        

            
            <div className="item">
                <h3 className="level-title">Persistence</h3>
                <div className="level-bar">
                    <div className="" style={{width: '100%'}}></div>
                </div>                              
            </div>
            
            <div className="item">
                <h3 className="level-title">Curiosity</h3>
                <div className="level-bar">
                    <div className="" style={{width: '80%'}}></div>
                </div>                                 
            </div>
            
            <div className="item">
                <h3 className="level-title">Optimism</h3>
                <div className="level-bar">
                    <div className="" style={{width: '60%'}}></div>
                </div>                                 
            </div>

            
            <div className="item">
                <h3 className="level-title">Brainstorming</h3>
                <div className="level-bar">
                    <div className="" style={{width: '60%'}}></div>
                </div>                               
            </div>

        </div>
    </SoftSkillsStyle>
)
const Education = () => (
    <EducationStyle>
            <h2 className="section-title"><span  className="icon-holder"><svg style={{fill: 'white'}} className="svg-inline--fa fas fa-user-graduate fa-w-14"  xmlns="http://www.w3.org/2000/svg"  height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg><i className="fas fa-user-graduate"></i></span>Education</h2>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Chemical Engineering degree</h3>
                            <div className="time">2012 - 2020</div>
                        </div>
                        <div className="company">Universidad de Cádiz</div>
                    </div>
                    <div className="details"></div>

                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Python Bootcamp 30h course</h3>
                            <div className="time">2021</div>
                        </div>
                        <div className="company">Udemy - Online</div>
                    </div>
                    <div className="details"></div>
                </div>
                
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">Web developer Bootcamp 60h course</h3>
                            <div className="time">2021</div>
                        </div>
                        <div className="company">Udemy - Online</div>
                    </div>
                    <div className="details"></div>

                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">"Creación, programación y
                        diseño de webs con HTML5 y CSS3" 210h course</h3>
                            <div className="time">2021</div>
                        </div>
                        <div className="company">SEPE - Online</div>
                    </div>
                    <div className="details"></div>

                </div>
                <div className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">React - The Complete Guide with React Hook Redux 6h course</h3>
                            <div className="time">2021</div>
                        </div>
                        <div className="company">Udemy - Online</div>
                    </div>
                    <div className="details"></div>
                </div>
    </EducationStyle>
)
const Summary = () => (
    <SummaryStyle>
        <h2 className="section-title"><span className="icon-holder"><svg className="svg-inline--fa fa-user fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg><i className="fas fa-user"></i></span>Career Profile</h2>
        <div className="item">

            <div className="meta">
                <div className="upper-row">
                    <h3 className="job-title">Front-End skills</h3>
                    <br/>
                </div>
                <div className="company">HTML + CSS + Javascript</div>
            </div>
            <div className="details">
                <ul>
                    <li>
                        Basic Projects: Ruffini calculator, unit
                        conversor, string editor, 3D cube customizer, array editor, schema creator,
                        responsive webpages(flex &amp; grid) and this CV template.
                    </li>
                    <li>
                        Libraries: Bootstrap, jquery, Sass, ejs, axios
                    </li>
                    <li>
                        APIs: IndexedDB API, DOM, Canvas, Fetch API
                    </li>
                </ul>

            </div>
            <br/>


            <div className="meta">
                <div className="company">React</div>
            </div>
            <div className="details">
                <ul>
                    <li>Function components (React with hooks), state, life cycles, conditional rendering, composition...</li>
                    <li>Testing (Jest &amp; React-testing-library)</li>
                    <li>Optimization (memoizing, useMemo, useCallback)</li>
                    <li>Scrolling pages</li>
                    <li>Personal Projects: Social Media (MERN stack), RESTful web of notes (React + Firebase)</li>
                    <li>Libraries: Styled-Components, Mui, React-Redux</li>
                </ul>
            </div>
            <br/>

                <div className="upper-row">
                    <h3 className="job-title">Back-End skills</h3>
                    <br/>
                </div>
                <div className="company">Node.js + Express + MongoDB</div>

                <div className="details">
                    <ul>
                        <li>Libraries: Babel + plugins, configured Webpack, Mongoose</li>
                        <li>Frameworks: Express</li>
                        <li>Server-Side Rendering (SSR): Express</li>
                        <li>Database: MongoDB (by Mongoose)</li>
                        <li>Utilities: Git, Git-Bash, CMD</li>
                    </ul>

                </div>
                <br/>

                <div className="meta">
                    <div className="company">Python + SQL &amp; related libraries</div>
                </div>

                <div className="details">
                    <ul>
                        <li>Projects: Tkinter apps</li>
                        <li>Frameworks: Tkinter</li>
                        <li>Libraries: OpenCV, Numpy, Sympy, Pandas, Mathplotlib, SQlite3 </li>
                        <li>Database: SQlite </li> 
                    </ul>
                </div>

        </div>
    </SummaryStyle>
)
const Experience = () => (
    <ExperienceStyle>
        <h2 className="section-title"><span className="skill-icon-holder"><svg className="svg-inline--fa fa-briefcase fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg><i className="fas fa-briefcase"></i></span>Experience</h2>
        
        <div className="item">
            <div className="meta">
                <div className="upper-row">
                    <h3 className="job-title">Private Teacher</h3>
                    <div className="time">2019 - 2020</div>
                </div>
                <div className="company">Seaside Academy</div>
            </div>
            <div className="details">
                <ul>
                    <li>Teach all the subjects to children (9-18 years) inside of a presencial classroom of the mentioned academy</li>
                    <li>Design different studying plans for improve the learning and also made use of different means of oral communication</li>
                </ul>
            </div>
        </div>
    </ExperienceStyle>
)

export const Curriculum = () => {
    return (
/*     <ContainerStyle>
        <SidebarStyle>
            <Statistics/>
            <SoftSkills/>
            <div style={{display: 'flex', height: '350px', flexGrow: 1}}></div>
        </SidebarStyle>
        <MainStyle>
            <SummaryStyle>
            <div className="upper-row">
                    <h3 className="job-title">Back-End skills</h3>
                    <br/>
                </div>
                <div className="company">Node.js + Express + MongoDB</div>

                <div className="details">
                    <ul>
                        <li>Libraries: Babel + plugins, configured Webpack, Mongoose</li>
                        <li>Frameworks: Express</li>
                        <li>Server-Side Rendering (SSR): Express</li>
                        <li>Database: MongoDB (by Mongoose)</li>
                        <li>Utilities: Git, Git-Bash, CMD</li>
                    </ul>

                </div>
                <br/>

                <div className="meta">
                    <div className="company">Python + SQL &amp; related libraries</div>
                </div>

                <div className="details">
                    <ul>
                        <li>Projects: Tkinter apps</li>
                        <li>Frameworks: Tkinter</li>
                        <li>Libraries: OpenCV, Numpy, Sympy, Pandas, Mathplotlib, SQlite3 </li>
                        <li>Database: SQlite </li> 
                    </ul>
                </div>
            </SummaryStyle>
            <Experience/>
            <div style={{display: 'flex', height: '350px', flexGrow: 1}}></div>
        </MainStyle>
    </ContainerStyle> */
    <ContainerStyle>
        <SidebarStyle>
            <Profile/>
            <Contact/>
            <Languages/>
            <div style={{display: 'flex', height: '231px', flexGrow: 1}}></div>
        </SidebarStyle>
        <MainStyle>
            <Education/>
            <SummaryStyle>
            <div className="meta">
                <div className="upper-row">
                    <h3 className="job-title">Front-End skills</h3>
                    <br/>
                </div>
                <div className="company">HTML + CSS + Javascript</div>
            </div>
            <div className="details">
                <ul>
                    <li>
                        Basic Projects: Ruffini calculator, unit
                        conversor, string editor, 3D cube customizer, array editor, schema creator,
                        responsive webpages(flex &amp; grid) and this CV template.
                    </li>
                    <li>
                        Libraries: Bootstrap, jquery, Sass, ejs, axios
                    </li>
                    <li>
                        APIs: IndexedDB API, DOM, Canvas, Fetch API
                    </li>
                </ul>

            </div>
            <br/>


            <div className="meta">
                <div className="company">React</div>
            </div>
            <div className="details">
                <ul>
                    <li>Function components (React with hooks), state, life cycles, conditional rendering, composition...</li>
                    <li>Testing (Jest &amp; React-testing-library)</li>
                    <li>Optimization (memoizing, useMemo, useCallback)</li>
                    <li>Scrolling pages</li>
                    <li>Personal Projects: Social Media (MERN stack), RESTful web of notes (React + Firebase)</li>
                    <li>Libraries: Styled-Components, Mui, React-Redux</li>
                </ul>
            </div>
            <br/>
            </SummaryStyle>
            <div style={{display: 'flex', height: '149px', flexGrow: 1}}></div>
        </MainStyle>
    </ContainerStyle>
    )
}
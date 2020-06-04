import React, { Component } from 'react';

export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="resume">

        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
        </div>
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item)=>{
                return(
                  <div className="row item">
                    <div className="twelve columns">
                        <h3>{item.UniversityName}</h3>
                        <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                        <p>
                        {item.Achievements}
                        </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

         <div className="row skill">

              <div className="three columns header-col">
                 <h1><span>Skills</span></h1>
              </div>

              <div className="nine columns main-col">
                <div className="skill icons">
                  <span className="tooltip">
                    <img className="skill-icon" src="images/icons8-react-50.svg" alt="React" />
                    <span className="tooltiptext">React</span>
                  </span>
                  <span className="tooltip">
                    <img className="skill-icon" src="images/icons8-ruby-programming-language-50-2.svg" alt="Ruby" />
                    <span className="tooltiptext">Ruby</span>
                  </span>
                  <span className="tooltip">
                    <img className="skill-icon" src="images/icons8-postgresql-50.svg" alt="Postgresql" />
                    <span className="tooltiptext">Postgresql</span>
                  </span>
                  <span className="tooltip">
                    <img className="skill-icon" src="images/icons8-javascript-50.svg" alt="Javascript" />
                    <span className="tooltiptext">Javascript</span>
                  </span>
                  <span className="tooltip">
                    <img className="skill-icon" src="images/icons8-nodejs-50.png" alt="Node.js" />
                    <span className="tooltiptext">Node.js</span>
                  </span>
                  <span className="tooltip">
                    <img className="skill-icon" src="images/icons8-git-50.svg" alt="Git" />
                    <span className="tooltiptext">Git</span>
                  </span>
                  <span className="tooltip">
                    <img className="skill-icon" src="images/icons8-python-50.png" alt="Python"  />
                    <span className="tooltiptext">Python</span>
                  </span>
                  <span className="tooltip">
                    <img className="skill-icon" src="images/icons8-swift-50-2.png" alt="Swift" />
                    <span className="tooltiptext">Swift</span>
                  </span>

                  {/*swap pngs for SVG's to improve resolution*/}
                </div>
              </div>
          </div>


      </section>
    );
  }
}

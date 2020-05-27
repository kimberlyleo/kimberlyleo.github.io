import React, { Component } from 'react';

export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

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


      {/*   <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">


   				     <div className="bars">

   				        <ul className="skills">

                  {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                        <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                        </span><em>{item.skillname}</em>
                      </li>
                      )
                    })
                  }

   					</ul>

   				</div>

   			</div>

         </div> */}

         <div className="row skill">

              <div className="three columns header-col">
                 <h1><span>Skills</span></h1>
              </div>

              <div className="nine columns main-col">
                <div className="skill icons">
                  <img className="skill-icon" src="images/icons8-react-50.svg" alt="React" />
                  <img className="skill-icon" src="images/icons8-ruby-programming-language-50-2.svg" alt="Ruby" />
                  {/*ruby on rails needs to be here*/}
                  <img className="skill-icon" src="images/icons8-postgresql-50.svg" alt="Postgresql" />
                  <img className="skill-icon" src="images/icons8-javascript-50.svg" alt="Javascript" />
                  <img className="skill-icon" src="images/icons8-adobe-photoshop-50.svg" alt="Adobe Photoshop" />
                  <img className="skill-icon" src="images/icons8-git-50.svg" alt="Git" />
                  <img className="skill-icon" src="images/icons8-html-5-50.svg" alt="HTML5" />
                  <img className="skill-icon" src="images/icons8-css-50.png" alt="CSS" />
{/*change ;ast icon to CSS*/}
                </div>
              </div>
          </div>


      </section>
    );
  }
}

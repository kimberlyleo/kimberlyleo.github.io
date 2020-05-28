import React, { Component } from 'react';
// hey
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profile-pic.jpg" alt="profile" />

            </div>

            <div className="nine columns main-col">

               <h2>ABOUT</h2>
                <p>{resumeData.aboutme}</p>
                  <div className="row">

                  <div className="columns contact-details">
                  <h2>CONTACT ME</h2>
                  <p className="address">
       						<div>
                           {resumeData.address}
                        </div>
                    <div><a href={"mailto:kimeleonard@gmail.com"}>{resumeData.email}</a></div>
                    <div><a href="https://www.linkedin.com/kimberly-leo" target="_blank" rel="noopener noreferrer">linkedin.com/kimberlyleo</a></div>
                   </p>

                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}

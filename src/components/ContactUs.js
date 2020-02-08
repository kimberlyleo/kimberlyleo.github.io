import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="justify-content-center">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                Feel free to contact me for work or anything else via email or LinkedIn
              </p>
            </div>
          </div>
            <div className="row">
              <aside className="eigth columns footer-widgets">

              </aside>
            </div>
          </div>
        </section>
        );
  }
}

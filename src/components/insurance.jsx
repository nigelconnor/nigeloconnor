import React, { Component } from "react";

export class insurance extends Component {
  render() {
    return (
      <div id="insurance" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Insurance</h2>
              <h3>
                {this.props.data ? this.props.data.covered : "Loading"}
              </h3>
            </div>
          <div className="row">
            {this.props.data
              ? this.props.data.providers.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default insurance;

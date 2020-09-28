import React, {Component} from 'react';
import './service-div.scss';

class ServiceDiv extends Component {
  render() {
    return (
      <div className='service'>
        <div className='service-icon'>
          <img src={require(`../assets/${this.props.type}.svg`)} alt={this.props.type}/>
        </div>

        <h2 className='service-heading'>{this.props.heading}
        </h2>
        <p className='service-paragraph'>{this.props.children}</p>
      </div>
    )
  }
}

export default ServiceDiv;
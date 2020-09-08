import React, { Component } from 'react';
import {Link} from 'gatsby';
import './brandLogo.scss';

export default class BrandLogo extends Component {
  render() {
    let {screen} = this.props;

    return (
        <Link className={`brand-logo-div ${screen}`} to='#home'>
          <h1 className='brand-logo'>tg
            <span className='dot-in-brand'>.</span>
          </h1>
          <p className='brand-text'>Design <span className='and-sign'>&</span> Development</p>
        </Link>
    )
  }
}

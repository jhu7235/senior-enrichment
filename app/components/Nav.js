import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <nav>
      <Link to={'/home'}><img src="transparent logo1.jpg" className="img-fluid logo" alt="Responsive image" /></Link>
      <div className='text-to-inline-block header'><h1>Interplanetary Academy</h1></div>
      <div className="button-container">
      <Link to={'/students'}><button className="btn btn-outline-primary pull-right">Students</button></Link>
      <Link to={'/campuses'}><button className="btn btn-outline-primary pull-right" href="/campuses">Stations</button></Link>
      </div>
    </nav>
  );

};

export default Nav;

import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <div>
      <img src="transparent logo.png" className="img-fluid logo" alt="Responsive image" />
      <button className="btn btn-outline-primary pull-right">Students</button>
      <button className="btn btn-outline-primary pull-right">Planets</button>
    </div>
  );

};

export default Nav;

import React from 'react';
import { NavLink } from 'react-router-dom';
import data from './Data.png';

const Header = () => {
  return (

    <div>

    <div className="fundo">
            <img src={data} className="img" alt="logo" />
    </div>

    </div>
        
  );
};

export default Header;

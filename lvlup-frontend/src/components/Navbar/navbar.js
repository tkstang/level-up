import React from 'react';
import { Menu } from 'semantic-ui-react';
import renderIf from 'render-if';
import { Link } from 'react-router-dom';
import './navbar-styles.css';
import LoginModal from './login-modal';
import LogOutGithub from './logout-student-container';
import LogOutAdmin from './logout-admin-container';

const NavBar = props => (
  <div className="nav">
    <div id="nav-logo">
      {renderIf(!props.studentLoginInfo.status && !props.adminLoginInfo.status)(
        <Link to={'/'}><div className="nav-logo">lvl^</div></Link>,
      )}
      {renderIf(props.studentLoginInfo.status)(
        <Link to={'/student/dashboard'}><div className="nav-logo">lvl^</div></Link>,
      )}
      {renderIf(props.adminLoginInfo.status)(
        <Link to={'/admin/dashboard'}><div className="nav-logo">lvl^</div></Link>,
      )}
    </div>
    <div id="nav-login">
      {renderIf(!props.studentLoginInfo.status && !props.adminLoginInfo.status)(
        <LoginModal />,
      )}
    </div>
  </div>
);

export default NavBar;

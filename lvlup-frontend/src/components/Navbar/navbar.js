import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import { Link } from 'react-router-dom';
import '../Home/homeview.css';
import LoginModal from './login-modal';
import LogOutGithub from './logout-student';
import LogOutAdmin from './logout-admin';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  loginInfo: state.loginInfo,
});

class NavBar extends Component {
  render() {
    return (
      <Menu secondary size="small" className="nav">
        <Menu.Item className="center" header>
          {renderIf(!this.props.loginInfo.status && !this.props.loggedIn.status)(
            <Link to={'/'}><div className="hamburger" id="nova-font">lvl^</div></Link>,
          )}
          {renderIf(this.props.loginInfo.status)(
            <Link to={'/student/dashboard'}><div className="hamburger" id="nova-font">lvl^</div></Link>,
          )}
          {renderIf(this.props.loggedIn.status)(
            <Link to={'/admin/dashboard'}><div className="hamburger" id="nova-font">lvl^</div></Link>,
          )}
        </Menu.Item>
        <Menu.Item className="right">
          {renderIf(!this.props.loginInfo.status && !this.props.loggedIn.status)(
            <LoginModal />,
          )}
          {renderIf(this.props.loginInfo.status)(
            <LogOutGithub />,
          )}
          {renderIf(this.props.loggedIn.status)(
            <LogOutAdmin />,
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

export default connect(mapStateToProps)(NavBar);


import React, { Component } from 'react';
import { Modal, Image } from 'semantic-ui-react';
import LoginGithub from '../Navbar/login-github';
import AdminLogin from '../Navbar/admin-login';

class FooterLogin extends Component {
  state = { modalOpen: false }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  render() {
    return (
      <Modal
        trigger={<a className="login-link" onClick={this.handleOpen}>Enter</a>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        >
      <Modal.Header>Student and Admin Log In and Sign Up</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src={require('../../images/logo.png')} />
        <Modal.Description>
          <div>
            <p> Student: <LoginGithub /></p>
            <p onClick={this.handleClose}> Admin: <AdminLogin /></p>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
  }
}
export default FooterLogin;

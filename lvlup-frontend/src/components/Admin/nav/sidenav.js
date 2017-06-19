import React from 'react';
import { Menu, Icon, Image, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './sidenav-styles.css';

const AdminSidenav = (props) => {
  if (!props.adminLoginInfo.username) {
    return (
      <Loader active inline="centered"> Loading </Loader>
    );
  }
  return (
    <Menu inverted vertical className="adminSidenav">
      <Menu.Item id="admin-sidenav-info"><Image src={props.adminLoginInfo.gravatar_url ? props.adminLoginInfo.gravatar_url : 'https://ucarecdn.com/d50ece0e-f5e1-47fd-a492-d8561fe02ebb/'} shape="circular" size="tiny" alt={props.adminLoginInfo.name} centered />
        <div className="userdiv">
          <h4>{props.adminLoginInfo.username}</h4>
        </div>
      </Menu.Item>
      <Link to={'/admin/dashboard'}><Menu.Item><Icon className="dash-icon" name="dashboard" /><br />Dashboard</Menu.Item></Link>
      <Link to={'/admin/challenges'}><Menu.Item><Icon className="dash-icon" name="chevron up" /><br />Challenges</Menu.Item></Link>
      <Link to={'/admin/rewards'}><Menu.Item><Icon className="dash-icon" name="gift" /><br />Rewards</Menu.Item></Link>
      <Link to={'/admin/configuration'}><Menu.Item><Icon className="dash-icon" name="setting" /><br />Configuration</Menu.Item></Link>
      <Link to={'/'}><Menu.Item onClick={() => props.loggingOutAdmin()}><Icon className="dash-icon" name="gift" /><br />Log Out</Menu.Item></Link>
    </Menu>
  );
};

export default AdminSidenav;

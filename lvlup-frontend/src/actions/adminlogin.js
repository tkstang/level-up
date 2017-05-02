import axios from 'axios';

const loginRequest = (props) => {
  const url = 'http://localhost:3000/api/admin/login';
  return axios.post(url, props);
};

export const login = props => ({
  type: 'LOGIN',
  payload: loginRequest(props),
});
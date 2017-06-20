import AdminSidenav from '../src/components/Admin/nav/sidenav';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('AdminSidenav should render', () => {
  const store = mockStore({ lvlupApp });
  const admin = shallow(
    <AdminSidenav adminLoginInfo={{ username: 'jennyboo' }} store={store} />,
  );
  expect(shallowToJson(admin)).toMatchSnapshot();
});

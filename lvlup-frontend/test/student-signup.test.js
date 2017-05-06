import StudentSignup from '../src/components/Student/student-main-view/student-signup';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('StudentSignup should render', () => {
  const store = mockStore({ lvlupApp });
  const signup = shallow(
    <StudentSignup store={store} />,
  );
  expect(shallowToJson(signup)).toMatchSnapshot();
});

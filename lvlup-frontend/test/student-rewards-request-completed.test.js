import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import StudentRewardRequestCompleted from '../src/components/Student/requests/request-completed';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('StudentRewardRequestCompleted should render', () => {
  const store = mockStore({ lvlupApp });
  const req = shallow(
    <StudentRewardRequestCompleted reward={{ name: 'Pizza Party' }} requestedReward={{ data: { notes: 'No anchovies' } }} store={store} />,
  );
  expect(shallowToJson(req)).toMatchSnapshot();
});

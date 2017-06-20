import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';
import ChallengeApproval from '../src/components/Admin/challenges/admin-challenges/approval-form';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('ChallengeApproval should render', () => {
  const store = mockStore({ lvlupApp });
  const approve = shallow(
    <ChallengeApproval store={store} />,
  );
  expect(shallowToJson(approve)).toMatchSnapshot();
});

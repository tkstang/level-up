import EditReward from '../src/components/Admin/rewards/edit-reward/edit-reward-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('EditReward should render', () => {
  const store = mockStore({ lvlupApp });
  const edit = shallow(
    <EditReward store={store} />,
  );
  expect(shallowToJson(edit)).toMatchSnapshot();
});

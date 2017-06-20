import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AddChallengeForm from '../src/components/Admin/challenges/add-challenge/add-challenge-form';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('AddChallengeForm should render', () => {
  const store = mockStore({ lvlupApp });
  const addchallenge = shallow(
    <AddChallengeForm campuses={{ length: 5 }} store={store} />,
  );
  expect(shallowToJson(addchallenge)).toMatchSnapshot();
});

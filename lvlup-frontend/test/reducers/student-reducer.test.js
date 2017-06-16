import { studentLoginInfo, studentPointsAndCampus } from '../../src/reducers/student-reducer';
import * as CONST from '../../src/constants/constants';


describe('student login reducer', () => {
  it('should return the initial state', () => {
    expect(studentLoginInfo(undefined, {})).toEqual({ status: false });
  });

  it('should return a new state with the logged in user', () => {
    const prevState = { status: false };
    const nextState = studentLoginInfo(prevState, { type: CONST.STUDENT_LOGIN_FULFILLED, id: 2, email: 'sanjeet.uppal92@gmail.com' });
    expect(nextState).toEqual({ status: true });
  });

  it('should return a new state with the signed in user', () => {
    const prevState = { status: false };
    const nextState = studentLoginInfo(prevState, { type: CONST.STUDENT_SIGNUP_FULFILLED, name: 'Sanjeet Uppal', email: 'uppal101@mail.chapman.edu', cohort_id: 1, username: 'uppal101' });
    expect(nextState).toEqual({ status: true });
  });

  it('should return a new state with a logged out user', () => {
    const prevState = { status: true };
    const nextState = studentLoginInfo(prevState, { type: CONST.STUDENT_LOGOUT_FULFILLED, id: 2, email: 'sanjeet.uppal92@gmail.com' });
    expect(nextState).toEqual({ status: false });
  });
});

describe('student points and campus reducer', () => {
  it('should return the initial state', () => {
    expect(studentPointsAndCampus(undefined, {})).toEqual({});
  });

  it('should return a new state with the students points and campus', () => {
    const prevState = {};
    const nextState = studentPointsAndCampus(prevState, { type: CONST.POINTS_COHORT_FULFILLED, payload: { test: 1 } });
    expect(nextState).toEqual({ test: 1 });
  });
});
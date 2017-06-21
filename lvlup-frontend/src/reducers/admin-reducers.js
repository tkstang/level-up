import * as CONST from '../constants/constants';
import initialState from './initialState';
import {
  mergeSort,
  quickSort,
} from '../helpers/sort-date';
import { bubbleSortStudent } from '../helpers/sort';
import reverse from '../helpers/reverse';

export const addedCohort = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.ADD_COHORT_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.ADD_COHORT_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_ADD_COHORT:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};

export const addAdminCohort = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.ADMIN_COHORT_ADD_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.ADMIN_COHORT_ADD_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_ADMIN_COHORT_ADD:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};


export const adminPendingSubmissions = (state = { submissionsAdmin: [], fetched: false }, action) => {
  switch (action.type) {
    case CONST.ADMIN_SUBMISSIONS_FULFILLED:
      return Object.assign({}, state, {
        submissionsAdmin: state.submissionsAdmin.concat(action.payload),
        fetched: true,
      });
    case CONST.ADMIN_SUBMISSIONS_REJECTED:
      return Object.assign({}, state, { error: 'Server Error - Please Try Again' });
    case CONST.RESET_PENDING_SUBMISSIONS:
      return Object.assign({}, { submissionsAdmin: [] });
    case CONST.SORT_SUBMITTED_CHRONO:
      return { ...state, submissionsAdmin: mergeSort(state.submissionsAdmin) };
    case CONST.SORT_SUBMITTED_REV_CHRONO:
      return { ...state, submissionsAdmin: reverse(quickSort(state.submissionsAdmin)) };
    case CONST.SORT_SUBMITTED_ASC:
      return { ...state, submissionsAdmin: bubbleSortStudent(state.submissionsAdmin) };
    case CONST.SORT_SUBMITTED_DESC:
      return { ...state, submissionsAdmin: reverse(bubbleSortStudent(state.submissionsAdmin)) };
    default:
      return state;
  }
};

export const adminPendingRequests = (state = { requestsAdmin: [], fetched: false }, action) => {
  switch (action.type) {
    case CONST.ADMIN_REQUESTS_FULFILLED:
      return Object.assign({}, state, {
        requestsAdmin: state.requestsAdmin.concat(action.payload),
        fetched: true,
      });
    case CONST.ADMIN_REQUESTS_REJECTED:
      return Object.assign({}, state, { error: 'Server Error - Please Try Again' });
    case CONST.RESET_PENDING_REWARDS:
      return Object.assign({}, { requestsAdmin: [] });
    case CONST.SORT_REQUESTS_CHRONO:
      return { ...state, requestsAdmin: mergeSort(state.requestsAdmin) };
    case CONST.SORT_REQUESTS_REV_CHRONO:
      return { ...state, requestsAdmin: reverse(quickSort(state.requestsAdmin)) };
    case CONST.SORT_REQUESTS_ASC:
      return { ...state, requestsAdmin: bubbleSortStudent(state.requestsAdmin) };
    case CONST.SORT_REQUESTS_DESC:
      return { ...state, requestsAdmin: reverse(bubbleSortStudent(state.requestsAdmin)) };
    default:
      return state;
  }
};

export const adminSignup = (state = initialState.adminSignup, action) => {
  switch (action.type) {
    case CONST.ADMIN_SIGNUP_PENDING:
      return state;
    case CONST.ADMIN_SIGNUP_FULFILLED:
      return action.payload;
    case CONST.ADMIN_SIGNUP_REJECTED:
      return Object.assign({}, { status: false, error: 'Please check that you have filled out all the required fields' }, action.payload);
    default:
      return state;
  }
};

export const adminLoginInfo = (state = { status: false }, action) => {
  switch (action.type) {
    case CONST.ADMIN_LOGIN_FULFILLED:
      localStorage.setItem('userId', action.payload.id);
      return Object.assign({}, { status: true }, action.payload);
    case CONST.ADMIN_LOGIN_REJECTED:
      return Object.assign({}, { status: false, error: 'Login Failed. Please Check your Email and Password' }, action.payload);
    case CONST.ADMIN_LOGOUT_FULFILLED:
      localStorage.clear();
      return Object.assign({}, { status: false });
    case CONST.RESET_ADMIN_FULFILLED:
      return Object.assign({}, { status: true, updated: true }, action.payload);
    default:
      return state;
  }
};

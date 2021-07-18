import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';

import * as constants from '../constants/workout';

const initialState = {};

const workoutReducer = produce((draft, action) => {}, initialState);

export default workoutReducer;

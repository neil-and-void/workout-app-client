import produce from 'immer';
import { HYDRATE } from 'next-redux-wrapper';
import { diff } from 'jsondiffpatch';

import * as constants from '../constants/template';

const initialState = {
  loading: false,
  workoutTemplateForm: {
    name: '',
    exerciseTemplates: [],
  },
  workoutTemplates: [],
  exerciseTemplates: [],
  error: null,
};

const templateReducer = produce((draft, action) => {
  switch (action.type) {
  }
}, initialState);

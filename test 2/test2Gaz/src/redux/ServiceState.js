import { createSlice } from '@reduxjs/toolkit';

export const serviceSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    oneService: {},
    isLoading: false,
    error: '',
  },
  reducers: {
    getServicesFetch: (state) => {
      state.isLoading = true;
    },
    getServicesSuccess: (state, action) => {
      state.services = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    getServicesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getOneServiceFetch: (state) => {
      state.isLoading = true;
    },
    getOneServiceSuccess: (state, action) => {
      state.oneService = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    getOneServiceFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getServicesFetch,
  getServicesSuccess,
  getServicesFailure,
  getOneServiceFetch,
  getOneServiceSuccess,
  getOneServiceFailure,
} = serviceSlice.actions;

export default serviceSlice.reducer;

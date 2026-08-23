import api from './api';

export const leadService = {
  submit: (data) => api.post('/leads', data),
};

export const subscriberService = {
  subscribe: (email) => api.post('/subscribers', { email }),
};

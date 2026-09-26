// import axios from 'axios';

// const api = axios.create({
//   baseURL: '/api',
//   withCredentials: true,
//   timeout: 15000,
// });

// api.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     const message =
//       error.response?.data?.message || error.message || 'Something went wrong. Please try again.';
//     return Promise.reject(new Error(message));
//   }
// );

// export default api;


// import axios from 'axios';

// const api = axios.create({
//   baseURL: '/api',
//   withCredentials: true,
//   timeout: 15000,
// });

// api.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     const message =
//       error.response?.data?.message || error.message || 'Something went wrong. Please try again.';
//     return Promise.reject(new Error(message));
//   }
// );

// export default api;
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
    ? `${import.meta.env.VITE_API_URL}/api`
    : '/api',

  withCredentials: true,

  timeout: 15000,
});

api.interceptors.response.use(
  (response) => response.data,

  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      'Something went wrong. Please try again.';

    return Promise.reject(new Error(message));
  }
);

export default api;

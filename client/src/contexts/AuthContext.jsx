
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

import api from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadUser = useCallback(async () => {
    try {
      const res = await api.get('/auth/me');

      console.log('AUTH ME RESPONSE:', res);

      const currentUser = res?.data?.user;

      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('AUTH ME ERROR:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const login = async (email, password) => {
    try {
      const res = await api.post('/auth/login', {
        email,
        password,
      });

      console.log('AUTH LOGIN RAW RESPONSE:', res);
      console.log('AUTH LOGIN DATA:', res?.data);
      console.log('AUTH LOGIN USER:', res?.data?.user);

      const loggedInUser = res?.data?.user;

      if (!loggedInUser) {
        throw new Error(
          'Login response received, but user data is missing.'
        );
      }

      setUser(loggedInUser);

      return loggedInUser;
    } catch (error) {
      console.error('AUTH LOGIN ERROR:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('LOGOUT ERROR:', error);
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        logout,
        refresh: loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error(
      'useAuth must be used within AuthProvider'
    );
  }

  return ctx;
}





// import { createContext, useContext, useState, useEffect, useCallback } from 'react';
// import api from '../services/api';

// const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   const loadUser = useCallback(async () => {
//     try {
//       const res = await api.get('/auth/me');
//       setUser(res.data.user);
//     } catch {
//       setUser(null);
//     } finally {
//       setIsLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     loadUser();
//   }, [loadUser]);

//   const login = async (email, password) => {
//     const res = await api.post('/auth/login', { email, password });
//     setUser(res.data.user);
//     return res.data.user;
//   };

//   const logout = async () => {
//     await api.post('/auth/logout');
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, isLoading, login, logout, refresh: loadUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const ctx = useContext(AuthContext);
//   if (!ctx) throw new Error('useAuth must be used within AuthProvider');
//   return ctx;
// }

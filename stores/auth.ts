import { defineStore } from 'pinia';

interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthState {
  user: User | null;
  token: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === 'admin'
  },

  actions: {
    async login(email: string, password: string) {
      // Simulate API call
      if (email === 'admin@example.com' && password === 'admin') {
        this.user = {
          id: '1',
          email,
          role: 'admin'
        };
        this.token = 'mock-token';
        return true;
      }
      throw new Error('Invalid credentials');
    },

    logout() {
      this.user = null;
      this.token = null;
    }
  }
});
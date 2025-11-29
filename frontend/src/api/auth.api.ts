

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

// Mock login - returns static data
export const loginApi = async (credentials: LoginRequest): Promise<LoginResponse> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock validation
  if (credentials.email === 'admin@inventory.com' && credentials.password === 'admin123') {
    return {
      user: {
        id: '1',
        email: 'admin@inventory.com',
        name: 'Admin User',
      },
      token: 'mock-jwt-token-12345',
    };
  }

  throw new Error('Invalid credentials');
};

export const logoutApi = async (): Promise<void> => {
  // In real app, this would call backend to invalidate token
  await new Promise((resolve) => setTimeout(resolve, 500));
};

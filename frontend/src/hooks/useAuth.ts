import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginApi, logoutApi, type LoginRequest } from '@/api/auth.api';
import { useAppDispatch } from '@/store/hooks';
import { setCredentials, logout as logoutAction } from '@/store/authSlice';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: LoginRequest) => loginApi(credentials),
    onSuccess: (data) => {
      dispatch(setCredentials(data));
      navigate('/dashboard');
    },
  });
};

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      dispatch(logoutAction());
      queryClient.clear();
      navigate('/login');
    },
  });
};

import {request} from '../plugins/request';

export const login = data => {
  return request.post('/api/users/login', data);
};

export const register = data => {
    return request.post('/api/users', data)
};

// 获取用户信息
export const getProfile = username => {
    return request.get(`/api/profiles/${username}`)
};

// 更新用户信息
export const updateProfile = data => {
    return request.put('/api/user',data)
};

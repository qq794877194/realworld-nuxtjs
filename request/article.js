import {request} from '../plugins/request';

// 获取公共文章列表
export const getArticles = params => {
    return request.get('/api/articles', {params});
};

// 获取关注的用户的文章列表
export const getFeedArticles = (params) => {
    return request.get('/api/articles/feed',{params});
};

// 添加点赞
export const addFavorite = slug => {
  return request.post(`/api/articles/${slug}/favorite`);
};

// 取消点赞
export const deleteFavorite = slug => {
    return request.delete(`/api/articles/${slug}/favorite`);
};

// 获取文章详情
export const getArticle = slug => {
    return request.get(`/api/articles/${slug}`);
};

// 获取文章评论
export const getComments = slug => {
    return request.get(`/api/articles/${slug}/comments`);
};

// 添加文章评论
export const addComments = (slug,data) => {
    return request.post(`/api/articles/${slug}/comments`, data);
};

// 删除文章评论
export const deleteComment = (slug,id) => {
    return request.delete(`/api/articles/${slug}/comments/${id}`);
};

// 添加对作者的关注
export const addFollow = (username) => {
    return request.post(`/api/profiles/${username}/follow`);
};

// 取消对作者的关注
export const deleteFollow = (username) => {
    return request.delete(`/api/profiles/${username}/follow`);
};

// 发布文章
export const publicArticle = (data) => {
    return request.post('/api/articles', data);
};

// 修改文章
export const updateArticle = (data,slug) => {
    return request.put(`/api/articles/${slug}`, data);
};

// 删除文章
export const deleteArticle = (slug) => {
    return request.delete(`/api/articles/${slug}`);
};

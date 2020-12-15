import axios from 'axios';

export const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
});

// 插件要作为默认成员
export default ({store}) => {
    request.interceptors.request.use(function(config){
        const { user } = store.state;
        if(user && user.token){
            config.headers.Authorization = `Token ${user.token}`;
        }
        return config;
    },function(err){
        // 如果请求失败（此时请求还没发出去）就会进入这里
        return Promise.reject(err);
    });
}

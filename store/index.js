const cookieparser = process.server ? require('cookieparser') : undefined;
// 在服务端渲染期间运行都是同一个实例
// 为了防止数据冲突，需要定义为一个函数返回一个对象
export const state = () => {
    return {
        user: null
    }
};

export const mutations = {
  setUser(state, user){
      state.user = user;
  }
};

export const actions = {
    // nuxt中的一个特殊方法，会在服务端渲染期间自动调用
    nuxtServerInit({commit},{req}){
        if(req.headers.cookie){
            const parsed = cookieparser.parse(req.headers.cookie);
            try{
                let user = JSON.parse(parsed.user);
                commit('setUser', user);
            }catch(e){}
        }
    }
};

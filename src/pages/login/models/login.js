import { routerRedux } from 'dva/router'
//import { setLoginIn, menu } from 'utils'
//import { login } from '../services/login'
import * as loginService from '../services/login';


export default {
  namespace: 'login',
  state: {
  },
  effects: {
    * submit ({
      payload,
    }, { call, put, select }) {
      
      const dataToken = yield call(loginService.fetch,payload);
      if (dataToken) {
        //const params = { access_token: dataToken.access_token, username: payload.state.username, password: payload.state.password }
        //const data = yield call(login, params)

      console.log("the datais "+dataToken.token);  

      }
    },
  },
  reducers: {
  },
}

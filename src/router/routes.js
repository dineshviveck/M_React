import { isAuthenticated } from '../controllor/home';
import Home from './view/home';

export const paths = {
  ROOT: '/',
};


const authenticateUser = getState => {
  return (nextState, replace) => {
    if (!isAuthenticated(getState())) {
      //replace(paths.SIGN_IN);
    }
  };
};




export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: Home,
    childRoutes: [{
        indexRoute: {
            component: Home,
            onEnter: requireAuth(getState)
        }
    }
  ]
  };
};

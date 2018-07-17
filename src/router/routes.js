import { authenticateUser } from '../controllor/home';
import Home from '../view/home';

export const paths = {
  ROOT: '/',
};


const authenticate = getState => {
  return (nextState, replace) => {
    if (!authenticateUser(getState())) {
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
            onEnter: authenticate(getState)
        }
    }
  ]
  };
};

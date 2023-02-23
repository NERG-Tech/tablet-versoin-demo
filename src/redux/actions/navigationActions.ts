import {navigationRef} from '../../navigation/AppNavigator';

export const navigate = (name: never, params: never) => {
  if (navigationRef.isReady()) {
    navigationRef.current?.navigate(name, params);
  }
};

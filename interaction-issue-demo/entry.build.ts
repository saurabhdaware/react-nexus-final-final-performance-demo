import index from './index.abell';
import { routes } from './routes';

export const makeRoutes = () => {
  return routes.map((route) => {
    return {
      path: route.path,
      render: () => index({ path: route.path })
    }
  });
};
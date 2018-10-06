import Loadable from 'react-loadable';
import Loading from 'pages/Loading/Loading';

export const Dashboard = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Dashboard" */ 'pages/Dashboard/Dashboard'),
  loading: Loading,
});
export const Chat = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Chat" */ 'pages/Chat/Chat'),
  loading: Loading,
});
export const Resources = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Resources" */ 'pages/Resources/Resources'),
  loading: Loading,
});
export const Tasks = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Tasks" */ 'pages/Tasks/Tasks'),
  loading: Loading,
});
export const Briefings = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Briefings" */ 'pages/Briefings/Briefings'),
  loading: Loading,
});
export const Index = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Index" */ 'pages/Index/Index'),
  loading: Loading,
});
export const Login = Loadable({
  loader: () =>
    import(/* webpackChunkName: "Login" */ 'pages/Login/Login'),
  loading: Loading,
});
export const NotFound = Loadable({
  loader: () =>
    import(/* webpackChunkName: "NotFound" */ 'pages/NotFound/NotFound'),
  loading: Loading,
});

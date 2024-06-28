import { Layout } from 'react-admin';
import CustomMenu from '../Menu';

export const CustomLayout = (props) => <Layout {...props} menu={CustomMenu} />;
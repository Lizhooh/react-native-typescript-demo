import { createStackNavigator } from 'react-navigation';

import App from '@/views/App';
import Home from '@/views/Home';

// 路由表
export const screen = {
    app: App,
    home: Home,
};

// 页面的参数类型
export type ScreenParams = {
    app: any,
    home: {
        id: number,
    },
};

// 创建路由栈
export default createStackNavigator(screen, {
    initialRouteName: 'app',
    mode: 'modal',
    headerMode: 'none',
});
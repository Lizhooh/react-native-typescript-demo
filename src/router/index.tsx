import { NavigationActions } from 'react-navigation';
import { screen, ScreenParams } from '@/routes';

type ScreenKey = keyof typeof screen;

class Router {
    private navigator = null;
    private dispatch(cb: any) {
        if (this.navigator) {
            this.navigator.dispatch(cb);
            return;
        }
        console.warn('navigator is null');
    }
    update(nav: any) {
        this.navigator = nav;
    }
    /** 路由栈里入栈一个页面 */
    push<K extends ScreenKey>(name: K, params?: ScreenParams[K]) {
        this.dispatch(NavigationActions.navigate({
            routeName: name,
            params,
        }));
    }
    /** 路由栈里弹出一个页面 */
    pop() {
        this.dispatch(NavigationActions.back());
    }
}

export default new Router();

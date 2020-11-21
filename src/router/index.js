import {createRouter, createWebHashHistory} from 'vue-router'  // 从别人的库中导入  两个东西 {}

// 导入咱们自己写的  视图    理解为页面
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Category from '../views/Category.vue'
import Login from '../views/Login.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Cart from '../views/Cart.vue'
import CreateOrder from '../views/CreateOrder.vue'
import User from '../views/User.vue'
import Setting from '../views/Setting.vue'
import Address from '../views/Address.vue'
import AddressEdit from '../views/AddressEdit.vue'
import Order from '../views/Order.vue'
import OrderDetail from '../views/OrderDetail.vue'
// 写完了


const router = createRouter({
    // vue 支持两中模式的 路由管理方式
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory

    routes: [ // 是一个数组 列表
    // 里面是一个个的对象  ？ 对象怎么写呢？
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                index: 1
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                index: 1
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                index: 2
            }
        },
        {
            path: '/category',
            name: 'category',
            component: Category,
            meta: {
                index: 1
            }
        },
        {
            path: '/product-list',
            name: 'product-list',
            meta: {
                index: 2
            },
            component: ProductList
        },
        {
            path: '/product/:id',
            name: 'product',
            meta: {
                index: 3
            },
            component: ProductDetail
        },
        {
            path: '/cart',
            name: 'cart',
            meta: {
                index: 1
            },
            component: Cart
        },
        {
            path: '/create-order',
            name: 'create-order',
            meta: {
                index: 2
            },
            component: CreateOrder
        },
        {
            path: '/order',
            name: 'order',
            meta: {
                index: 2
            },
            component: Order
        },
        {
            path: '/order-detail',
            name: 'order-detail',
            meta: {
                index: 3
            },
            component: OrderDetail
        },
        {
            path: '/user',
            name: 'user',
            meta: {
                index: 2
            },
            component: User
        },
        {
            path: '/setting',
            name: 'setting',
            meta: {
                index: 2
            },
            component: Setting
        },
        {
            path: '/address',
            name: 'address',
            meta: {
                index: 2
            },
            component: Address
        },
        {
            path: '/address-edit',
            name: 'address-edit',
            meta: {
                index: 3
            },
            component: AddressEdit
        },
        //  懒加载
        // {
        //     path: '/xx',
        //     name: 'home',
        //     component: () => import('@/pages/home'),
        // }

    ]
})

/**
 *  export default {}
 *  因为 createRouter的返回值就是 {}
 */
export default router
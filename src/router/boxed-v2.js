import BoxedLayout from 'Container/BoxedV2';

// dashboard components
const Ecommerce = () => import('Views/dashboard/Ecommerce');
const WebAnalytics = () => import('Views/dashboard/WebAnalytics');
const Magazine = () => import('Views/dashboard/Magazine');
const News = () => import('Views/dashboard/News');
const Agency = () => import('Views/dashboard/Agency');


export default {
   path: '/',
   component: BoxedLayout,
   redirect: '/dashboard/ecommerce',
   children: [
      {
         component: Ecommerce,
         path: '/dashboard/ecommerce',
         meta: {
            requiresAuth: true,
            title: 'message.ecommerce',
            breadcrumb: 'Dashboard / Ecommerce'
         }
      },
      {
         component: WebAnalytics,
         path: '/dashboard/web-analytics',
         meta: {
            requiresAuth: true,
            title: 'message.webAnalytics',
            breadcrumb: 'Dashboard / Web Analytics'
         }
      },
      {
         component: Magazine,
         path: '/dashboard/magazine',
         meta: {
            requiresAuth: true,
            title: 'message.magazineAndNews',
            breadcrumb: 'Dashboard / Magazine'
         }
      },
      {
         component: News,
         path: '/dashboard/news',
         meta: {
            requiresAuth: true,
            title: 'message.news',
            breadcrumb: 'Dashboard / News'
         }
      },
      {
         component: Agency,
         path: '/dashboard/agency',
         meta: {
            requiresAuth: true,
            title: 'message.agency',
            breadcrumb: 'Dashboard / Agency'
         }
      }
   ]
}

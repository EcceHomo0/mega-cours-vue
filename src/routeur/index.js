// Ici on va créer une instance de router et config des routes
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
          {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFoundView.vue')
        },
        {
            path: '/',
            alias:'/home',
            name: 'home',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/drmario',
            name: 'drmario',
            component: () => import('../views/tps/databinding.vue')
        },
        {
            path: '/textinterpolation',
            name: 'textinterpolation',
            component: () => import('../views/lecons/text-interpolation.vue')
        },
        {
            path: '/attribute-binding',
            name: 'attribute-binding',
            component: () => import('../views/lecons/attribute-binding.vue')
        },
        {
            path: '/event-binding',
            name: 'event-binding',
            component: () => import('../views/lecons/event-binding.vue')
        },
        {
            path: '/event_von',
            name: 'event_von',
            component: () => import('../views/exercices/event_von.vue')
        },
        {
            path: '/von2',
            name: 'von2',
            component: () => import('../views/tps/von2.vue')
        },
        {
            path: '/bug_volontaire',
            name: 'bug_volontaire',
            component: () => import('../views/exercices/bug_volontaire.vue')
        },
        {
            path: '/watchers',
            name: 'watchers',
            component: () => import('../views/exercices/exercice_watchers.vue')
        },
        {
            path: '/dynamic-styling',
            name: 'dynamic-styling',
            component: () => import('../views/lecons/dynamic-styling.vue')
        },
        {
            path: '/exercice_style_dynamique',
            name: 'exercice_style_dynamique',
            component: () => import('../views/exercices/vue_dynamic_styling.vue')
        },
        {
            path: '/tp_DynamicStyling',
            name: 'tp_DynamicStyling',
            component: () => import('../views/tps/tp_eval_styleDynamic.vue')
        }
    ]
});

export default router;
import React from 'react';

import { MainLayout, LayoutWithoutSidebar } from '../layouts';
import { Home, Movie, Search, MovieGenre, About, Contact, PrivacyPolicy, CopyrightComplaint, Page404 } from '../pages';

interface Route {
    path: string;
    component: React.ComponentType;
    layout: any | null;
}

const publicRoutes: Route[] = [
    { path: '/', component: Home, layout: MainLayout },
    { path: '/movie', component: Movie, layout: MainLayout },
    { path: '/search', component: Search, layout: MainLayout },
    { path: '/movie-genre', component: MovieGenre, layout: MainLayout },
    { path: '/about', component: About, layout: LayoutWithoutSidebar },
    { path: '/contact', component: Contact, layout: LayoutWithoutSidebar },
    {
        path: '/privacy-policy',
        component: PrivacyPolicy,
        layout: LayoutWithoutSidebar,
    },
    {
        path: '/copyright-complaint',
        component: CopyrightComplaint,
        layout: LayoutWithoutSidebar,
    },
    { path: '/contact', component: Contact, layout: LayoutWithoutSidebar },
    { path: '/*', component: Page404, layout: MainLayout },
];

const privateRoutes: Route[] = [];

export { publicRoutes, privateRoutes };

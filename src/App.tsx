import React, { Fragment, useEffect, ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import MainLayout from './layouts/MainLayout';

type Props = {
    children: ReactNode;
};

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout: React.ComponentType<Props> = MainLayout;

                        if (route.layout) {
                            Layout = route.layout as React.ComponentType<Props>;
                        } else {
                            Layout = Fragment as React.ComponentType<Props>;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

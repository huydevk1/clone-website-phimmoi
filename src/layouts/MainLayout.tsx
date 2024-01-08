import React, { ReactNode } from 'react';
import { Header, Footer, Sidebar } from '../components/ui';

type Props = {
    children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <div className="max-w-[1200px] mx-auto bg-bg-color border-y border-solid border-border-color md:grid md:grid-cols-10 md:mt-[70px]">
                <div className="border-r border-solid border-border-color md:col-span-7">
                    {children}
                </div>
                <div className="md:col-span-3">
                    <Sidebar />
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default MainLayout;

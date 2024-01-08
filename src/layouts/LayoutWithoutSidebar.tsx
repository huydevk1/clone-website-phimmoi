import React, { ReactNode } from 'react';
import { Footer, Header } from '../components/ui';

type Props = { children: ReactNode };

const LayoutWithoutSidebar = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <div className="max-w-[1200px] mx-auto bg-bg-color border-y border-solid border-border-color md:mt-[70px]">
                <div className="border-r border-solid border-border-color">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LayoutWithoutSidebar;

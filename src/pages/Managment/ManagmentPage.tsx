import React, { ReactNode } from 'react';
import BaseWorkspace from '../../components/layouts/BaseWorkspace/BaseWorkspace';

interface ManagmentPageProps {
    children: ReactNode;
}

const ManagmentPage: React.FC<ManagmentPageProps> = ({ children }: ManagmentPageProps) => {
    const sidebarItems = ["Actions", "Family"];
    return (
        <BaseWorkspace initialItemList={sidebarItems}>
            {children}
        </BaseWorkspace>
    );
};

export default ManagmentPage;

import React from 'react';
import { HomeOutlined, SettingOutlined, SnippetsOutlined, UsergroupAddOutlined } from '@ant-design/icons';

const items = (role) => {
    const roleRoute = role === "super_admin" ? "admin" : role;

    return {
        items: [
            {
                title: 'Dashboard',
                url: `/${roleRoute}/dashboard`,
                showTo: ["admin", "super_admin", "client"],
                icon: <HomeOutlined />,
            },
            {
                title: 'System',
                icon: <SettingOutlined />,
                showTo: ["admin", "super_admin"],
                children: [
                    {
                        title: 'Escalation',
                        url: 'manage-escalation',
                        showTo: ["admin", "super_admin"],
                    },
                    {
                        title: 'Consumable Message',
                        url: 'consumable-message',
                        showTo: ["admin", "super_admin"],
                    },
                ]
            },
            {
                title: 'Manage Client',
                url: `/${roleRoute}/manage-client`,
                icon: <UsergroupAddOutlined />,
                showTo: ["admin", "super_admin"],
            },
            // {
            //     title: 'Manage User',
            //     url: `/admin/manage-user`,
            //     icon: <UserOutlined />,
            //     showTo: ["admin", "super_admin"],
            // },
            {
                title: 'Manage Machine',
                url: `/${roleRoute}/manage-machine`,
                icon: <SettingOutlined />,
                showTo: ["admin", "super_admin", "client"],
            },
            {
                title: 'Manage Consumable Message',
                url: `/${roleRoute}/manage-consumable-message`,
                icon: <SnippetsOutlined />,
                showTo: ["admin", "super_admin", "client"],
            },
        ],
    };
};

export default items;

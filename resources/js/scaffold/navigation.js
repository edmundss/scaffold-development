import { dashboard } from '@/routes';
import { index as timelineIndex } from '@/routes/timeline';
import {
    alertify,
    buttons,
    calendar,
    charts,
    colors,
    grid,
    icons,
    notifications,
    panels,
    starter,
    typography,
    userProfile,
} from '@/routes/demo';
import {
    extended as extendedForms,
    regular as regularForms,
    validation as validationForms,
    wizard as wizardForms,
} from '@/routes/demo/forms';
import {
    datatables,
    extended as extendedTables,
    regular as regularTables,
} from '@/routes/demo/tables';
import RoleController from '@/actions/App/Http/Controllers/Admin/RoleController';
import UserController from '@/actions/App/Http/Controllers/Admin/UserController';

export default [
    {
        title: 'Sākums',
        icon: 'home',
        url: dashboard.url(),
        activeUrl: dashboard.url(),
    },
    {
        title: 'Pages',
        icon: 'image',
        activeUrl: [timelineIndex.url(), userProfile.url(), starter.url()],
        subItemType: 'manual',
        subItems: [
            {
                title: 'Timeline',
                url: timelineIndex.url(),
                activeUrl: timelineIndex.url(),
            },
            {
                title: 'User Profile',
                url: userProfile.url(),
                activeUrl: userProfile.url(),
                roleRestriction: 'Sistēmas administrators',
            },
            {
                title: 'Starter Page',
                url: starter.url(),
                activeUrl: starter.url(),
            },
            {
                title: '404',
                url: '/404',
                activeUrl: '/404',
            },
        ],
    },

    {
        title: 'Components',
        icon: 'apps',
        activeUrl: [
            buttons.url(),
            colors.url(),
            grid.url(),
            icons.url(),
            panels.url(),
            alertify.url(),
            notifications.url(),
            typography.url(),
        ],
        subItemType: 'manual',
        subItems: [
            {
                title: 'Buttons',
                url: buttons.url(),
                activeUrl: buttons.url(),
            },
            {
                title: 'Colors',
                url: colors.url(),
                activeUrl: colors.url(),
            },
            {
                title: 'Grid System',
                url: grid.url(),
                activeUrl: grid.url(),
            },
            {
                title: 'Icons',
                url: icons.url(),
                activeUrl: icons.url(),
            },
            {
                title: 'Panels',
                url: panels.url(),
                activeUrl: panels.url(),
            },
            {
                title: 'Alertify',
                url: alertify.url(),
                activeUrl: alertify.url(),
            },
            {
                title: 'Notifications',
                url: notifications.url(),
                activeUrl: notifications.url(),
            },
            {
                title: 'Typography',
                url: typography.url(),
                activeUrl: typography.url(),
            },
        ],
    },
    {
        title: 'Forms',
        icon: 'content_paste',
        activeUrl: [
            regularForms.url(),
            extendedForms.url(),
            validationForms.url(),
            wizardForms.url(),
        ],
        subItemType: 'manual',
        subItems: [
            {
                title: 'Regular Forms',
                url: regularForms.url(),
                activeUrl: regularForms.url(),
            },
            {
                title: 'Extended Forms',
                url: extendedForms.url(),
                activeUrl: extendedForms.url(),
            },
            {
                title: 'Validation Forms',
                url: validationForms.url(),
                activeUrl: validationForms.url(),
            },
            {
                title: 'Wizard',
                url: wizardForms.url(),
                activeUrl: wizardForms.url(),
            },
        ],
    },
    {
        title: 'Tables',
        icon: 'grid_on',
        activeUrl: [
            regularTables.url(),
            extendedTables.url(),
            datatables.url(),
        ],
        subItemType: 'manual',
        subItems: [
            {
                title: 'Regular Tables',
                url: regularTables.url(),
                activeUrl: regularTables.url(),
            },
            {
                title: 'Extended Tables',
                url: extendedTables.url(),
                activeUrl: extendedTables.url(),
            },
            {
                title: 'Datatables',
                url: datatables.url(),
                activeUrl: datatables.url(),
            },
        ],
    },
    {
        title: 'Charts',
        icon: 'show_chart',
        url: charts.url(),
        activeUrl: charts.url(),
    },
    {
        title: 'Calendar',
        icon: 'date_range',
        url: calendar.url(),
        activeUrl: calendar.url(),
    },
    {
        title: 'Administrēšana',
        icon: 'settings',
        url: '#',
        activeUrl: [RoleController.index().url, UserController.index().url],
        subItemType: 'manual',
        permissionRestriction: ['Lietotāju pārvaldība', 'Lomu pārvaldība'],
        subItems: [
            {
                title: 'Lietotāji',
                url: UserController.index().url,
                activeUrl: UserController.index().url,
            },
            {
                title: 'Lomas',
                url: RoleController.index().url,
                activeUrl: RoleController.index().url,
            },
        ],
    },
];

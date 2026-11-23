import { dashboard } from '@app/routes';
import { edit as profile } from '@app/routes/profile';
import { index as appearance } from '@app/routes/user-settings';

export default {
    navigation: [
        { id: 'dashboard', title: 'Dashboard', icon: 'dashboard', url: dashboard.url() },
        { id: 'profile', title: 'Profile', icon: 'person', url: profile.url() },
        { id: 'appearance', title: 'Appearance', icon: 'palette', url: appearance.url() },
    ],
};

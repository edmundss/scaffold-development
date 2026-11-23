import DashboardController from './DashboardController'
import DemoDatatableController from './DemoDatatableController'
import Admin from './Admin'
import CommentController from './CommentController'
import UserSettingsController from './UserSettingsController'
import Settings from './Settings'
const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
DemoDatatableController: Object.assign(DemoDatatableController, DemoDatatableController),
Admin: Object.assign(Admin, Admin),
CommentController: Object.assign(CommentController, CommentController),
UserSettingsController: Object.assign(UserSettingsController, UserSettingsController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers
import DemoUserProfileController from './DemoUserProfileController'
import DeleteUserController from './DeleteUserController'
const Admin = {
    DemoUserProfileController: Object.assign(DemoUserProfileController, DemoUserProfileController),
DeleteUserController: Object.assign(DeleteUserController, DeleteUserController),
}

export default Admin
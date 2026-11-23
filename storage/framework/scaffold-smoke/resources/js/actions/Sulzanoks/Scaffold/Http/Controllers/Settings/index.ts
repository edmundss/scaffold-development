import ProfileController from './ProfileController'
import AvatarController from './AvatarController'
import SecurityController from './SecurityController'
import SessionController from './SessionController'
const Settings = {
    ProfileController: Object.assign(ProfileController, ProfileController),
AvatarController: Object.assign(AvatarController, AvatarController),
SecurityController: Object.assign(SecurityController, SecurityController),
SessionController: Object.assign(SessionController, SessionController),
}

export default Settings
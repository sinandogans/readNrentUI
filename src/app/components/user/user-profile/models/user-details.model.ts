import {UserProfileOtherUsersModel} from "./user-profile-other-users.model";

export interface UserDetailsModel {
  id: number;
  fullName: string;
  username: string;
  profilePhotoPath: string;
  coverPhotoPath: string;
  followingUsers: UserProfileOtherUsersModel[];
  followers: UserProfileOtherUsersModel[];
}

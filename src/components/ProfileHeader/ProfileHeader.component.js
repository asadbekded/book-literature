import React from 'react'
import { ProfileHead, ProfileItem, ProfileLink, ProfileList, ProfileSpan } from './ProfileHeader.style'

export const ProfileHeader = () => {
  return (
    <ProfileHead>
        <ProfileList>
            <ProfileLink to='/profile' end>
                <ProfileItem> <ProfileSpan>1</ProfileSpan>  Profile</ProfileItem>
            </ProfileLink>

            <ProfileLink to='/profile/security'>
                <ProfileItem> <ProfileSpan>2</ProfileSpan>  Security</ProfileItem>
            </ProfileLink>

            <ProfileLink to='/profile/settings'>
                <ProfileItem> <ProfileSpan>3</ProfileSpan>  Settings</ProfileItem>
            </ProfileLink>
            <ProfileLink to='/'>
                <ProfileItem> <ProfileSpan>4</ProfileSpan>  Home</ProfileItem>
            </ProfileLink>
        </ProfileList>
    </ProfileHead>
  )
}

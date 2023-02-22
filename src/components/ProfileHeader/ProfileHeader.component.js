import React from 'react'
import { useSelector } from 'react-redux';
import { ProfileHead, ProfileItem, ProfileLink, ProfileList, ProfileSpan } from './ProfileHeader.style'

export const ProfileHeader = () => {
  const theme = useSelector((state) => state.mode.theme);

  return (
    <ProfileHead>
        <ProfileList>
            <ProfileLink just={theme ? '#F3F6F9' : '#dde6f5'} active={theme ? '#000' : '#152540'} hover={theme ? '#fff' : '#464E5F'}  color={theme ? "#2D2D2D" : "#f3f6f9"} to='/profile' end>
                <ProfileItem> <ProfileSpan>1</ProfileSpan>  Profile</ProfileItem>
            </ProfileLink>

            <ProfileLink just={theme ? '#F3F6F9' : '#dde6f5'} active={theme ? '#000' : '#152540'} hover={theme ? '#fff' : '#464E5F'} color={theme ? "#2D2D2D" : "#f3f6f9"} to='/profile/security'>
                <ProfileItem> <ProfileSpan>2</ProfileSpan>  Security</ProfileItem>
            </ProfileLink>

            <ProfileLink just={theme ? '#F3F6F9' : '#dde6f5'} active={theme ? '#000' : '#152540'} hover={theme ? '#fff' : '#464E5F'} color={theme ? "#2D2D2D" : "#f3f6f9"} to='/profile/settings'>
                <ProfileItem> <ProfileSpan>3</ProfileSpan>  Settings</ProfileItem>
            </ProfileLink>
            <ProfileLink just={theme ? '#F3F6F9' : '#dde6f5'} active={theme ? '#000' : '#152540'} hover={theme ? '#fff' : '#464E5F'} color={theme ? "#2D2D2D" : "#f3f6f9"} to='/'>
                <ProfileItem> <ProfileSpan>4</ProfileSpan>  Home</ProfileItem>
            </ProfileLink>
        </ProfileList>
    </ProfileHead>
  )
}

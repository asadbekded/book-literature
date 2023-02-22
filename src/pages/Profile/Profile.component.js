import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MyProfile } from '../../components/MyProfile/MyProfile.component';
import { ProfileHeader } from '../../components/ProfileHeader/ProfileHeader.component';
import { Security } from '../../components/Security/Security.component';
import { Settings } from '../../components/Settings/Settings.component';

export const Profile = () => {
  return (
    <>
    <ProfileHeader/>
    <Routes>
      <Route index element={<MyProfile/>} />
      <Route path='/security' element={<Security/>} />
      <Route path='/settings' element={<Settings/>} />
    </Routes>
    </>
  )
}

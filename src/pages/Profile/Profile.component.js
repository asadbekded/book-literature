import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MyProfile } from '../../components/MyProfile/MyProfile.component'
import { ProfileHeader } from '../../components/ProfileHeader/ProfileHeader.component'
import { Security } from '../../components/Security/Security.component'

export const Profile = () => {
  return (
    <>
    <ProfileHeader/>
    <Routes>
      <Route index element={<MyProfile/>} />
      <Route path='/security' element={<Security/>} />
      <Route path='/settings' element={<h2>Settings</h2>} />
    </Routes>
    </>
  )
}

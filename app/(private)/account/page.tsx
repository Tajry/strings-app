"use client"

import React from 'react'
import AvatarForm from './avatar-form'
import SignoOutButton from './singout-btn'

export default function AccountPage() {
  return (
    <div>
        <h2>Account</h2>
        <AvatarForm />
        <SignoOutButton />
    </div>
  )
}

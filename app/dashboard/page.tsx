"use client"
import { SignOutButton, useUser } from '@clerk/nextjs'
import React from 'react'

const Dashboard = () => {
  const { user } = useUser()  
  return (
    <div>
        hello, {user?.fullName} <SignOutButton>Sign Out</SignOutButton>
    </div>
  )
}

export default Dashboard
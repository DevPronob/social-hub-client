'use client'
import Container from '@/components/UI/Container'
import { useGetMe } from '@/hooks/auth.hook'
import { getMe } from '@/services/AuthService'
import React from 'react'

function Home() {
  return (
   <Container>
     <div>Home</div>
   </Container>
  )
}

export default Home
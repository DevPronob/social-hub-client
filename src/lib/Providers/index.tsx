"use client"

import UserProvider from '@/context/user.context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { Toaster } from 'sonner'

function Provider({children}: {children: React.ReactNode}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
      <Toaster />
      {children}
      </UserProvider>
    </QueryClientProvider>
  )
}

export default Provider
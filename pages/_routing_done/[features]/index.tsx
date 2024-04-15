import { useRouter } from 'next/router'
import React from 'react'

function Features() {
    const router = useRouter()
    console.log(router.query)
  return (
    <div>
      Welcome to nested features route
    </div>
  )
}

export default Features

import { useRouter } from 'next/router'
import React from 'react'

function Concepts() {
    const router = useRouter()
    console.log(router.query)
  return (
    <div>
      Welcome to nested concepts file.
    </div>
  )
}

export default Concepts

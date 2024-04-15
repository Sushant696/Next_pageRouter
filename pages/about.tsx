import { useRouter } from 'next/router'
import React from 'react'

function About() {
    const router = useRouter()
    const {name,age} = router.query
    console.log(router.query)
  return (
    <div>
      hello this is about page.
      {name}
      {age}
    </div>
  )
}

export default About

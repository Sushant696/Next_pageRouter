import { useRouter } from 'next/router'
import React from 'react'

function Docs() {
    const router = useRouter();
    const {params = []} = router.query;
    console.log(router.query)
  return (
    <div>
        Welcome to docs component
        {params && <div>
            <h1>
                features : {params[0]} <br />

                concepts : {params[1]}
            </h1>
        </div>}
    </div>
  )
}

export default Docs
// You can also filter and display specific routes according to your usecase 
// 
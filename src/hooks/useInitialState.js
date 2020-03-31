import React, { useState, useEffect } from 'react'

const useInitialState = (API) => {
  const [state, setState] = useState(undefined)

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setState(data))
  }, [])

  return state
}


export default useInitialState
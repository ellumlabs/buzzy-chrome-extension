import { useState, useEffect } from 'react'

const useHashLocation = () => {
  const [location, setLocation] = useState(window.location.hash.replace(/^#/, '') || '/')

  useEffect(() => {
    const handleHashChange = () => {
      setLocation(window.location.hash.replace(/^#/, ''))
    };

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (to) => {
    window.location.hash = to
  }

  return [location, navigate]
}

export default useHashLocation


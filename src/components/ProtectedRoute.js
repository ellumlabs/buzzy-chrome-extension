import { useLocation, Redirect } from 'wouter'

const ProtectedRoute = ({ component: Component }) => {
  const [location, setLocation] = useLocation()

  const isAuthenticated = () => !!localStorage.getItem('userToken')

  if (!isAuthenticated()) {
    setLocation('/login')
    return null
  }

  return <Component />
};

export default ProtectedRoute

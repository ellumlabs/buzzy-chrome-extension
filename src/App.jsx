import "./App.css"
import { Router, Route } from 'wouter';
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import LoginReset from './pages/LoginReset'
import useHashLocation from './hooks/useHashLocation'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Router hook={useHashLocation}>
      <Route path="/" component={() => <ProtectedRoute component={Home} />} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login-reset" component={LoginReset} />
    </Router> 
  );
}

export default App


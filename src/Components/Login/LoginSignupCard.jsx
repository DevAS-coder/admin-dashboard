import { useContext } from 'react'
import { LoginCardContext } from '../../Contexts/AuthContext'
import SignupCard from './SignupCard'
import LoginCard from './LoginCard'

function LoginSignupCard() {
    const { showLogin } = useContext(LoginCardContext)
    return (
        <div className={`card ${showLogin ? 'rotate-y-0' : 'rotate-y-180'}`}>
            <LoginCard/>
            <SignupCard/>
        </div>
    )
}

export default LoginSignupCard
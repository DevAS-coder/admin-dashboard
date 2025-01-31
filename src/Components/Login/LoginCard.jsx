import { useContext, useState } from 'react'
import { LoginCardContext } from '../../Contexts/AuthContext'
import { notifContext } from '../../Contexts/NotificationContext'
import Loading from '../utils/Loading'

function LoginCard() {
    const { toggleCard } = useContext(LoginCardContext)
    const { setMessage, setStatus, setShowNotif } = useContext(notifContext)
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [loading, setloading] = useState(false)
    const {setIsValidToken} = useContext(LoginCardContext)

    const loginHandler = (result) => {
        setMessage(result.message)
        setStatus(result.status)
        setShowNotif(true)
        if (result.status === 200){
            localStorage.setItem('token' , result.token)
        }
        setTimeout(() => {
            setShowNotif(false)
            setIsValidToken(true)
        }, 5000);
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const sendTOAPI = async (e) => {
        e.preventDefault()
        setloading(true)
        try {
            fetch('https://dashboard-db.amirhoseinsadeghian2017.workers.dev/api/auth/login',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username: Username, password: Password }),
                }
            )

            .then(response => response.json())
            .then(result => {
                setloading(false)
                loginHandler(result)
            })

        } 
        catch (error) {
            console.log(error)
        }

    }

    return (
        <div className="face front bg-black p-6 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-2xl font-bold text-center text-white mb-4">ورود</h2>
            <form>
                <input
                    type="text"
                    placeholder="نام کاربری"
                    className="border-2 border-blue-900 rounded p-2 w-full mb-4 text-white"
                    onChange={handleUsername}
                />
                <input
                    type="password"
                    placeholder="رمزعبور"
                    className="border-2 border-blue-900 rounded p-2 w-full mb-4 text-white"
                    onChange={handlePassword}
                />
                <button type="submit" className={`w-full cursor-pointer  text-white p-2 rounded ${loading ? 'bg-gray-700 pointer-events-none' : "bg-blue-900"}`} onClick={sendTOAPI}>{loading ? <Loading/> : 'ورود'}</button>
            </form>
            <p className="text-center mt-auto cursor-pointer text-white" onClick={toggleCard}>اکانت ندارید؟ ثبت نام کنید</p>
        </div>
    )
}

export default LoginCard
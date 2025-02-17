import React, { useContext } from 'react'
import { Usercontext } from '../../../Contexts/Userinfo'

function ProfilePage() {
  const { name, setname, Username, setUsername } = useContext(Usercontext)

  return (
    <div className='bg-gray-900 text-white p-4 min-h-screen'>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">تنظیمات پروفایل</h1>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">نام نمایشی</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full p-2 bg-gray-800 rounded border border-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">نام کاربری</label>
            <input
              type="text"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 bg-gray-800 rounded border border-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
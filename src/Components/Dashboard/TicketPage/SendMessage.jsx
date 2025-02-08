import React from 'react'

function SendMessage() {
  return (
    <div>
        <form action="" className="flex justify-between items-center mt-5">
            <input type="text" className="w-5/5 p-2 bg-gray-800 rounded-lg" placeholder="پیام خود را بنویسید..." />
            <button className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-900 cursor-pointer">ارسال</button>
        </form>
    </div>
  )
}

export default SendMessage
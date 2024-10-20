import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import React , {useState} from 'react';
const Sidebar = () => {
    const [darkMode , setDarkMode] = useState(false);
    
    const toggleTheme = () => {
        setDarkMode (!darkMode);
        document.body.classList.toggle('dark');
    }
    return (
    <div className='flex items-start'>
    <div className={`fixed z-10 top-0 left-0 p-8 h-screen w-2/12 ${darkMode ? 'dark bg-gray-800 text-white' : ''} `}>
        <div className="text-xl font-extrabold mb-2.5">
            <span className="text-sky-500">Dash</span>
            <span className={`text-black ${darkMode ? 'text-white' : ''}`}>Stack</span>
        </div>
        <div className="h-full w-full py-8 flex justify-between flex-col items-start">
            <div className='flex flex-col gap-3 w-full'>
                <div className="px-4 py-3 flex gap-2 items-center hover:bg-gray-200 cursor-pointer">
                    <i className="fa-solid fa-qrcode"></i>
                    <span>Products</span>
                </div>
                <div className="px-4 py-3 flex gap-2 items-center hover:bg-gray-200 cursor-pointer">
                <i className="fa-regular fa-heart"></i>
                    <span>Favorites</span>
                </div>
                <div className="px-4 py-3 flex gap-2 items-center hover:bg-gray-200 cursor-pointer">
                <i className="fa-solid fa-list-check"></i>
                    <span>Order List</span>
                </div>
            </div>
            <Link to = "/">
            <button type="submit" 
            className="flex items-center justify-center gap-2 bg-sky-600 text-white w-36 h-10 rounded-md">
                <img src="/public/assets/icons/btn.svg" alt="" />
                Log Out
            </button>
            </Link>
        </div>
    </div>
    <div className={`p-6 flex items-center justify-end w-screen h-16 ${darkMode ? 'dark bg-gray-800 text-white' : ''}`}>
        <div className={`flex gap-3 `}>
            <div></div>
            <div className='rotate-90'><i className="fa-solid fa-window-minimize"></i></div>
            <div className='cursor-pointer' onClick={toggleTheme}>
            <img src={`public/assets/icons/${darkMode ? 'sun_fill.svg' : 'Moon_fill.svg'}`}/>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Sidebar

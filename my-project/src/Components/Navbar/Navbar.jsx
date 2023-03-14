import React from "react" ;


const Navbar = () => {
    return (
        <div className = "navbar flex justify-between items-center">
            <div className="logodiv">
                <h1 className="logo text-2xl text-blue-500 ">Job<span className="font-bold">Search</span></h1>
            </div>
            <div className="menu flex gap-8 ">
                <li className="menuList text-slate-500 list-none  hover:text-blue-700 hover:text-xl hover:duration-300 hover:underline">Home</li>
                <li className="menuList text-slate-500 list-none  hover:text-blue-700 hover:text-xl hover:duration-300 hover:underline">Companies</li>
                <li className="menuList text-slate-500 list-none  hover:text-blue-700 hover:text-xl hover:duration-300 hover:underline ">About</li>
                <li className="menuList text-slate-500 list-none  hover:text-blue-700 hover:text-xl hover:duration-300 hover:underline">Contact</li>
                <li className="menuList text-slate-500 list-none  hover:text-blue-700 hover:text-xl hover:duration-300 hover:underline">Blog</li>
                <li className="menuList text-slate-500 list-none  hover:text-blue-700 hover:text-xl hover:duration-300 hover:underline">Login</li>
                <li className="menuList text-slate-500 list-none  hover:text-blue-700 hover:text-xl hover:duration-300 hover:underline">Register</li>



            </div>
        </div>

    )
}

export default Navbar;
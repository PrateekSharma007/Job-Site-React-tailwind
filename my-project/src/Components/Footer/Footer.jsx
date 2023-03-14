import React from "react";
import {BsInstagram} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"


const Footer = () => {
    return (
        <div>
            <div className="box bg-blue-700 flex justify-between items-center align-middle p-14 mb-10 ">
                <div className="1">
                    <h1 className="logo text-2xl text-white mb-0">Job<span className="font-bold">Search</span></h1>
                    <p className="text-left  w-[150px] ml-8 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis minima, maxime eos excepturi voluptas dolorum.</p>
                </div>
                <div className="2">
                    <h1 className="logo text-2xl text-white mb-6  ">Company</h1>
                    <p className=" text-gray-400 mb-3 ">About us </p>
                    <p className=" text-gray-400 mb-3">Features </p>
                    <p className=" text-gray-400 mb-3">News </p>
                    <p className=" text-gray-400 mb-3">FAQ </p>
                </div>
                <div className="3">
                <h1 className="logo text-2xl text-white mb-6 ">Resources</h1>
                <p className=" text-gray-400 mb-3">Account </p>
                    <p className=" text-gray-400 mb-3">Support cell </p>
                    <p className=" text-gray-400 mb-3">Feedback </p>
                    <p className=" text-gray-400 mb-3">Contact us </p>
                </div>
                <div className="4">
                <h1 className="logo text-2xl text-white mb-6 ">Support</h1>
                <p className=" text-gray-400 mb-3">Events </p>
                    <p className=" text-gray-400 mb-3">Promo </p>
                    <p className=" text-gray-400 mb-3">Req Demo </p>
                    <p className=" text-gray-400 mb-3">Careers </p>
                </div>
                <div className="5">
                <h1 className=" flex-row logo text-2xl text-white mb-40 mt-0" ><span>Contact us</span><span className="flex mt-10"> <span className="mr-4"><BsInstagram/></span><span className="mr-4"><AiOutlineTwitter/></span><span className="mr-4"><AiFillLinkedin/></span></span>
                </h1>
                
                </div>

            </div>

        </div>
    )
}


export default Footer;
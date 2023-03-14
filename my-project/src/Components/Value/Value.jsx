import React from "react";
import { BsBalloonHeartFill } from "react-icons/bs"

const Value = () => {
    return (
        <div>
            <div className="mt-28">
                <span className="flex justify-start text-5xl font-semibold mx-10 mb-10">The value that holds us true <br />  and to account </span>
            </div>
            <div className="flex justify-between items-center gap-10">

                <div className=" p-5 mx-10 w-[300px] bg-slate-100 rounded-lg shadow-xl">
                    <span className="flex"><span className="text-5xl mr- 5"><BsBalloonHeartFill /></span><span className="ml-7 text-2xl  text-blue-500">Simplicity</span></span>
                    <p className="mx-10 text-left text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed expedita nemo sapiente quos! Libero, ut.</p>
                </div>

                <div className=" p-5 mx-10 w-[300px] bg-slate-100 rounded-lg shadow-xl">
                    <span className="flex"><span className="text-5xl mr- 5"><BsBalloonHeartFill /></span><span className="ml-7 text-2xl  text-blue-500">Simplicity</span></span>
                    <p className="mx-10 text-left text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed expedita nemo sapiente quos! Libero, ut.</p>
                </div>

                <div className=" p-5 mx-10 w-[300px] bg-slate-100 rounded-lg shadow-xl">
                    <span className="flex"><span className="text-5xl mr- 5"><BsBalloonHeartFill /></span><span className="ml-7 text-2xl  text-blue-500">Simplicity</span></span>
                    <p className="mx-10 text-left text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed expedita nemo sapiente quos! Libero, ut.</p>
                </div>
            </div>

            <div className="graybox m-16 bg-slate-100 mt-50 flex justify-between items-center justify-center rounded-lg shadow-xl"> 
                <div className="flex-row">
                <div className="text-left ml-20 text-3xl pt-16 text-red-600" >Ready to switch a career?</div>
                <div className="text-left ml-20 text-2xl pt-10 text-blue-600 pb-20">Let's get started</div>
                </div>
                

                <div className="mr-20 text-3xl">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Less goooo!!!
                    </button>
                </div>

            </div>


        </div>


    )
}


export default Value;
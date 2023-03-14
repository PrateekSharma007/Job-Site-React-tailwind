import React from "react";
import { AiOutlineSearch } from "react-icons/ai"
import { BsHouse } from "react-icons/bs"
import { GoLocation } from "react-icons/go"

const Search = () => {
    return (
        <div className="searchDiv grid gp-10 bg-slate-300 p-10 rounded-3xl" >
            <form>
                <div className="firstdiv flex justify-between items-center rounded-3xl p-5 bg-slate-50 shadow-xl">
                    <div className="flex gap-2 items-center">
                        <AiOutlineSearch />
                        <input type="text" className="bg-transparent text-gray-60000 focus:outline-none w-[100%] " placeholder="Search Your Job" />

                    </div>
                    <div className="flex gap-2 items-center">
                        <BsHouse className="m-2" />
                        <input type="text" className="bg-transparent text-gray-60000 focus:outline-none w-[100%] " placeholder="Search Your Company" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <GoLocation className="m-2" />
                        <input type="text" className="bg-transparent text-gray-60000 focus:outline-none w-[100%] " placeholder="Search Your Location" />
                    </div>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Search
                    </button>
                </div>
                <div className=" flex mt-4 justify-center items-center gap-10">

                    <div>
                        <label htmlFor="relevance">Sort by: </label>
                        <select name="" id="relevance" className= "bg-slate-50 px-8 rounded-lg ">
                            <option value="">relevance</option>
                        </select>
                    </div>


                    <div>
                        <label htmlFor="relevance">Sort by: </label>
                        <select name="" id="relevance" className= "bg-slate-50 px-8 rounded-lg ">
                            <option value="">relevance</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="relevance">Sort by: </label>
                        <select name="" id="relevance" className="bg-slate-50 px-8 rounded-lg ">
                            <option value="">relevance</option>
                        </select>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Search;
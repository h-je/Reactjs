import React from "react"
import { Bookmark, Folder, Key, Trello, Users } from 'react-feather'
import { Link } from "react-router-dom"
const Nav = () => {
    return (
        <div className="flex">
            <div className="relative flex-row  auto-cols-max space-x-1  bg-[#F0A30A]  flex w-full h-14">
                <div className="items-center ml-2 flex">
                    <button className=" flex  text-white border border-solid rounded hover:bg-cyan-600  px-2 py-2 items-center mx-auto">
                        <Trello color="#fff" size={15} className=" mx-1" />

                    </button>
                </div>
                <div className="items-center ml-2 flex">
                    <Link to="/" className=" flex bg-[#009966] text-white border border-solid rounded hover:border-b-violet-600 hover:text-red-700  px-3 py-1 items-center mx-auto">
                        <Folder color="#fff" size={15} className=" mx-1" />
                        Trang chu
                    </Link>
                </div>
                <div className="items-center  flex">
                    <button className=" flex bg-[#009966] text-white border border-solid rounded hover:border-b-violet-600 hover:text-red-700  px-3 py-1 items-center mx-auto">
                        <Key color="#fff" size={15} className=" mx-1" />
                        Nhan de
                    </button>
                </div>
                <div className="items-center  flex">
                    <button className=" flex bg-[#009966] text-white border border-solid rounded hover:border-b-violet-600 hover:text-red-700  px-3 py-1 items-center mx-auto">
                        <Users color="#fff" size={15} className=" mx-1" />
                        Tac Gia
                    </button>
                </div>
                <div className="items-center   flex">
                    <button className=" flex bg-[#009966] text-white border border-solid rounded hover:border-b-violet-600 hover:text-red-700  px-3 py-1 items-center mx-auto">
                        <Bookmark color="#fff" size={15} className=" mx-1" />
                        Nha Xuat Ban
                    </button>
                </div>
                <div className="flex items-center mr-3 gap-x-2 text-white absolute top-0 right-0  ">
                    <div className="rounded-full bg-white w-9 h-9 flex  "></div>
                    <div className="rounded-full bg-white w-9 h-9 flex mr-3 my-3 "></div>

                </div>
            </div>

        </div>
    )
}
export default Nav
import React from "react"
import {Folder} from 'react-feather'
const Nav = () =>{
    return(
        <div className="relative w-full py-1">
            <div>
                <button className="absolute flex bg-[#009966] text-white border border-solid rounded hover:border-b-white  px-3 py-1 items-center mx-auto">
                    <Folder color="#fff" size={15} className=" mx-1" />
                    Trang chu
                </button>
            </div>
            <div>
                <button></button>
            </div>
        </div>
    )
}
export default Nav
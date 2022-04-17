import React from "react"
import Banner from '../assets/banner-gtvt.png'
import { User, Search } from "react-feather"
import Logo from '../assets/Logo.png'
const Header = () => {
    return (
        <div className="banner" >
            <img src={Banner} alt="" className="relative mx-auto w-full" />
            <div className="flex w-full bg-[#003366] px-2 py-2 ">
                <img src={Logo} alt="" className="flex-none" />
                <form className=" grow px-36 flex flex-col">
                    <div className="flex border-2 items-center justify-center">
                        <select name="" id="" className="w-1/5 border-none">
                            <option value="">1</option>
                            <option value="">1</option>
                            <option value="">1</option>

                        </select>
                        <div className="w-full relative ">
                            <input type="text"  placeholder="tìm kiếm tài liệu ở đây bạn " className="w-full" />
                            <button className="absolute right-0 bg-[#60A917]" type="submit" >
                                <Search color="#000"  className="item-center mr-3 " />
                            </button>

                        </div>
                    </div>
                    <a href="/" className="ml-auto text-white text-sm hover:underline mt-1" >Tim kiem nang cao</a>


                </form>
                <div className="flex flex-none items-center mr-3 gap-x-2 text-white ">
                    <button>Dang nhap</button>
                    <div className="rounded-full bg-white w-7 h-7 flex items-center justify-center">
                        <User color="#000" />
                    </div>
                </div>
            </div>
        </div>
        

    )
}
export default Header 
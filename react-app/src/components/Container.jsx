import React from 'react'
import { BookOpen } from 'react-feather'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Container = () => {
    const settings = {
        infinite: true,
        dotsClass: "slick-dots slick-thumb",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div class="grid gap-4 grid-cols-2 grid-rows-2 h-screen mt-6">
            <div className='object-cover w-full h-full overflow-hidden bg-cover '>
                <Slider {...settings}>
                    <div >
                        <img className='object-cover w-full h-full overflow-hidden bg-cover' src="https://opacthuvien.ut.edu.vn/opac/Upload/ImageCover/116/Sach_moi_t6.JPG" alt="" />
                    </div>
                    <div>
                        <img src="https://opacthuvien.ut.edu.vn/opac/Upload/ImageCover/105/BST_sach_moi_thang_4.JPG" alt="" />
                    </div>
                    <div>
                        <img src="https://opacthuvien.ut.edu.vn/opac/Upload/ImageCover/117/sach_moi_t1.JPG" alt="" /></div>                   
                </Slider>
            </div>
            <div className='grid grid-cols-3 grid-rows-2 gap-x-2 gap-y-2'>
                <div className='flex flex-col bg-slate-400 justify-center items-center cursor-pointer' onClick={() => { console.log("dong oc cho"); }}>
                    <div>
                        <BookOpen size={50} />
                    </div>
                    <span>
                        Sach truyen thong
                    </span>
                    <div>
                        (9522)
                    </div>
                </div>
                <div className='flex flex-col bg-slate-400 justify-center items-center'>
                    <div>
                        <BookOpen size={50} />
                    </div>
                    <span>
                        Sach truyen thong
                    </span>
                    <div>
                        (9522)
                    </div>
                </div>
                <div className='flex flex-col bg-slate-400 justify-center items-center'>
                    <div>
                        <BookOpen size={50} />
                    </div>
                    <span>
                        Sach truyen thong
                    </span>
                    <div>
                        (9522)
                    </div>
                </div>
                <div className='flex flex-col bg-slate-400 justify-center items-center'>
                    <div>
                        <BookOpen size={50} />
                    </div>
                    <span>
                        Sach truyen thong
                    </span>
                    <div>
                        (9522)
                    </div>
                </div>
                <div className='flex flex-col bg-slate-400 justify-center items-center'>
                    <div>
                        <BookOpen size={50} />
                    </div>
                    <span>
                        Sach truyen thong
                    </span>
                    <div>
                        (9522)
                    </div>
                </div>
                <div className='flex flex-col bg-slate-400 justify-center items-center'>
                    <div>
                        <BookOpen size={50} />
                    </div>
                    <span>
                        Sach truyen thong
                    </span>
                    <div>
                        (9522)
                    </div>
                </div>



            </div>
            <div>
                    <p className='text-sky-900 ml-1 '>GUIDE</p>
                <hr/>
            </div>
            <div>
                    <p className='text-sky-900 ml-1 '>TAI LIEU MOI NHAT</p>
                <hr/>
                <div className='flex py-1  items-center m-1 '>
                    <BookOpen  className='items-center justify-center p-1 m-1  bg-teal-400'/>
                    <a href="/">The Elements of shipping / Alan E. Branch</a>
                </div>
                <div className='flex py-1  items-center m-1 '>
                    <BookOpen  className='items-center justify-center p-1 m-1  bg-teal-400'/>
                    <a href="/">The Elements of shipping / Alan E. Branch</a>
                </div>
                <div className='flex py-1  items-center m-1 '>
                    <BookOpen  className='items-center justify-center p-1 m-1  bg-teal-400'/>
                    <a href="/">The Elements of shipping / Alan E. Branch</a>
                </div>
                <div className='flex py-1  items-center m-1 '>
                    <BookOpen  className='items-center justify-center p-1 m-1  bg-teal-400'/>
                    <a href="/">The Elements of shipping / Alan E. Branch</a>
                </div>
                <div className='flex py-1  items-center m-1 '>
                    <BookOpen  className='items-center justify-center p-1 m-1  bg-teal-400'/>
                    <a href="/">The Elements of shipping / Alan E. Branch</a>
                </div>
                <div className='flex py-1  items-center m-1 '>
                    <BookOpen  className='items-center justify-center p-1 m-1  bg-teal-400'/>
                    <a href="/">The Elements of shipping / Alan E. Branch</a>
                </div>
            </div>
        </div>
    )
}
export default Container
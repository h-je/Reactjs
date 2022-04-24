import React from 'react'
import { BookOpen } from 'react-feather'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const Container = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div class="grid gap-4 grid-cols-2 grid-rows-2 h-screen mt-6">
            <div className='object-cover w-full h-full'>
                <Slider {...settings}>
                    <div className='overflow-hidden bg-cover '   >
                        <img  src="https://opacthuvien.ut.edu.vn/opac/Upload/ImageCover/116/Sach_moi_t6.JPG" alt="" />
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                   
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
            <div>guide</div>
            <div>lastest</div>
        </div>
    )
}
export default Container
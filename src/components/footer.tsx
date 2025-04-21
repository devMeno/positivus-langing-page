import React from 'react';
import {Input} from "@/components/ui/input";

const Footer = () => {
    return (
        <div className={'bg-black px-[20px] md:px-[40px] lg:px-[60px] pt-[50px] pb-[30px] lg:py-[50px] text-white rounded-tl-[50px] rounded-tr-[50px] text-[16px] lg:text-[18px]'}>
            <div className={'w-full flex flex-col lg:flex-row justify-between items-center mb-[50px]'}>
                <div className={'mx-auto lg:mx-0 w-fit mb-[37px] lg:mb-0'}>
                    <button className={'w-[144px] md:w-[219px] h-[23.61px] md:h-[56px]'}>
                        <img src="/images/second-logo.svg" alt=""/>
                    </button>
                </div>
                <div className={'flex flex-col lg:flex-row text-center gap-[15px] lg:gap-[40px]'}>
                    <a href="">About Us</a>
                    <a href="">Services</a>
                    <a href="">Use Cases</a>
                    <a href="">Pricing</a>
                    <a href="">Blog</a>
                </div>
                <div className={'hidden lg:block'}>
                    <div className={'flex justify-between gap-[20px]'}>
                        <a href="#"><img src="/images/linkedIn.svg" alt=""/></a>
                        <a href="#"><img src="/images/facebook.svg" alt=""/></a>
                        <a href="#"><img src="/images/twitter.svg" alt=""/></a>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col lg:flex-row lg:justify-between lg:mb-[50px]'}>
                <div className={'text-center lg:text-left gap-[20px]'}>
                    <span className={'bg-[#b9ff66] px-[7px] rounded-[7px] text-black'}>Contact us:</span>
                    <div className={'mt-[27px]'}>
                        <div className={'mb-[27px]'}><span>Email: info@positivus.com</span></div>
                        <div className={'mb-[27px]'}><span>Phone: 555-567-8901</span></div>
                        <div>
                            <span>Address: 1234 Main St</span><br/>
                            <span>Moonstone City, Stardust State 12345</span>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col gap-[20px] lg:flex-row items-center p-[30px] lg:px-[40px] lg:py-[58px] w-full lg:w-fit bg-[#292A32] rounded-[14px] mt-[37px]'}>
                    <Input type="email" placeholder="Email" className={'px-[35px] h-[67px] border-solid border-white w-full lg:w-[285px] text-[16px]'} />
                    <button className={'bg-[#B9FF66] px-[35px] py-[22px] rounded-[14px] text-black text-[20px] w-full lg:w-[285px]'}>Subscribe to news</button>
                </div>
            </div>
            <div className={'block lg:hidden my-[37px]'}>
                <div className={'flex mx-auto w-fit gap-[20px]'}>
                    <a href="#"><img src="/images/linkedIn.svg" alt=""/></a>
                    <a href="#"><img src="/images/facebook.svg" alt=""/></a>
                    <a href="#"><img src="/images/twitter.svg" alt=""/></a>
                </div>
            </div>
            <div className={'text-center lg:text-left border-solid border-white border-t-[1px] pt-[50px] flex flex-col lg:flex-row gap-[20px]'}>
                <span>© 2023 Positivus. All Rights Reserved.</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    );
};

export default Footer;
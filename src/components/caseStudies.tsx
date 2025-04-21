import React from 'react';
import { Separator } from "@/components/ui/separator"

const CaseStudies = () => {
    return (
        <div className={'w-full px-[60px] py-[70px] bg-black text-white rounded-[45px] flex'}>
            <div className="flex items-center space-x-4 bg-blue-500">
                <div className={'w-[286px]'}>
                    <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p><br/>
                    <a href="#" className={'text-[#b9ff66] flex gap-[15px]'}>Learn more <img src="/images/green_arrow.svg" alt=""/></a>
                </div>
                <Separator orientation="vertical" />
                <div className={'w-[286px]'}>
                    <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p><br/>
                    <a href="#" className={'text-[#b9ff66] flex gap-[15px]'}>Learn more <img src="/images/green_arrow.svg" alt=""/></a>
                </div>
                <Separator orientation="vertical" />
                <div className={'w-[286px]'}>
                    <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p><br/>
                    <a href="#" className={'text-[#b9ff66] flex gap-[15px]'}>Learn more <img src="/images/green_arrow.svg" alt=""/></a>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
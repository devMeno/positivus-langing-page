import React from 'react';

const ServicesCard = () => {
    return (
        <div className={'relative h-[322px] lg:h-[310px] p-[50px] border-solid border-black border-t-[1px] border-l-[1px] border-r-[1px] border-b-[4px] rounded-[45px]'}
             style={{backgroundColor:'#F3F3F3'}}>
            <div className={'absolute top-[50px] left-[50px]'}>
                <div className={'text-[26px] lg:text-[30px] bg-[#b9ff66] rounded-[7px] px-[7px] font-medium max-w-[221px] w-fit'}>Search engine</div>
                <div className={'text-[26px] lg:text-[30px] bg-[#b9ff66] rounded-[7px] px-[7px] font-medium max-w-[221px] w-fit'}>optimization</div>
            </div>
            <div className={'absolute bottom-[50px] lg:top-[60px] right-[50px]'}>
                <img src="/images/service_1.svg" alt="" className={'w-[165px] lg:w-[210px] h-[129px] lg:h-[166px]'}/>
            </div>
            <div className={'absolute bottom-[50px] bottom-0 left-[50px]'}>
                <a href="#" className={'flex gap-[15px] items-center'}><div className={'size-[41px] rounded-full bg-black flex items-center'}>
                    <img src="/images/green_arrow.svg" alt="" className={'mx-auto'}/>
                </div>
                <span className={'hidden lg:block'}>Learn more</span></a>
            </div>
        </div>
    );
};

export default ServicesCard;
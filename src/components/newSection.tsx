import React from 'react';
interface NewSectionProps {
    title: string;
    description_1: string;
    description_2: string;
}

const NewSection = (props: NewSectionProps) => {
    return (
        <div className={'flex flex-col lg:flex-row items-center mx-auto lg:mx-0 text-center lg:text-left gap-[25px] lg:gap-[40px] my-[30px] lg:my-[70px]'}>
            <div className={'text-[36px] lg:text-[40px] bg-[#b9ff66] rounded-[7px] px-[7px] font-medium'}>{props.title}</div>
            <div className={'text-[16px] lg:text-[18px]'}>
                <span>{props.description_1}</span><br className={'hidden lg:block'}/>
                <span>{props.description_2}</span>
            </div>
        </div>
    );
};

export default NewSection;
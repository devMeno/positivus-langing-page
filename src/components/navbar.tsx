import React from 'react';
import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription, SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button";


const Navbar = () => {
    return (
        <div className={'w-full flex items-center justify-between py-[20px] md:py-[35px] '}>
            <button className={'w-[144px] md:w-[219px] h-[23.61px] md:h-[56px]'}>
                <img src="/images/main-logo.svg" alt=""/>
            </button>
            <div className={'lg:hidden'}>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className={'bg-white border-none w-fit hover:bg-white'}>
                            <img src="/images/icons/Burger-menu-icon.svg" alt=""/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle></SheetTitle>
                            <SheetDescription>
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex items-center w-full h-[90%]">
                            <ul className={'text-center w-full h-1/2 flex flex-col items-center justify-between'}>
                                <li>About us</li>
                                <li>Services</li>
                                <li>Use Cases</li>
                                <li>Pricing</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
            <div className={'hidden lg:block lg:w-[75%] xl:w-[60%]'}>
                <div className={'flex items-center justify-between'}>
                    <a href="#">About Us</a>
                    <a href="#">Services</a>
                    <a href="#">Use Cases</a>
                    <a href="#">Pricing</a>
                    <a href="#">Blog</a>
                    <button className={'rounded rounded-[14px] px-[35px] py-[20px] border-[1px] border-solid border-black'}>Request a quote</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
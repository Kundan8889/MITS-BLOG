import { Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai';
import react from "@vitejs/plugin-react-swc";
export default function Header(){
    return(
        <Navbar className="border-b-2">
            <Link to='/' className=" self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
                <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 rounded-lg text-white"> MITS 
                </span>
                Blog
            </Link>
            <TextInput text="text"
             placeholder="Search"
              rightIcon={AiOutlineSearch}
               className="hidden lg:inline"
            
            />
            Header</Navbar>
    )
}
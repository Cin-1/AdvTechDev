import React from 'react'


 
const Footer = () => {
    return (  
 
<footer className="footer bg-gray-800 relative pt-1 border-b-2">
    <div className="container mx-auto px-6">

        <div className="sm:flex sm:mt-4">
            <div className="mt-4 sm:mt-0 sm:w-full sm:px-10 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
                                </div>
                <div className="flex flex-col">
                    <span className="my-2"><a href="#" className="text-blue-700 text-md hover:text-blue-500">link 1</a></span>
                
                </div>
                <div className="flex flex-col">
                    <span className="my-2"><a href="#" className="text-blue-700  text-md hover:text-blue-500">link 1</a></span>
           
                </div>
            </div>
        </div>
    </div>
    <div className="container mx-auto px-4">
        <div className="mt-8 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
                <p className="text-sm text-gray-300 font-bold mb-2">
                    © 2021 
                </p>
            </div>
        </div>
    </div>
</footer>);
}

export default Footer;

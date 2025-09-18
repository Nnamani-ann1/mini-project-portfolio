import React from "react";

export default function Contact() {
    return (
        <div className="font-bold text-white flex flex-col items-center justify-center m-10" id="Contact">
            <h2 className="p6 md:text-6xl text-3xl uppercase">Contact Me</h2>

            <div className="flex flex-col gap-5">
               <input className="border-2 text-orange-600 rounded-2xl text-3xl p-3 md:w-[900px]"type="text" name="name" placeholder="Name" />
               <input className="border-2 text-orange-600 rounded-2xl text-3xl p-3 md:w-[900px]"type="text" name="email" placeholder="Email" />
               <input className="border-2 text-orange-600 rounded-2xl text-3xl p-3 md:w-[900px]"type="text" name="phone number" placeholder="Phone Number" />
               <textarea className="border-2 text-orange-600 rounded-2xl text-3xl p-3 md:w-[900px]"type="text" name="message" placeholder="Message" />
                <button className="bg-orange-600 rounded-2xl text-3xl p-3 md:w-[900px] hover:bg-orange-400">Submit</button>
            </div>
            
        </div>
    )
}


       
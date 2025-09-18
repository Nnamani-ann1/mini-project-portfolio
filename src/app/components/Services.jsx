import React from "react";
import Image from "next/image";

export default function Services() {
    return (
        <div>
            <div className="text-5xl font-bold">
                <p>I provide artistic <span className="text-orange-600">solutions</span>  to </p>
                <p>meet your business</p>
                <p>requirements</p>
            </div>

            <div className="flex justify-between my-10 gap-x-10">
                <div>
                    <Image src="/image1.webp" alt="note" width={500} height={300} />
                    <p>My services blends creativity and strategy to bring your vision to life,leaving a lasting impact</p>
                </div>
            </div>
        </div>



    )
}
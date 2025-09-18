import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ src, type, title, desc, link, cat}) {
    return (
        <div className="text-orange-600">
            <Image src={`/images/${src}.png`}  width={650} height={450} alt={title}  />
            <p className="text-xl mt-5">{type}</p>
            <h3 className="text-3xl font-bold my-3">{title}</h3>
            <p className="text-lg text-gray-600">{desc}</p>

            <div className="flex items-center justify-between">
               <p>{cat}</p>
               <p>{type}</p>
               <Link href={link} className="inline-block mt-5 text-lg text-orange-600 hover:text-orange-400">
               </Link>
            </div>
        </div>
    )
}
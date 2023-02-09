'use client';

import Image from "next/image";
import { useEffect } from "react";

interface ImageProps {
    source: string,
    link: string,
    text: string,
}

export default function ImageButton(props:ImageProps) {
    
    
    useEffect(()=>{
        console.log(props.source);
    })

    
    return (
            <a href={props.link} className="flex transition rounded-3xl w-full h-full hover:scale-90 min-w-[216px]">
                <img src={props.source} alt={"Image of " + props.text} className="rounded-3xl object-cover"/>
            </a>
    )
}
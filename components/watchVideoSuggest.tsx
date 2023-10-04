'use client'
import Style from '@/app/style/watchpage.module.css'
import { useAppContext } from "@/app/context/appContext";
import { useEffect } from 'react';
export default function VideoSuggest({ params }: { params: { watch: string } }){

  
    return(
<>
        {/* Right container start */}
        <div className={`${Style.rightContainer}`}>
          <h1>The video is now playing on right Container: {params.watch}</h1>
        </div>
        {/* Right container end */}
        </>
    )
}
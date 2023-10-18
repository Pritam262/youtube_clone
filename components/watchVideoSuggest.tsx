'use client'
import Style from '@/app/style/watchpage.module.css'
export default function VideoSuggest({ params }: { params: { watch: string } }){

  
    return(
<>
        {/* Right container start */}
        <div className={`${Style.rightContainer}`}>
          <h3>The video is now playing on right Container: {params.watch}</h3>
        </div>
        {/* Right container end */}
        </>
    )
}
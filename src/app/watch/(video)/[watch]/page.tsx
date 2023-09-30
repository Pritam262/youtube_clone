"use client";
import Style from "@/app/style/watchpage.module.css";
import Image from "next/image";
export default function page({ params }: { params: { watch: string } }) {
  return (
    <div className={`${Style.main} ${Style.flex}`}>
      <div className={`${Style.leftContainer}`}>
        <div className={Style.videoContainer}>

        </div>
        {/* Comment Container */}
        <div>
          {/* No. of comment & shorted container start*/}
          <span className={`${Style.flex} ${Style.afq24}`}>
            <span className={`${Style.flex}`}>
              <p>31</p> <p>Comments</p>
            </span>
            <span className={`${Style.flex}`}>
              <Image src="" width={50} height={50} alt="" priority />
              <p>Short by</p>
            </span>
          </span> {/* No. of comment & shorted container end*/}

          {/* Add comment*/}
          <div className={`${Style.inputComment}`}>
            <Image className={Style.userImage} src='' width={50} height={50} alt="" priority />
            <div className={Style.debs24}>
              <input className={`${Style.commentField}`} type="text" placeholder="Add your comment" />
            </div>
          </div>   {/* Add comment container end*/}
        </div>
      </div>
      <div className={`${Style.rightContainer}`}>
        <h1>The video is now playing on right Container: {params.watch}</h1>
      </div>
    </div>
  );
}

// import { FC } from "react"
// interface pageProps {
//   params: { watch: string };
// }

// const page: FC<pageProps> = ({ params })=> {
//   return <div>
//     <h1>The video is now plaing : { params.watch}</h1>
//   </div>
// }

// export default page;

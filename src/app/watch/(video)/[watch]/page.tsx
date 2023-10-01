"use client";
import Style from "@/app/style/watchpage.module.css";
import Image from "next/image";
export default function page({ params }: { params: { watch: string } }) {
  return (
    <div className={Style.container}>
      <div className={`${Style.main}`}>
        <div className={`${Style.leftContainer}`}>
          <div className={Style.videoContainer}>

          </div>
          {/* Comment Container */}
          <div>
            {/* No. of comment & shorted container start*/}
            <span className={`${Style.flex} ${Style.afq24} ${Style.at_c}`}>
              <span className={`${Style.flex} ${Style.at_c}`}>
                <p>31</p> <p className={Style.mx}>Comments</p>
              </span>
              <span className={`${Style.flex} ${Style.at_c}`}>
                <Image src="/assets/images/listIcon1.png" width={25} height={25} alt="" priority />
                <p className={Style.mx}>Short by</p>
              </span>
            </span> {/* No. of comment & shorted container end*/}

            {/* Add comment*/}
            <div className={`${Style.inputComment}`}>
              <Image className={Style.userImage} src='/assets/images/person.jpg' width={50} height={50} alt="" priority />
              <div className={Style.debs24}>
                <input className={`${Style.commentField}`} type="text" placeholder="Add your comment" />
              </div>
            </div>   {/* Add comment container end*/}

            {/* Comment show*/}
            <div className={Style.comment}>
              <Image src='/assets/images/person.jpg' className={Style.userImage} width={50} height={50} alt="" priority />
              <div className={Style.fget6}>
                <span><p className={Style.pinComment}>Pined by Studyiq IAS</p></span>
                <span className={`${Style.dyt245}`}><span className={Style.fdes45}><p className={Style.skew41}>@studyiqofficial</p> </span><p className={Style.commentTime}>1 hour ago (edited)</p></span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quos explicabo ipsam dolorem quae! Tempore repellendus reprehenderit delectus unde rerum quos enim ullam exercitationem magnam voluptatibus id, ea excepturi in!
                  Ea laboriosam tempore facere totam doloribus, quia minima? Nostrum perspiciatis quaerat officiis, laboriosam molestiae ad explicabo error. Fugit delectus nostrum molestiae tempore nulla iure impedit veniam quos quae repellendus. Fugiat.
                  Nulla at sunt atque pariatur, facere aut vitae nesciunt corrupti neque consequatur praesentium vero illo saepe obcaecati repellat? Quo, sunt. Nisi, dolores commodi ad voluptatibus beatae iusto provident ea ipsam?
                  Cumque magnam ex officia, sit iste explicabo veniam! Explicabo sunt a cum quisquam quidem natus, eius, distinctio inventore atque, corporis quas suscipit enim? Dicta, fugit dignissimos? Magnam quo sunt non.
                  Delectus saepe earum aut enim iste ex. Eveniet, quibusdam vel, adipisci animi aspernatur temporibus esse illo sed iusto quis praesentium facere alias cupiditate. Est quibusdam quis mollitia distinctio atque iusto?
                </p>
              </div>
            </div>  {/* Comment show end*/}

            {/* Comment show*/}
            <div className={Style.comment}>
              <Image src='/assets/images/person.jpg' className={Style.userImage} width={50} height={50} alt="" priority />
              <div className={Style.fget6}>

                <span className={`${Style.dyt245}`}><span ><p className={Style.skew41}>@studyiqofficial</p> </span> <p className={Style.commentTime}>1 hour ago (edited)</p></span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quos explicabo ipsam dolorem quae! Tempore repellendus reprehenderit delectus unde rerum quos enim ullam exercitationem magnam voluptatibus id, ea excepturi in!
                  Ea laboriosam tempore facere totam doloribus, quia minima? Nostrum perspiciatis quaerat officiis, laboriosam molestiae ad explicabo error. Fugit delectus nostrum molestiae tempore nulla iure impedit veniam quos quae repellendus. Fugiat.
                  Nulla at sunt atque pariatur, facere aut vitae nesciunt corrupti neque consequatur praesentium vero illo saepe obcaecati repellat? Quo, sunt. Nisi, dolores commodi ad voluptatibus beatae iusto provident ea ipsam?
                  Cumque magnam ex officia, sit iste explicabo veniam! Explicabo sunt a cum quisquam quidem natus, eius, distinctio inventore atque, corporis quas suscipit enim? Dicta, fugit dignissimos? Magnam quo sunt non.
                  Delectus saepe earum aut enim iste ex. Eveniet, quibusdam vel, adipisci animi aspernatur temporibus esse illo sed iusto quis praesentium facere alias cupiditate. Est quibusdam quis mollitia distinctio atque iusto?
                </p>
              </div>
            </div>  {/* Comment show end*/}

          </div> {/* Coomment container end */}
        </div> {/*Left container end */}

        {/* Right container start */}
        <div className={`${Style.rightContainer}`}>
          <h1>The video is now playing on right Container: {params.watch}</h1>
        </div>
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

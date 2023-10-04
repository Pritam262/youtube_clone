import Image from 'next/image'
import Style from '@/app/style/watchpage.module.css'
export default function Watchcomment(){
return(
    <>
   
          {/* Comment Container */}
          <div>
            {/* No. of comment & shorted container start*/}
            <span className={`${Style.flex} ${Style.afq24} ${Style.at_c}`}>
              <span className={`${Style.flex} ${Style.at_c}`}>
                <p className={Style.text}>31</p> <p className={`${Style.mx} ${Style.text}`}>Comments</p>
              </span>
              <span className={`${Style.flex} ${Style.at_c}`}>
                <Image src="/assets/images/listIcon1.png" width={25} height={25} alt="" priority />
                <p className={`${Style.mx} ${Style.text}`}>Short by</p>
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
                <span><p className={`${Style.pinComment} ${Style.text}`}>Pined by Studyiq IAS</p></span>
                <span className={`${Style.dyt245}`}><span className={Style.fdes45}><p className={Style.skew41}>@studyiqofficial</p> </span><p className={`${Style.commentTime} ${Style.text}`}>1 hour ago (edited)</p></span>
                <p className={Style.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quos explicabo ipsam dolorem quae! Tempore repellendus reprehenderit delectus unde rerum quos enim ullam exercitationem magnam voluptatibus id, ea excepturi in!
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

                <span className={`${Style.dyt245}`}><span ><p className={Style.skew41}>@studyiqofficial</p> </span> <p className={`${Style.commentTime} ${Style.text}`}>1 hour ago (edited)</p></span>
                <p className={Style.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quos explicabo ipsam dolorem quae! Tempore repellendus reprehenderit delectus unde rerum quos enim ullam exercitationem magnam voluptatibus id, ea excepturi in!
                  Ea laboriosam tempore facere totam doloribus, quia minima? Nostrum perspiciatis quaerat officiis, laboriosam molestiae ad explicabo error. Fugit delectus nostrum molestiae tempore nulla iure impedit veniam quos quae repellendus. Fugiat.
                  Nulla at sunt atque pariatur, facere aut vitae nesciunt corrupti neque consequatur praesentium vero illo saepe obcaecati repellat? Quo, sunt. Nisi, dolores commodi ad voluptatibus beatae iusto provident ea ipsam?
                  Cumque magnam ex officia, sit iste explicabo veniam! Explicabo sunt a cum quisquam quidem natus, eius, distinctio inventore atque, corporis quas suscipit enim? Dicta, fugit dignissimos? Magnam quo sunt non.
                  Delectus saepe earum aut enim iste ex. Eveniet, quibusdam vel, adipisci animi aspernatur temporibus esse illo sed iusto quis praesentium facere alias cupiditate. Est quibusdam quis mollitia distinctio atque iusto?
                </p>
              </div>
            </div>  {/* Comment show end*/}

          </div> {/* Coomment container end */}
          </>
)
}
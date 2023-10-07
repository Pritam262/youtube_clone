import Image from "next/image"
import Style from "@/app/style/watchComponent.module.css"
export default function WatchComponent(){
    return(
        <div className={Style.hhftrf214}>
        <div className={Style.videoContainer}>
        </div>
        {/* Video details */}
        <div>
          {/* Video title, and other stuf */}
          <div className={`${Style.flex}  ${Style.fd_c} ${Style.video_details}`}>
            {/* Video title */}
            <h2>Nira Video Song (Extended version) Takkar Tamil | Siddarth | Kartik G Krish | Nivash K Prasana</h2>
            <div className={Style.awer21}>
              {/* Channel name */}
              <div className={`${Style.channelDetails} ${Style.at_c}`}>
                <Image className={`${Style.userImage} ${Style.mr_10}`} src='/assets/images/person.jpg' width={50} height={50} alt="" priority />
                <div className={`${Style.mr_10}`}>
                  {/* Channel name */}
                  <h4>Think Music India</h4>
                  <p className={Style.text}>14.2M Subscriber</p>
                </div>
                <button className={Style.subButton}>Subcribe</button>
              </div>  {/* Channel details div end*/}
              <div className={`${Style.flex} ${Style.at_c} ${Style.optionBtn}`}>  {/* Button start*/}

                {/* Like and dislike button */}
                <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}>
                  {/* Like Button */}
                  <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10}`}>
                    <Image className={Style.mr_10} src="/assets/images/likeIcon.png" width={20} height={20} alt="" priority />
                    321K
                  </div>
                  {/* Dislike Button */}
                  <div className={`${Style.flex} ${Style.at_c} `}>
                    <Image className={Style.mr_10} src="/assets/images/dislikeIcon.png" width={20} height={20} alt="" priority />
                  </div>

                </div> {/* Like and Dislike button end*/}


                <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}> {/*Share button */}
                  <Image className={Style.mr_10} src="/assets/images/sendIcon.png" width={20} height={20} alt="" priority />
                  Share
                </div>

                <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}> {/*Download button*/}
                  <Image className={Style.mr_10} src="/assets/images/downloadIcon.png" width={20} height={20} alt="" priority />
                  Download
                </div> {/*Download button end*/}

                <div className={`${Style.flex} ${Style.at_c} ${Style.mr_10} ${Style.btn}`}> {/*Save button*/}
                  <Image className={Style.mr_10} src="/assets/images/saveIcon.png" width={20} height={20} alt="" priority />
                  Save
                </div>


              </div>
            </div>
            {/* Video description */}
            <div className={Style.videoDescription}>
              <p className={Style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aperiam eum nobis commodi non error ipsa accusamus accusantium sit dignissimos modi, tenetur ea ab incidunt a, beatae illum ipsum vitae.
                Blanditiis mollitia saepe harum asperiores repellat quos assumenda voluptatibus repellendus odit autem rerum, consequatur ipsam maxime, excepturi, ut explicabo est accusantium id! Delectus voluptatibus aliquam sunt quos, commodi veniam itaque?
                Aliquam dolor quo assumenda tempore beatae sequi impedit, incidunt nesciunt recusandae, doloribus praesentium. Eos soluta optio perspiciatis ipsam? Quisquam sed itaque enim? Deserunt quam asperiores deleniti laborum odio laboriosam. Eligendi!</p>
            </div>
          </div>
        </div>
      </div>
    )
}
import Style from '@/app/style/shortVideoCommants.module.css'
import Image from 'next/image'
export default function ShortVideoCommand({ params }: { params: { shorts: string } }){
    return (
        <div className={`${Style.container}`}>
            {/* Comment heading */}
            <div className={`${Style.commentHeading} ${Style.flex}`}>
                <p>Comments 2.8k</p>
                <div className={`${Style.flex} ${Style.df12}`}>
                    <Image src='/assets/images/listIcon.png' width={50} height={50} alt='' priority/>
                    <Image src='/assets/images/closeIcon.png' width={20} height={20} alt='' priority/>
                </div>
            </div>
            {/* Comment Container*/}
            <div className={Style.commentContainer}>
                {/* Comment */}
                <div className={Style.comment}>
                    <Image className={Style.userProfile} src='/assets/images/person.jpg' width={50} height={50} alt='' priority/>
                    <div className={Style.commentRight}>
                        {/* user name */}
                        <p>@gfsdtrg124</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores labore accusantium, repudiandae cumque nostrum minus, impedit enim obcaecati adipisci aut exercitationem incidunt dolore possimus! At ex consectetur modi voluptatem unde.</p>
                        <div className={Style.commentOption}>
                            <span className={Style.flex}>
                        <Image src='/assets/images/likeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={Style.ml_10}>1.5K</p>

                            </span>
                        <Image className={Style.ml_10} src='/assets/images/dislikeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={`${Style.ml_10}`}>Reply</p>
                        </div>
                    </div>
                </div>
                {/* Comment end */}

                                {/* Comment */}
                                <div className={Style.comment}>
                    <Image className={Style.userProfile} src='/assets/images/person.jpg' width={50} height={50} alt='' priority/>
                    <div className={Style.commentRight}>
                        {/* user name */}
                        <p>@gfsdtrg124</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores labore accusantium, repudiandae cumque nostrum minus, impedit enim obcaecati adipisci aut exercitationem incidunt dolore possimus! At ex consectetur modi voluptatem unde.</p>
                        <div className={Style.commentOption}>
                            <span className={Style.flex}>
                        <Image src='/assets/images/likeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={Style.ml_10}>1.5K</p>

                            </span>
                        <Image className={Style.ml_10} src='/assets/images/dislikeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={`${Style.ml_10}`}>Reply</p>
                        </div>
                    </div>
                </div>
                {/* Comment end */}
                                {/* Comment */}
                                <div className={Style.comment}>
                    <Image className={Style.userProfile} src='/assets/images/person.jpg' width={50} height={50} alt='' priority/>
                    <div className={Style.commentRight}>
                        {/* user name */}
                        <p>@gfsdtrg124</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores labore accusantium, repudiandae cumque nostrum minus, impedit enim obcaecati adipisci aut exercitationem incidunt dolore possimus! At ex consectetur modi voluptatem unde.</p>
                        <div className={Style.commentOption}>
                            <span className={Style.flex}>
                        <Image src='/assets/images/likeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={Style.ml_10}>1.5K</p>

                            </span>
                        <Image className={Style.ml_10} src='/assets/images/dislikeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={`${Style.ml_10}`}>Reply</p>
                        </div>
                    </div>
                </div>
                {/* Comment end */}
                                {/* Comment */}
                                <div className={Style.comment}>
                    <Image className={Style.userProfile} src='/assets/images/person.jpg' width={50} height={50} alt='' priority/>
                    <div className={Style.commentRight}>
                        {/* user name */}
                        <p>@gfsdtrg124</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores labore accusantium, repudiandae cumque nostrum minus, impedit enim obcaecati adipisci aut exercitationem incidunt dolore possimus! At ex consectetur modi voluptatem unde.</p>
                        <div className={Style.commentOption}>
                            <span className={Style.flex}>
                        <Image src='/assets/images/likeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={Style.ml_10}>1.5K</p>

                            </span>
                        <Image className={Style.ml_10} src='/assets/images/dislikeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={`${Style.ml_10}`}>Reply</p>
                        </div>
                    </div>
                </div>
                {/* Comment end */}
                                {/* Comment */}
                                <div className={Style.comment}>
                    <Image className={Style.userProfile} src='/assets/images/person.jpg' width={50} height={50} alt='' priority/>
                    <div className={Style.commentRight}>
                        {/* user name */}
                        <p>@gfsdtrg124</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores labore accusantium, repudiandae cumque nostrum minus, impedit enim obcaecati adipisci aut exercitationem incidunt dolore possimus! At ex consectetur modi voluptatem unde.</p>
                        <div className={Style.commentOption}>
                            <span className={Style.flex}>
                        <Image src='/assets/images/likeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={Style.ml_10}>1.5K</p>

                            </span>
                        <Image className={Style.ml_10} src='/assets/images/dislikeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={`${Style.ml_10}`}>Reply</p>
                        </div>
                    </div>
                </div>
                {/* Comment end */}
                                {/* Comment */}
                                <div className={Style.comment}>
                    <Image className={Style.userProfile} src='/assets/images/person.jpg' width={50} height={50} alt='' priority/>
                    <div className={Style.commentRight}>
                        {/* user name */}
                        <p>@gfsdtrg124</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores labore accusantium, repudiandae cumque nostrum minus, impedit enim obcaecati adipisci aut exercitationem incidunt dolore possimus! At ex consectetur modi voluptatem unde.</p>
                        <div className={Style.commentOption}>
                            <span className={Style.flex}>
                        <Image src='/assets/images/likeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={Style.ml_10}>1.5K</p>

                            </span>
                        <Image className={Style.ml_10} src='/assets/images/dislikeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={`${Style.ml_10}`}>Reply</p>
                        </div>
                    </div>
                </div>
                {/* Comment end */}
                                {/* Comment */}
                                <div className={Style.comment}>
                    <Image className={Style.userProfile} src='/assets/images/person.jpg' width={50} height={50} alt='' priority/>
                    <div className={Style.commentRight}>
                        {/* user name */}
                        <p>@gfsdtrg124</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores labore accusantium, repudiandae cumque nostrum minus, impedit enim obcaecati adipisci aut exercitationem incidunt dolore possimus! At ex consectetur modi voluptatem unde.</p>
                        <div className={Style.commentOption}>
                            <span className={Style.flex}>
                        <Image src='/assets/images/likeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={Style.ml_10}>1.5K</p>

                            </span>
                        <Image className={Style.ml_10} src='/assets/images/dislikeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={`${Style.ml_10}`}>Reply</p>
                        </div>
                    </div>
                </div>
                {/* Comment end */}
                                {/* Comment */}
                                <div className={Style.comment}>
                    <Image className={Style.userProfile} src='/assets/images/person.jpg' width={50} height={50} alt='' priority/>
                    <div className={Style.commentRight}>
                        {/* user name */}
                        <p>@gfsdtrg124</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores labore accusantium, repudiandae cumque nostrum minus, impedit enim obcaecati adipisci aut exercitationem incidunt dolore possimus! At ex consectetur modi voluptatem unde.</p>
                        <div className={Style.commentOption}>
                            <span className={Style.flex}>
                        <Image src='/assets/images/likeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={Style.ml_10}>1.5K</p>

                            </span>
                        <Image className={Style.ml_10} src='/assets/images/dislikeIcon.png' width={25} height={25} alt='' priority/>
                        <p className={`${Style.ml_10}`}>Reply</p>
                        </div>
                    </div>
                </div>
                {/* Comment end */}
            <h1>{params.shorts}: Video's Comments</h1>
            </div>

           
        </div>
    )
}
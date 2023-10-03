'use client'
import Style from '@/app/style/home.module.css'
import Image from 'next/image'
import HomeleftNavbar from './homeLeftNavbar'
import Link from 'next/link'
import { useAppContext } from "@/app/context/appContext";
export default function home() {
    const { isLeftNavHidden} = useAppContext();
    return (
        <div className={Style.mainContainer}>
            <HomeleftNavbar />

            <div className={`${isLeftNavHidden?Style.m_5:Style.cardContainer}`}>

                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk8379')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>



                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>



                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>


                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>



                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>



                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>


                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>



                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>



                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>



                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>



                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>


                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>


                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>


                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>



                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>



                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>



                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>



                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>


                {/* Card */}
                <div className={Style.slgd12}>
                    <div className={Style.card}>
                        <Link href={`/watch/${encodeURIComponent('jgfgk832')}`}>
                            <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
                            <div className={`${Style.flex} ${Style.videoDetails}`}>
                                <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                <div className={Style.details}>
                                    <h3>This is video title</h3>
                                    <p className={Style.content}>This is video description</p>
                                    <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>



            </div>
        </div>
    )
}
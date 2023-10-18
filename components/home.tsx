'use client'
// import Style from '@/app/style/home.module.css'
// import Image from 'next/image'
// import HomeleftNavbar from './homeLeftNavbar'
// import Link from 'next/link'
// import { useAppContext } from "@/app/context/appContext";
// export default function home() {
//     const { isLeftNavHidden, toggleLeftNav} = useAppContext();
//     return (
//         <div className={Style.mainContainer}>
//             <HomeleftNavbar />

//             <div className={`${isLeftNavHidden?Style.m_5:Style.cardContainer}`}>

//                 {/* Card */}
//                 <div className={Style.slgd12} onClick={toggleLeftNav}>
//                     <div className={Style.card}>
//                         <Link href={`/watch/${encodeURIComponent('jgfgk8379')}`}>
//                             <Image src='/assets/images/coverImage.jpg' className={Style.coverImage} width={312} height={180} alt='' priority />
//                             <div className={`${Style.flex} ${Style.videoDetails}`}>
//                                 <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
//                                 <div className={Style.details}>
//                                     <h3>This is video title</h3>
//                                     <p className={Style.content}>This is video description</p>
//                                     <span className={`${Style.content} ${Style.flex}`}><p className={Style.views}>6.7M Views</p> <p className={Style.time}>1 month ago</p></span>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }




import Style from '@/app/style/home.module.css';
import Image from 'next/image';
import HomeleftNavbar from './homeLeftNavbar';
import Link from 'next/link';
import { useAppContext } from "@/app/context/appContext";
import { useEffect, useState } from 'react';

interface Video {
    _id: string;
    user: string;
    fname: string;
    lname: string;
    title: string;
    coverImage: string;
    views: number;
    date: string;
}

export default function Home() {
    const { isLeftNavHidden, toggleLeftNav } = useAppContext();
    const [page, setPage] = useState<number>(1);
    const [videoList, setVideoList] = useState<Video[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchingData, setFetchingData] = useState(false); // Add a fetching flag

    const calculateRelativeTime = (uploadDate: Date) => {
        const currentDate = new Date();
        const timeDifference = Math.floor((currentDate.getTime() - uploadDate.getTime()) / 1000);

        if (timeDifference < 60) {
            return `${timeDifference} second${timeDifference !== 1 ? 's' : ''} ago`;
        } else if (timeDifference < 3600) {
            const minutes = Math.floor(timeDifference / 60);
            return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        } else if (timeDifference < 86400) {
            const hours = Math.floor(timeDifference / 3600);
            return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else if (timeDifference < 2592000) { // 30 days
            const days = Math.floor(timeDifference / 86400);
            return `${days} day${days !== 1 ? 's' : ''} ago`;
        } else if (timeDifference < 31536000) { // 365 days
            const months = Math.floor(timeDifference / 2592000); // Average month length
            return `${months} month${months !== 1 ? 's' : ''} ago`;
        } else {
            const years = Math.floor(timeDifference / 31536000); // Average year length
            return `${years} year${years !== 1 ? 's' : ''} ago`;
        }
    };

    const fetchData = async (newPage: number) => {
        if (fetchingData) {
            return; // Return early if data is already being fetched
        }

        setFetchingData(true);

        try {
            const response = await fetch(`http://localhost:3000/api/video/allvideo?page=${newPage}`);
            const data = await response.json();
            if (data.list && data.list.items) {
                const videos = data.list.items.map((video: { date: string | number | Date; fname: string; lname: string; user: { fname: string, lname: string; }; }) => {
                    const uploadDate = new Date(video.date);
                    video.date = calculateRelativeTime(uploadDate);
                    video.fname = video.user.fname
                    video.lname = video.user.lname
                    return video;
                });

                setTotalItems(data.list.total);
                // setVideoList((prevVideoList) => [...prevVideoList, ...videos]);
                setVideoList((prevVideoList) => [...videoList, ...videos]);
                setPage(newPage);
                setIsLoading(false)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setFetchingData(false);
        }
    };

    useEffect(() => {
        if (videoList.length === 0) {
            fetchData(page);
        }
    }, []);
    const handleScroll = () => {
        if (isLoading || fetchingData) {
            return; // Return early if data is being loaded
        }

        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

        if (scrollPercentage >= 80 && videoList.length < totalItems) {
            console.log(scrollPercentage >= 80)
            fetchData(page + 1);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [videoList, isLoading, fetchingData, page]);

    return (
        <div className={Style.mainContainer}>
            <HomeleftNavbar />


            <div className={`${isLeftNavHidden ? Style.m_5 : Style.cardContainer} ${Style.dtrm}`}>
                <div className={Style.box}>
                    {videoList.map((video) => (
                        // <div className={Style.slgd12} key={video._id} >
                            <div className={Style.card} key={video._id}>
                                <Link href={`/watch/${encodeURIComponent(video._id)}`}>

                                    <Image src={video.coverImage} className={Style.coverImage} width={312} height={180} alt='' priority />
                                    <div className={`${Style.flex} ${Style.videoDetails}`}>
                                        <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                        <div className={Style.details}>
                                            <h3 className={Style.title}>{video.title.length > 55 ? `${video.title.substring(0, 20)}...` : video.title}</h3>
                                            <p className={Style.content}>{video.fname} {video.lname}</p>
                                            <span className={`${Style.content} ${Style.flex}`}>
                                                <p className={`${Style.views} ${Style.text}`}>{video.views} Views</p>
                                                <p className={`${Style.time} ${Style.text}`}>{video.date}</p>
                                            </span>
                                        </div>
                                    </div>

                                </Link>
                            </div>
                        // </div>
                    ))}
                </div>
            {/* {isLoading ? <h1 style={{textAlign:'center'}}>Loading</h1> : ''} */}
            {isLoading ? <Image style={{margin:'auto'}} src='/assets/images/loading.gif' width={50} height={50} alt=''/> : ''}
            </div>
        </div>
    );
}
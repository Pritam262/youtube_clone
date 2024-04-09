'use client'
import Style from '@/app/style/home.module.css';
import Image from 'next/image';
import HomeleftNavbar from './homeLeftNavbar';
import Link from 'next/link';
import { useAppContext } from "@/app/context/appContext";
import { useEffect, useState } from 'react';
import { calculateRelativeTime } from '../lib/gettimestring';
import { Video } from '../utils/types';


export default function Home() {
    const { isLeftNavHidden, toggleLeftNav, serverIp } = useAppContext();
    const [page, setPage] = useState<number>(1);
    const [videoList, setVideoList] = useState<Video[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchingData, setFetchingData] = useState(false); // Add a fetching flag

    // const APPURL = `http://192.168.50.14:3000`;


    const fetchData = async (newPage: number) => {
        if (fetchingData) {
            return; // Return early if data is already being fetched
        }

        setFetchingData(true);

        try {
            const response = await fetch(`${serverIp}/api/video?page=${newPage}`, { cache: 'no-cache' });
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
            <div className={`${isLeftNavHidden? Style.mainContainer:Style.smallmainContainer}`}>
                <HomeleftNavbar />


                <div className={`${isLeftNavHidden ? Style.m_5 : Style.cardContainer} ${Style.dtrm}`}>
                    <div className={Style.box}>
                        {videoList && videoList.map((video) => (
                            // <div className={Style.slgd12} key={video._id} >
                            <div className={Style.card} key={video.id}>
                                <Link href={`/watch/${encodeURIComponent(video.id)}`}>
                                    <Image src={video.coverImage} className={Style.coverImage} width={312} height={180} alt='' blurDataURL='/assets/images/blur.avif' priority />
                                    <div className={`${Style.flex} ${Style.videoDetails}`}>
                                        <Image className={Style.channel} src='/assets/images/person.jpg' width={50} height={50} alt='' priority />
                                        <div className={Style.details}>
                                            <h3 className={Style.title}>{video.title.length > 10 ? `${video.title.substring(0, 20)}...` : video.title}</h3>
                                            <p className={Style.content}>{video.user.fname} {video.user.lname}</p>
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
                    {isLoading ? <img style={{ margin: 'auto' }} src='/assets/images/loading.gif' width={50} height={50} alt='' loading='lazy'/> : ''}
                </div>
                {isLeftNavHidden?'':<div className={Style.hdrf12}></div> }
                {/* <div className={Style.hdrf12}>fh</div> */}
            </div>
    );
}
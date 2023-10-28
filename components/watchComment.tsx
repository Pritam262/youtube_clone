'use client'
import Image from 'next/image'
import Style from '@/app/style/watchpage.module.css'
import { useEffect, useState } from 'react'
// require('dotenv').config();

// const serverIp = `http://${process.env.SERVER_IP}`;
// const port = 3000;

const URLLink = `http://192.168.50.14:3000`;
interface comment {
  id: string;
  user: string;
  fname: string;
  lname: string;
  comment: string; // Fixed typo here
  date: string;
  update: string;
  userIsOwner: boolean;
}



export default function Watchcomment({ params }: { params: { watch: string } }) {

  const [page, setPage] = useState<number>(1);
  const [commentlist, setCommentlist] = useState<comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchingData, setFetchingData] = useState(false); // Add a fetching flag
  const [totalItems, setTotalItems] = useState<number>(0);
  const [isLogin, setisLogin] = useState<boolean>(true);
  const calculateRelativeTime = (uploadDate: Date) => {

    // const currentDate = new Date();
    // const timeDifference = Math.floor((currentDate.getTime() - uploadDate.getTime()) / 1000);


    // Determine the user's time zone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // console.log(userTimeZone);

    // Convert the uploadDate to the user's time zone
    const userUploadDate = new Date(uploadDate.toLocaleString('en-US', { timeZone: userTimeZone }));

    const currentDate = new Date();
    const timeDifference = Math.floor((currentDate.getTime() - userUploadDate.getTime()) / 1000);

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
      const headers = new Headers();
      headers.append('videoid', params.watch);
      isLogin ? headers.append('auth-token', `${localStorage.getItem('auth-token')}`) : '';
      const response = await fetch(`${URLLink}/api/comment/getvideocomment?page=${page}`, {
        method: 'GET',
        headers: headers,
      });
      const data = await response.json();

      if (data && data.comments) {
        const comments = data.comments.map((comment: { date: string | number | Date; fname: string; lname: string; user: { fname: string, lname: string }; id: string }) => {
          const uploadDate = new Date(comment.date);
          comment.fname = comment.user.fname
          comment.lname = comment.user.lname
          comment.id = comment.id
          comment.date = calculateRelativeTime(uploadDate);
          return comment;
        });

        setTotalItems(data.total);
        setCommentlist((prevCommentList) => [...commentlist, ...comments]);
        setPage(newPage);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setFetchingData(false);
    }
  };

  useEffect(() => {
    if (commentlist.length === 0) {
      fetchData(page);
    }
  }, []);

  useEffect(() => {

    const authToken = localStorage.getItem('auth-token');
    setisLogin(authToken ? true : false);
    console.log(isLogin);
  }, [isLogin]);


  const handleScroll = () => {
    if (isLoading || fetchingData) {
      return; // Return early if data is being loaded
    }

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

    if (scrollPercentage >= 80 && commentlist.length < totalItems) {
      fetchData(page + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [commentlist, isLoading, fetchingData, page]);
  return (
    <>

      {/* Comment Container */}
      <div className={Style.jtder45}>
        {/* No. of comment & shorted container start*/}
        <span className={`${Style.flex} ${Style.afq24} ${Style.at_c}`}>
          <span className={`${Style.flex} ${Style.at_c}`}>
            <p className={Style.text}>{totalItems}</p> <p className={`${Style.mx} ${Style.text}`}>Comments</p>
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

        {commentlist.map((comment,index) => {
          return (
            <div key={comment.id}>

              {/* Comment show*/}
              <div className={Style.comment}>
                <Image src='/assets/images/person.jpg' className={Style.userImage} width={50} height={50} alt="" priority />
                  <div className={Style.fget6}>

                  {/* <span><p className={`${Style.pinComment} ${Style.text}`}>Pined by Studyiq IAS</p></span> */}
                  <span className={`${Style.dyt245}`}><span className={Style.fdes45}><p className={Style.skew41}>@{comment.fname}{comment.lname}</p> </span><p className={`${Style.commentTime} ${Style.text}`}>{comment.date}</p></span>
                  <p className={Style.text}>{comment.comment}</p>
                  </div>
              <h2>{comment.userIsOwner ? 'T' : "F"}</h2>
                </div>
              </div>
          )
        })}
        {isLoading ? <Image style={{ margin: 'auto' }} src='/assets/images/loading.gif' width={50} height={50} alt='' /> : ''}

      </div> {/* Coomment container end */}
    </>
  )
}
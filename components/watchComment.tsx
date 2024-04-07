'use client'
import Image from 'next/image'
import Style from '@/app/style/watchpage.module.css'
import React, { useEffect, useState } from 'react'
import { useAppContext } from "@/app/context/appContext";
// require('dotenv').config();

// const serverIp = `http://${process.env.SERVER_IP}`;
// const port = 3000;

// const URLLink = `http://192.168.50.14:3000`;

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
  const [optionId, setoptionId] = useState<string>()

  const [comment,setComment] = useState<string>('');
  // const [isLogin, setisLogin] = useState<boolean>(true);

  const { isLogin, serverIp } = useAppContext();

  // const [isLogin, setisLogin] = useState(false)
  const [show, setshow] = useState(false);
  // Calculate relative time function
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


  const addComment = async ()=>{

    try {
      
      const response = await fetch(`${serverIp}/api/comment/videocomment`,{
        method:'post',
        headers:{
          'Content-Type':'application/json',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'videoid':params.watch,
        },
        body:JSON.stringify({comment})
      });
      
      await response.json();
    } catch (error) {
      console.log(error)
    }
    }

  // Fetch Comment function
  const fetchData = async (newPage: number) => {


    if (fetchingData) {
      return; // Return early if data is already being fetched
    }

    setFetchingData(true);

    try {
      const headers = new Headers();
      headers.append('videoid', params.watch);
      // isLogin ? headers.append('auth-token', `${localStorage.getItem('auth-token')}`) : '';
      headers.append('auth-token', `${localStorage.getItem('auth-token')}`);
      const response = await fetch(`${serverIp}/api/comment/getvideocomment?page=${page}`, {
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

  // Function to toggle button option
  const toggleOption = (id: string) => {
    setoptionId(optionId === id ? '' : id);
  }
  // Detete comment
  const deleteComment = async (id: string) => {
    try {
      const headers = new Headers();
      headers.append('commentid', id);
      headers.append('auth-token', `${localStorage.getItem('auth-token')}`);
      await fetch(`${serverIp}/api/comment/deletecomment`, {
        method: 'DELETE',
        headers: headers,
      });

      // Update the totalItems count (assuming you have a state variable for it)
      setTotalItems(prevTotalItems => prevTotalItems - 1);

      // Filter out the deleted comment from the comment list
      setCommentlist(prevCommentList => prevCommentList.filter(comment => comment.id !== id));

      setoptionId('');
    } catch (error) {
      console.log('Something went wrong');
    }
  };

  // const deleteComment = async (id: string) => {
  //   try {
  //     const headers = new Headers();
  //     headers.append('commentid', id);
  //     headers.append('auth-token', `${localStorage.getItem('auth-token')}`);
  //     await fetch(`${URLLink}/api/comment/deletecomment`, {
  //       method: 'DELETE',
  //       headers: headers,
  //     });

  //     // Filter out the deleted comment from the comment list
  //     setCommentlist((prevCommentList) => prevCommentList.filter(comment => comment.id !== id));

  //     // setCommentlist((prevCommentList) => {
  //     //   const updatedCommentList = prevCommentList.filter(comment => comment.id !== id);
  //     //   console.log("Updated Comment List:", updatedCommentList); // Add this console.log
  //     //   return updatedCommentList;
  //     // });
  //     setoptionId('');
  //   } catch (error) {
  //     console.log('Something went wrong');
  //   }
  // };

  useEffect(() => {
    if (commentlist.length === 0) {
      fetchData(page);
    }
  }, []);


  // Fetch data on Scroll
  const handleScroll = () => {
    if (isLoading || fetchingData) {
      return; // Return early if data is being loaded
    }

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

    if (scrollPercentage >= 80 && commentlist.length < totalItems) {
      console.log(`Scroll Percentage: ${scrollPercentage}`);
      fetchData(page + 1);
    }
  };
// Hide the input field
const handleHiddenInput = ()=>{
  setshow((prev)=>!prev);
}
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
        {show ? <><div className={Style.drtue12}>
          {/* User details */}
          <span style={{ color: 'white', display: 'flex', flexDirection: 'column' }}><Image className={Style.userImage} src='/assets/images/person.jpg' width={50} height={50} alt="" priority /><p className={Style.text}>User Name</p></span>
          <div>
            <textarea className={Style.inputTextArea} name="comment" id="" cols={100} placeholder="Add your comment" onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=> setComment(e.target.value)} value={comment}></textarea>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'10px'}}>
              <span>Privacy policy</span>
              <div style={{display:'flex', alignItems:'center',  justifyContent:'space-between'}}>
                <button style={{padding:'10px 15px', backgroundColor:'transparent', border:'1px solid grey', borderRadius:'20px', fontSize:'15px', margin:'0 5px'}} onClick={handleHiddenInput}>Cancel</button>
                <button style={{padding:'10px 15px', backgroundColor:'transparent', border:'1px solid grey', borderRadius:'20px', fontSize:'15px', margin:'0 5px'}} onClick={addComment}>Submit</button>
              </div>
            </div>
          </div>
        </div>
        </> : <div className={`${Style.inputComment}`}>
          <Image className={Style.userImage} src='/assets/images/person.jpg' width={50} height={50} alt="" priority />
          <div className={Style.debs24} onClick={handleHiddenInput}>
            <p>Add your comment</p>
          </div>
        </div>}
        {/* Add comment container end*/}

        {commentlist.map((comment, index) => {
          // console.log(comment )
          return (
            <div key={comment.id}>

              {/* Comment show*/}
              <div className={Style.comment}>
                <Image src='/assets/images/person.jpg' className={Style.userImage} width={50} height={50} alt="" priority />
                <div className={Style.fget6}>

                  {/* <span><p className={`${Style.pinComment} ${Style.text}`}>Pined by Studyiq IAS</p></span> */}
                  <span className={`${Style.dyt245}`}><span className={Style.fdes45}><p className={Style.skew41}>@{comment.fname} {comment.lname}</p> </span><p className={`${Style.commentTime} ${Style.text}`}>{comment.date}</p></span>
                  <p className={Style.text}>{comment.comment}</p>
                </div>
                {/* Setting icon */}
                <span>{isLogin ? comment.userIsOwner ? <Image src='/assets/images/settingIcon.png' width={10} height={25} alt='' onClick={() => toggleOption(index.toString())} /> : <Image src='/assets/images/settingIcon.png' width={10} height={25} alt='' onClick={() => toggleOption(index.toString())} /> : ''}</span>
                {/* Button Option */}
                {isLogin ? comment.userIsOwner ? <div className={optionId === index.toString() ? Style.btnOption : Style.hiddenOption} id={index.toString()}>
                  <span onClick={() => deleteComment(comment.id)} className={Style.text}>Delete</span>
                  <p className={Style.text}>Edit</p>
                </div> : <div className={optionId === index.toString() ? Style.btnOption : Style.hiddenOption} id={index.toString()}>
                  <p className={Style.text}>Report</p>
                </div> : ''}
              </div>
            </div>
          )
        })}

        {isLoading ? <Image style={{ margin: 'auto' }} src='/assets/images/loading.gif' width={50} height={50} alt='' /> : ''}

      </div> {/* Coomment container end */}
    </>
  )
}
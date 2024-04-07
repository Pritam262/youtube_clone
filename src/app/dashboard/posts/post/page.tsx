'use client'
import Styles from '@/app/style/postsvideo.module.css';
import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/app/context/appContext';
import {Video} from '../../../../../utils/videodatatypes';
export default function PostPage({
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }){


    const [coverImage, setCoverImage] = useState<File | undefined>() ;
    const [videoFile, setVideoFile] = useState<File | undefined>();
    const [title, setTitle] = useState<string >( " ");
    const [description, setDescription] = useState<string >(" ");

    const {serverIp} = useAppContext();




    const editUploadVideo = async (id:String)=>{

        // if (!coverImage || !videoFile) {
        //     console.error('No file selected');
        //     return;
        // }
        const formData = new FormData();
        formData.append('coverImage', coverImage);
        formData.append('videoFile', videoFile);
        formData.append('title', title);
        formData.append('description', description);

        try {
            
            const response = await fetch(`${serverIp}/api/video/update`, {
                method:'put',
                headers:{
                    'auth-token':String(localStorage.getItem('auth-token')),
                    'videoid':String(searchParams?.id)
                },
                body:formData,
            });


            const resData = await response.json();
            console.log(resData);

        } catch (error) {
            console.log(error)
        }
        }

        const fetchVideo = async (id:string)=>{
            try {

                const response = await fetch(`${serverIp}/api/video/getvideo`, {
                    method: 'get',
                    headers: {
                        'content-type': 'application/json',
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'videoid':String(searchParams?.id)
                    }
                });
    
                const data:Video = await response.json();
                setTitle(data.title);
                setDescription(data.description);
            } catch (error) {
                console.log(error)
            }
        }

        useEffect(()=>{
            fetchVideo(String(searchParams?.id));
        },[])
    return(
        <div className={Styles.page}>
            {searchParams?.id}

            <div className={Styles.container}>


            <input type="file" name="coverImage" id="" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setCoverImage(e.target.files?.[0])}/>
            <input type="file" name="videoFile"  onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setVideoFile(e.target.files?.[0])}/>
            <input type="text" name="title" id="" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setTitle(e.target.value)} value={title}/>
            <input type="text" name="" id="" onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setDescription(e.target.value)} value={description}/>

            <button onClick={()=>editUploadVideo(String(searchParams?.id))}>Upload</button>
            </div>
        </div>
    )
}
'use client'
import Styles from "@/app/style/videoupload.module.css";

import { useAppContext } from "@/app/context/appContext";
import { useEffect, useState } from "react";
export default function Dashboard() {
    const { setisModelHidden, serverIp } = useAppContext();
    useEffect(() => {
        setisModelHidden(true)
    }, [])

    const [coverImageSelectedFile, setCoverImageSelectedFile] = useState<File | undefined>(undefined);
    const [videoFileSelectedFile, setVideoFileSelectedFile] = useState<File | undefined>(undefined);
    // const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleImageFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setCoverImageSelectedFile(file);
    };

    const handleVideoFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setVideoFileSelectedFile(file);
    };

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };
    

    const uploadFile = async ()=>{

        if (!coverImageSelectedFile || !videoFileSelectedFile) {
            console.error('No file selected');
            return;
        }


        const formData = new FormData();
        formData.append('coverImage', coverImageSelectedFile);
        formData.append('videoFile', videoFileSelectedFile);
        formData.append('title', title);
        formData.append('description', description);

  try {
            const response = await fetch(`${serverIp}/api/video/upload`, {
                method: 'POST',
                headers: {
                    'auth-token': localStorage.getItem('auth-token') || '',
                },
                body: formData,
            });
            if (response.ok) {
                // File uploaded successfully
                console.log('File uploaded successfully');
            } else {
                // Handle error
                console.error('Failed to upload file');
            }
        } catch (error) {
            console.error('Error occurred while uploading file:', error);
        }
    }
    return (
        <div className={Styles.page}>

        <h4>Dashboard page</h4>

<div className={Styles.container}>


<div className={Styles.inputFlex}>
<label htmlFor="coverImage">Thumbnail</label>

        <input type="file" name="coverImage" id="" onChange={handleImageFileChange}/>
</div>
<div className={Styles.inputFlex}>

        <label htmlFor="videoFile">Select video</label>
        <input type="file" name="videoFile" id="" onChange={handleVideoFileChange}/>
</div>
<div className={Styles.inputFlex}>

        <input type="text" name="title" id="" onChange={handleTitleChange} placeholder="Video title"/>
</div>
<div className={Styles.inputFlex}>

        <input type="text" name="description" id="" onChange={handleDescriptionChange} placeholder="Video description"/>
</div>
        <button type="button" onClick={uploadFile}>Upload</button>
</div>
        </div>
    )
}
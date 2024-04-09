export interface allVideoInterface {
    success: [
        {
            id: string,
            chanelName: string,
            user: string,
            title: string,
            description: string,
            coverImage: string,
            videoFile: string,
            date: Date,
        }
    ]
}



export interface Video {
    id: string;
    user: {
        fname: string,
        lname: string,
    }
    chanelName: string,
    title: string;
    description: string; // Fixed typo here
    coverImage: string;
    videoFile: string;
    views: number;
    date: string;
}


export interface Comment {
    id: string;
    user: string;
    fname: string;
    lname: string;
    comment: string; // Fixed typo here
    date: string;
    update: string;
    userIsOwner: boolean;
  }
  
export default function ShortVideo({ params }: { params: { video: string } }){
    return (
        <div>
            <h1>The video is now play:{params.video}</h1>
        </div>
    )
}
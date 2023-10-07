export default function ShortVideo({ params }: { params: { shorts: string } }){
    return (
        <div>
            <h1>The video is now play:{params.shorts}</h1>
        </div>
    )
}

import Style from '@/app/style/shortVideo.module.css'
export default function ShortVideo({ params }: { params: { shorts: string } }){
    return (
        <div className={`${Style.container}`}>
            <h1>Video play now: {params.shorts} </h1>
        </div>
    )
}
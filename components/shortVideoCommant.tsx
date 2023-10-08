import Style from '@/app/style/shortVideoCommants.module.css'
export default function ShortVideoCommand({ params }: { params: { shorts: string } }){
    return (
        <div className={`${Style.container}`}>
            <h1>{params.shorts}: Video's Comments</h1>
        </div>
    )
}
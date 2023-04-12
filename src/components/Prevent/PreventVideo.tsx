import Video from '@/components/Common/Video'

interface Props {
  title: string
  description: string
  youtubeId: string
}

const PreventVideo = ({ title, description, youtubeId }: Props) => {
  return (
    <article className='mt-28 flex flex-col items-center justify-center'>
      <h1 className='text-white font-bold text-3xl'>{title}</h1>

      <p className='text-[#868686] mt-6 whitespace-pre-line text-center'>
        {description}
      </p>

      <img className='mt-8 mb-11' src='/svg/arrow-down.svg' />

      <div className='h-[25rem] w-full'>
        <Video id={youtubeId} />
      </div>
    </article>
  )
}

export default PreventVideo

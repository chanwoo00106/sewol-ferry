import Video from '@/components/Common/Video'

interface Props {
  title: string
  description: string
  youtubeId: string
  reverse?: boolean
}

const Music = ({ title, description, youtubeId, reverse }: Props) => {
  return (
    <article className='text-white w-full grid grid-cols-3 gap-12'>
      {reverse && (
        <div className='h-[30rem] col-span-2'>
          <Video id={youtubeId} />
        </div>
      )}
      <div className='flex flex-col gap-6'>
        <h2 className='text-4xl font-bold flex gap-2'>
          {title} <img src='/svg/small-ribbon.svg' />
        </h2>
        <p className='whitespace-pre-line text-[#A4A4A4] font-medium'>
          {description}
        </p>
        <a
          className='flex gap-2 font-semibold'
          href={`https://www.youtube.com/watch?v=${youtubeId}`}
        >
          <img src='/svg/youtube.svg' />
          노래 들으러가기
        </a>
      </div>
      {!reverse && (
        <div className='h-[30rem] col-span-2'>
          <Video id={youtubeId} />
        </div>
      )}
    </article>
  )
}

export default Music

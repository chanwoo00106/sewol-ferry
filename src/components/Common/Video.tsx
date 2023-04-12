import YouTube from 'react-youtube'

interface Props {
  id: string
}

const Video = ({ id }: Props) => {
  return (
    <div className='w-full h-full rounded-3xl overflow-hidden'>
      <YouTube
        videoId={id}
        opts={{ width: '100%', height: '100%' }}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default Video

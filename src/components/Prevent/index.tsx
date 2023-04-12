import PreventVideo from './PreventVideo'

const PreventContent = () => {
  return (
    <section
      id='safty'
      className='bg-[#272727] mx-16 flex flex-col items-center py-20 px-10 rounded-3xl'
    >
      <img src='/svg/paper-boat.svg' />
      <p className='text-white opacity-60 font-normal text-xl mt-4'>
        앞으로 이런 일을 예방하려면
      </p>
      <h1 className='font-bold text-white text-4xl my-5'>
        이렇게 행동해야해요!
      </h1>
      <img src='/svg/zigzag.svg' />
      <div className='w-full grid grid-cols-2 gap-4'>
        <PreventVideo
          title='배에 탔을 때는 이렇게 해요~'
          description='행정 안전부에서 제작한 선박 이용시 안전
수칙 관련련 영상입니다.'
          youtubeId='N9wSzbWX-Wg'
        />

        <PreventVideo
          title='내가 탄 배가 기울어지고 있다면?!'
          description='행정 안전부에서 제작한 선박 사고시 생존
요령을 배울 수 있는 영상입니다.'
          youtubeId='vvNq2sUZj0g'
        />
      </div>
    </section>
  )
}

export default PreventContent

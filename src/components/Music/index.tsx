import Music from './Music'

const MusicContent = () => {
  return (
    <>
      <div className='px-16 flex justify-center mb-8'>
        <h1 className='text-white text-4xl font-bold max-w-6xl w-full'>
          별이된 그들 잊지 않기 위해
          <br />
          우리 노래를 부른다.
        </h1>
      </div>
      <section className="px-16 bg-[url('/svg/ribbon.svg')] bg-center bg-no-repeat h-[200vh] flex flex-col justify-evenly">
        <Music
          title='너를 보내고.'
          description='세월호 참사로 별이 된 아이들을 기억하기
위해 희생자들의 엄마ㆍ아빠가 모였다.'
          youtubeId='Y5xSlNOlHL0'
        />

        <Music
          title='천개의 바람이 되어.'
          description='세월호 참사로 별이 된 이들을 기리기 위해
제작된 노래이다.'
          youtubeId='Y5xSlNOlHL0'
          reverse
        />
      </section>
    </>
  )
}

export default MusicContent

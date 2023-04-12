const Footer = () => {
  return (
    <footer className="bg-[#303030] pt-12 pl-14 pb-20 text-white bg-[url('/svg/footer-ribbon.svg')] bg-right bg-no-repeat">
      <h3 className='mb-3'>문의</h3>
      <div className='text-[#A4A4A4] space-y-1 mb-14 text-xs'>
        <p>우) 62423 광주광역시 광산구 상무대로 312</p>
        <p>교무실 062)949-6800(근무 시간 : 평일 오전 08:30~ 오후 16:30)</p>
        <p>행정실 062)949-6806(근무 시간 : 평일 오전 08:30~ 오후 16:30)</p>
        <p>팩스 062)949-6899(평일야간, 휴일)</p>
      </div>

      <h3 className='mb-3'>제작</h3>
      <div className='text-[#A4A4A4] mb-6 text-xs'>
        <p>광주소프트웨어마이스터고등학교 학생들</p>
      </div>

      <div className='flex gap-2'>
        <a
          rel='noreferrer'
          target='_blank'
          href='https://www.instagram.com/gsmschool_official'
          className='bg-white rounded-full w-11 h-11 aspect-square flex items-center justify-center'
        >
          <img src='/png/instargram.png' />
        </a>

        <a
          rel='noreferrer'
          target='_blank'
          href='https://www.youtube.com/@user-xo5ek2hz5x'
          className='bg-white rounded-full w-11 h-11 aspect-square flex items-center justify-center'
        >
          <img src='/png/youtube.png' />
        </a>

        <a
          rel='noreferrer'
          target='_blank'
          href='http://gsm.gen.hs.kr/main/main.php'
          className='bg-white rounded-full w-11 h-11 aspect-square flex items-center justify-center'
        >
          <img src='/png/gsm.png' />
        </a>
      </div>
    </footer>
  )
}

export default Footer

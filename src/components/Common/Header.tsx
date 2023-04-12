const Header = () => {
  return (
    <header className='w-full h-20 fixed top-0 left-0 grid items-center px-16 grid-cols-3 bg-black opacity-80'>
      <img src='/svg/logo.svg' />

      <nav className='text-white opacity-70 flex justify-between'>
        <a href='#'>홈</a>
        <a href='#'>노래 감상</a>
        <a href='#'>안전 교육</a>
        <a href='#'>퀴즈 풀러가기</a>
      </nav>
    </header>
  )
}

export default Header

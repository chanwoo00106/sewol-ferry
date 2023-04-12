const Header = () => {
  return (
    <header className='w-full h-20 fixed top-0 left-0 grid items-center px-16 grid-cols-5 bg-black opacity-80'>
      <img src='/svg/logo.svg' />

      <nav className='text-white opacity-70 flex justify-between col-span-3'>
        <a href='#'>홈</a>
        <a href='#song'>노래 감상</a>
        <a href='#safty'>안전 교육</a>
        <a href='#quize'>퀴즈 풀러가기</a>
        <a href='#think'>생각해 보기</a>
      </nav>
    </header>
  )
}

export default Header

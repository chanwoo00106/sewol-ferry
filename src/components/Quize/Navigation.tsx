import useQuize from './store'

const Navigation = () => {
  const { type, changeType } = useQuize((state) => ({ ...state }))

  const setStyle = (bool: boolean) =>
    bool
      ? 'py-2 px-4 bg-[#292929] text-white font-bold text-xs rounded-3xl'
      : 'py-2 px-4 text-[#ABABAB] text-xs bg-[#515151] rounded-3xl'

  const onClick = (bool: boolean) => bool && changeType()

  return (
    <nav className='space-x-4'>
      <button
        onClick={() => onClick(type === 'safty')}
        className={setStyle(type === 'sewol')}
      >
        세월호 퀴즈
      </button>
      <button
        onClick={() => onClick(type === 'sewol')}
        className={setStyle(type === 'safty')}
      >
        안전 관련 퀴즈
      </button>
    </nav>
  )
}

export default Navigation

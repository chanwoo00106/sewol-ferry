import useQuize from './store'
import Button from '@/components/Common/Button'

const Complete = () => {
  const { answerCount, type, reset, setAnswerCount } = useQuize((state) => ({
    ...state,
  }))

  const onClick = () => {
    reset()
    setAnswerCount(0)
  }

  return (
    <div className='flex flex-col items-center h-full justify-center flex-1'>
      <p className='font-medium text-[#FFFFFF80] text-lg mb-10'>
        #{type === 'sewol' ? '세월호' : '안전 관련'}퀴즈
      </p>
      <h1 className='text-4xl font-bold text-white flex gap-2 mb-10'>
        5개의 문항 중 {answerCount}개를 맞추셨어요!
      </h1>

      <Button size='big' onClick={onClick}>
        다시하기
      </Button>
    </div>
  )
}

export default Complete

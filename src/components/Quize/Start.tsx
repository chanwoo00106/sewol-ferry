import useQuize from './store'
import Button from '@/components/Common/Button'

const Start = () => {
  const { setQuestion, type } = useQuize((state) => ({ ...state }))
  const onClick = () => setQuestion(1)

  return (
    <div className='flex flex-col items-center h-full justify-center flex-1'>
      <p className='font-medium text-[#FFFFFF80] text-lg mb-10'>
        #{type === 'sewol' ? '세월호' : '안전 관련'}퀴즈
      </p>
      <h1 className='text-4xl font-bold text-white flex gap-2 mb-4'>
        <img src='/svg/Q.svg' />
        퀴즈를 통해 다시 떠올려 보아요!
      </h1>

      <p className='text-[#FFFFFF80] text-base font-medium mb-10'>
        총 5개의 문항으로 이루어져 있어요.
      </p>

      <Button size='big' onClick={onClick}>
        시작하기
      </Button>
    </div>
  )
}

export default Start

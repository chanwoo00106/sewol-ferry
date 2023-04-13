import { useState } from 'react'
import OXButton from './OXButton'
import QuizeTitle from './QuizeTitle'
import useQuize from './store'
import Commentation from './Commentation'
import O from '@/assets/svg/O'
import X from '@/assets/svg/X'

interface Props {
  title: string
  question: number
  answer: string
  commentation: string
}

const OX = ({ title, question, answer, commentation }: Props) => {
  const [focus, setFocus] = useState<'O' | 'X' | null>(null)
  const [isShow, setIsShow] = useState<boolean>(false)
  const { setQuestion } = useQuize((state) => ({ ...state }))

  const onClick = () => {
    if (focus !== answer) return setIsShow(true)
    setQuestion(question + 1)
    setIsShow(false)
  }

  return (
    <div className='min-w-[38rem] flex-1 mx-auto flex flex-col mb-20'>
      <QuizeTitle
        isShow={isShow}
        title={title}
        question={question}
        onClick={onClick}
      />
      <div className='flex-1 flex items-center gap-4'>
        <OXButton onClick={() => setFocus('O')} focus={focus === 'O'}>
          <O color={focus === 'O' ? 'white' : undefined} />
        </OXButton>

        <OXButton onClick={() => setFocus('X')} focus={focus === 'X'}>
          <X color={focus === 'X' ? 'white' : undefined} />
        </OXButton>
      </div>

      <Commentation isShow={isShow} text={commentation} />
    </div>
  )
}

export default OX

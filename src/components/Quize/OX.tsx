import { useState } from 'react'
import OXButton from './OXButton'
import QuizeTitle from './QuizeTitle'
import useQuize from './store'
import O from '@/assets/svg/O'
import X from '@/assets/svg/X'

interface Props {
  title: string
  question: number
  answer: string
}

const OX = ({ title, question, answer }: Props) => {
  const [focus, setFocus] = useState<'O' | 'X' | null>(null)
  const { setQuestion } = useQuize((state) => ({ ...state }))

  const onClick = () => {
    if (focus !== answer) return
    setQuestion(question + 1)
  }

  return (
    <div className='min-w-[38rem] flex-1 mx-auto flex flex-col'>
      <QuizeTitle title={title} question={question} onClick={onClick} />
      <div className='flex-1 flex items-center gap-4'>
        <OXButton onClick={() => setFocus('O')} focus={focus === 'O'}>
          <O color={focus === 'O' ? 'white' : undefined} />
        </OXButton>

        <OXButton onClick={() => setFocus('X')} focus={focus === 'X'}>
          <X color={focus === 'X' ? 'white' : undefined} />
        </OXButton>
      </div>
    </div>
  )
}

export default OX

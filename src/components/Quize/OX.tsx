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
  const { setQuestion, setAnswerCount, answerCount } = useQuize((state) => ({
    ...state,
  }))
  const [isNext, setIsNext] = useState<boolean>(false)
  const onClick = () => {
    if (!isNext) setIsNext(true)
    else if (isNext) {
      if (focus === answer) setAnswerCount(answerCount + 1)
      setQuestion(question + 1)
      setIsNext(false)
    }
  }

  const onChange = (ox: 'O' | 'X' | null) => {
    if (!isNext) {
      setFocus(ox)
      setIsNext(false)
    }
  }

  return (
    <div className='min-w-[38rem] flex-1 mx-auto flex flex-col mb-20'>
      <QuizeTitle
        isNext={isNext}
        isAnswer={focus === answer}
        title={title}
        question={question}
        onClick={onClick}
      />
      <div className='flex-1 flex items-center gap-4'>
        <OXButton
          onClick={() => onChange('O')}
          focus={focus === 'O'}
          isAnswer={'O' === answer}
          isNext={isNext}
        >
          <O
            color={
              focus === 'O' && !isNext
                ? 'white'
                : isNext && 'O' !== answer
                ? '#898989'
                : undefined
            }
          />
        </OXButton>

        <OXButton
          onClick={() => onChange('X')}
          focus={focus === 'X'}
          isAnswer={'X' === answer}
          isNext={isNext}
        >
          <X
            color={
              focus === 'X' && !isNext
                ? 'white'
                : isNext && 'X' !== answer
                ? '#898989'
                : undefined
            }
          />
        </OXButton>
      </div>

      <Commentation isNext={isNext} text={commentation} />
    </div>
  )
}

export default OX

import { useState } from 'react'
import Check from './Check'
import Commentation from './Commentation'
import QuizeTitle from './QuizeTitle'
import useQuize from './store'

interface Props {
  title: string
  question: number
  questions: string[]
  description?: string
  answer: string
  commentation: string
}

const Select = ({
  title,
  question,
  questions,
  description,
  answer,
  commentation,
}: Props) => {
  const { setQuestion, answerCount, setAnswerCount } = useQuize((state) => ({
    ...state,
  }))
  const [value, setValue] = useState<string>('')
  const [isNext, setIsNext] = useState<boolean>(false)

  const onClick = () => {
    if (!isNext) setIsNext(true)
    else if (isNext) {
      if (value === answer) setAnswerCount(answerCount + 1)
      setQuestion(question + 1)
      setIsNext(false)
    }
  }

  const onSelect = (value: string) => {
    if (!isNext) {
      setValue(value)
      setIsNext(false)
    }
  }

  return (
    <div className='min-w-[38rem] flex-1 mx-auto flex flex-col'>
      <QuizeTitle
        title={title}
        question={question}
        onClick={onClick}
        isAnswer={value === answer}
        isNext={isNext}
      />

      {description && (
        <p className='font-medium text-sm text-white max-w-[38rem] mt-8'>
          {description}
        </p>
      )}

      <div className='mt-12 space-y-6 mb-20'>
        {questions.map((i, idx) => (
          <Check
            key={idx}
            problem={i}
            checked={value === i}
            onClick={() => onSelect(i)}
            idx={idx + 1}
          />
        ))}
      </div>

      <Commentation isNext={isNext} text={commentation} />
    </div>
  )
}

export default Select

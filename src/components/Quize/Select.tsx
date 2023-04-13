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
  const [isShow, setIsShow] = useState<boolean>(false)

  const onSelect = (value: string) => {
    setValue(value)
  }

  const onClick = () => {
    if (value !== answer) return setIsShow(true)
    else setQuestion(question + 1)
    if (!isShow) setAnswerCount(answerCount + 1)
    setIsShow(false)
  }

  return (
    <div className='min-w-[38rem] flex-1 mx-auto flex flex-col'>
      <QuizeTitle
        isShow={isShow}
        title={title}
        question={question}
        onClick={onClick}
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

      <Commentation isShow={isShow} text={commentation} />
    </div>
  )
}

export default Select

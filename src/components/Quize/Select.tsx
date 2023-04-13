import { useState } from 'react'
import Check from './Check'
import Commentation from './Commentation'
import QuizeTitle from './QuizeTitle'
import useQuize from './store'

interface Props {
  title: string
  question: number
  questions: string[]
  answer: string
  commentation: string
}

const Select = ({
  title,
  question,
  questions,
  answer,
  commentation,
}: Props) => {
  const { setQuestion, reset } = useQuize((state) => ({ ...state }))
  const [value, setValue] = useState<string>('')
  const [isShow, setIsShow] = useState<boolean>(false)

  const onSelect = (value: string) => {
    setValue(value)
  }

  const onClick = () => {
    if (value !== answer) return setIsShow(true)
    if (question >= 5) reset()
    else setQuestion(question + 1)
    setIsShow(false)
  }

  return (
    <div className='min-w-[38rem] flex-1 mx-auto flex flex-col'>
      <QuizeTitle title={title} question={question} onClick={onClick} />

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

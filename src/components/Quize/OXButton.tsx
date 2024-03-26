import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  focus: boolean
  onClick: () => void
  isAnswer: boolean
  isNext: boolean
}

const OXButton = ({
  children: element,
  focus,
  onClick,
  isAnswer,
  isNext,
}: Props) => {
  const OXBackgroundStyle =
    focus && !isNext
      ? 'bg-[#FDCF00]'
      : isNext && !isAnswer
      ? 'bg-[#5E5E5E]'
      : 'bg-white'
  const OXBorderStyle =
    focus && !isNext
      ? 'border-[#FDCF00]'
      : isNext && !isAnswer
      ? 'border-[#5E5E5E]'
      : isNext && isAnswer
      ? 'border-[#EE5353]'
      : 'border-white'

  return (
    <button
      onClick={onClick}
      className={`w-1/2 flex justify-center items-center aspect-video rounded-3xl ${OXBackgroundStyle} ${OXBorderStyle}`}
    >
      {element}
    </button>
  )
}

export default OXButton

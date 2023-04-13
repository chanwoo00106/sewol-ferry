import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  focus: boolean
  onClick: () => void
}

const OXButton = ({ children: element, focus, onClick }: Props) => {
  const focusStyle = focus ? 'bg-[#FDCF00]' : 'bg-white'

  return (
    <button
      onClick={onClick}
      className={`w-1/2 flex justify-center items-center aspect-video rounded-3xl ${focusStyle}`}
    >
      {element}
    </button>
  )
}

export default OXButton

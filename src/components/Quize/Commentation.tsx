interface Props {
  text: string
  isNext: boolean
}

const Commentation = ({ text, isNext }: Props) => {
  if (!isNext) return null

  return (
    <p className='text-sm font-normal text-white text-center max-w-[38rem]'>
      {text}
    </p>
  )
}

export default Commentation

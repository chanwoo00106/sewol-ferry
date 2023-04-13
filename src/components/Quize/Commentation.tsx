interface Props {
  text: string
  isShow: boolean
}

const Commentation = ({ text, isShow }: Props) => {
  if (!isShow) return null

  return (
    <p className='text-sm font-normal text-white text-center max-w-[38rem]'>
      {text}
    </p>
  )
}

export default Commentation

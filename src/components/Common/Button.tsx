interface Props {
  children: string
  onClick: () => void
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className='font-bold py-3 px-10 bg-[#FDCF00] rounded-3xl hover:bg-[#757575] transition'
    >
      {children}
    </button>
  )
}

export default Button

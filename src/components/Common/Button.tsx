interface Props {
  children: string
  onClick: () => void
  size: 'big' | 'sm'
}

const Button = ({ children, onClick, size }: Props) => {
  const sizeStyle = size === 'big' ? 'px-10 py-3' : 'px-7 py-1'

  return (
    <button
      onClick={onClick}
      className={`font-bold ${sizeStyle} bg-[#FDCF00] rounded-3xl hover:bg-[#757575] transition`}
    >
      {children}
    </button>
  )
}

export default Button

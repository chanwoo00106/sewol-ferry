interface Props {
  problem: string
  idx: number
  checked: boolean
  onClick: () => void
}

const Check = ({ idx, problem, checked, onClick }: Props) => {
  return (
    <div
      className='flex gap-3 text-white font-medium text-sm cursor-pointer'
      onClick={onClick}
    >
      <input type='checkbox' checked={checked} />
      <h3>
        {idx}. {problem}
      </h3>
    </div>
  )
}

export default Check

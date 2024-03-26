interface Props {
  problem: string
  idx: number
  checked: boolean
  onClick: () => void
  isNext: boolean
}

const Check = ({ idx, problem, checked, onClick, isNext }: Props) => {
  return (
    <div
      className='flex gap-3 text-white font-medium text-sm cursor-pointer'
      onClick={onClick}
    >
      <img src={`/svg/${checked ? isNext ? 'unabled' : 'checked' : 'unchecked'}-box.svg`}/>
      <h3>
        {idx}. {problem}
      </h3>
    </div>
  )
}

export default Check

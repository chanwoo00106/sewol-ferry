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
      <input
        type='checkbox'
        className={`w-[16px] h-[16px] rounded-md border-none cursor-pointer bg-[${isNext ? 'red' : '#bd8'}] appearance-none mt-[2px]`}
      checked={checked}
      />
      <h3>
        {idx}. {problem}
      </h3>
    </div>
  )
}

export default Check

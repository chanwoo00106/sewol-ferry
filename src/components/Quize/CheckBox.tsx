interface Props {
  checked: boolean
}

const CheckBox = ({ checked }: Props) => {
  return (
    <>
      <input
        type='checkbox'
        className='w-4 h-4 rounded-md cursor-pointer bg-gray-600 appearance-none checked:bg-yellow-400'
        checked={checked}
      />
      {checked && (
        <img src='/svg/check.svg' className='absolute ml-1 mt-[5px]' />
      )}
    </>
  )
}

export default CheckBox

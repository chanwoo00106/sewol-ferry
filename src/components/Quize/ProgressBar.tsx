interface Props {
  max: number
  current: number
}

const ProgressBar = ({ max, current }: Props) => {
  const persent = (current / max) * 100

  return (
    <div className={`w-full h-1 rounded-full bg-[#4B4B4B]`}>
      <div
        className={`bg-[#FDCF00] h-1 rounded-full transition`}
        style={{ width: `${persent}%` }}
      />
    </div>
  )
}

export default ProgressBar

interface Props {
  color?: string
}

const X = ({ color = '#EE5353' }: Props) => {
  return (
    <svg
      width='29'
      height='29'
      viewBox='0 0 29 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.79973 0.5H0.878421L11.4358 14.5L0.83252 28.5H6.70793L14.6948 17.7099H14.9702L22.9112 28.5H28.8325L18.3669 14.5L28.7407 0.5H22.9112L14.9702 11.4061H14.6948L6.79973 0.5Z'
        fill={color}
      />
    </svg>
  )
}

export default X

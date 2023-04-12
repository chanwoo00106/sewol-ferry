import { ReactNode } from 'react'
import Header from '@/components/Header'

interface Props {
  children?: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className='bg-black'>{children}</main>
      <footer />
    </>
  )
}

export default MainLayout

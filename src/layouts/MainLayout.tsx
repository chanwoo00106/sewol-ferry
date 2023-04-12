import { ReactNode } from 'react'
import Header from '@/components/Common/Header'

interface Props {
  children?: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className='mt-20'>{children}</main>
      <footer />
    </>
  )
}

export default MainLayout

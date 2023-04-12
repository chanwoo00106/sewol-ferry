import { ReactNode } from 'react'
import Header from '@/components/Common/Header'
import Footer from '@/components/Common/Footer'

interface Props {
  children?: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className='mt-20'>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout

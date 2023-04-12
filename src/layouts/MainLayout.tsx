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
      <main className='mt-20 max-w-[1280px] m-auto'>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout

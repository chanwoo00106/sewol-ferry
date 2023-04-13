import Navigation from './Navigation'
import OX from './OX'
import Start from './Start'
import useQuize from './store'
import quizeData from '@/data/quizeData.json'

const Quize = () => {
  const { question, type } = useQuize((state) => ({ ...state }))

  return (
    <section className='m-16 mt-20 p-10 bg-[#3C3C3C] rounded-3xl min-h-[37.5rem] flex flex-col'>
      {question === null && (
        <>
          <Navigation />
          <Start />
        </>
      )}

      {question !== null &&
        quizeData[type][question - 1].questionType === 'ox' && (
          <OX title={quizeData[type][question - 1].title} question={question} />
        )}
    </section>
  )
}

export default Quize

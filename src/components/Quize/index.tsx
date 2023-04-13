import Navigation from './Navigation'
import OX from './OX'
import Start from './Start'
import useQuize from './store'
import Select from './Select'
import quizeData from '@/data/quizeData.json'

const Quize = () => {
  const { question, type } = useQuize((state) => ({ ...state }))

  return (
    <section
      id='quize'
      className='m-16 mt-20 p-10 bg-[#3C3C3C] rounded-3xl min-h-[37.5rem] flex flex-col'
    >
      {question === null && (
        <>
          <Navigation />
          <Start />
        </>
      )}

      {question !== null &&
        quizeData[type][question - 1].questionType === 'ox' && (
          <OX
            title={quizeData[type][question - 1].title}
            question={question}
            answer={quizeData[type][question - 1].answer}
            commentation={quizeData[type][question - 1].commentation}
          />
        )}

      {question !== null &&
        quizeData[type][question - 1].questionType === 'select' && (
          <Select
            title={quizeData[type][question - 1].title}
            question={question}
            answer={quizeData[type][question - 1].answer}
            questions={quizeData[type][question - 1].questions as string[]}
            commentation={quizeData[type][question - 1].commentation}
          />
        )}
    </section>
  )
}

export default Quize

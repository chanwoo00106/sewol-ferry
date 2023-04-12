import MainLayout from './layouts/MainLayout'
import MainVideo from './components/Main'
import MusicContent from './components/Music'
import PreventContent from './components/Prevent'

function App() {
  return (
    <MainLayout>
      <MainVideo />
      <MusicContent />
      <PreventContent />
    </MainLayout>
  )
}

export default App

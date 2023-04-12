import MainLayout from './layouts/MainLayout'
import MainVideo from './components/MainVideo'
import MusicContent from './components/MusicContent'
import PreventContent from './components/PreventContent'

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

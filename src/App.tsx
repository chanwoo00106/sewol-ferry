import MainLayout from './layouts/MainLayout'
import MainVideo from './components/Main'
import MusicContent from './components/Music'
import PreventContent from './components/Prevent'
import Think from './components/Think'

function App() {
  return (
    <MainLayout>
      <MainVideo />
      <MusicContent />
      <PreventContent />
      <Think />
    </MainLayout>
  )
}

export default App

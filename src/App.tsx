import MainLayout from './layouts/MainLayout'
import MainVideo from './components/Main'
import MusicContent from './components/Music'
import PreventContent from './components/Prevent'
import Think from './components/Think'
import Info from './components/Info'

function App() {
  return (
    <MainLayout>
      <MainVideo />
      <MusicContent />
      <PreventContent />
      <Think />
      <Info />
    </MainLayout>
  )
}

export default App

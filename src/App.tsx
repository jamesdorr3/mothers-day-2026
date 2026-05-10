import './App.css'
import { IlianasPage } from './components/IlianasPage';
import { PattisPage } from './components/PattisPage';

function App() {
  const url = new URLSearchParams(window.location.search);
  const momInitial = url.get('m')
  const isPatti = momInitial === 'p';
  const isIliana = momInitial === 'i';

  if (isPatti) return <PattisPage />
  if (isIliana) return <IlianasPage />
  else return 'So much nothing!'
}

export default App

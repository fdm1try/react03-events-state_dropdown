import './App.css';
import { Dropdown } from './components/Dropdown';

const buttonTitle = 'Account settings';
const items = ['Profile information', 'Change password', 'Become a PRO', 'Help', 'Log out'];
  

function App() {
  return (
    <Dropdown title={buttonTitle} items={items} />
  )
}

export default App

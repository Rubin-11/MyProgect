import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UsersOwner, ManagementCompany, Admin, Main, Registraton } from './screens';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/userowner' element={<UsersOwner/>}/>
          <Route path='/managementcompany' element={<ManagementCompany/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/registration' element={<Registraton/>}/>
          <Route path='*' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
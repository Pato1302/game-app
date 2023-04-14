import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Friends } from './components/Friends';
import { FriendInfo } from './components/FriendInfo';
import { PasswordRecovery } from './components/PasswordRecovery';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path= "/home" element={<Layout/>} >
          <Route index element={
            <ProtectedRoute>
              <div>Home</div>
            </ProtectedRoute>}></Route>

          <Route path="friends" element={
            <ProtectedRoute>
              <Friends/>
            </ProtectedRoute>}>
                <Route path=":friendId" element={<FriendInfo/>}></Route>
            </Route>

        </Route>
        <Route path="/recover" element={<PasswordRecovery/>}></Route>
        <Route path="*" element={<h1>404: Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

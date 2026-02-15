import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import Detailspage from "./pages/Detailspage";
import AuthProvider from "./contexts/AuthProvider";
import { ToastContainer } from "react-toastify";

function App() {
  return (
 
   
      <BrowserRouter>
         <ToastContainer />
           <AuthProvider>
        <Routes>
           
          <Route path="/" element={<IntroPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/profilepage" element={<ProfilePage />} />
         
          <Route path="/searchpage" element={<SearchPage />} />
         
          <Route path="/detailspage/:id" element={<Detailspage />} />
        
        </Routes>
            </AuthProvider>
      </BrowserRouter>
    
  );
}

export default App;

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import Dashboard from './pages/Dashboard/Dashboard';
// import FormElements from './pages/Form/FormElements';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Reviews from './pages/Reviews';
import Queries from './pages/Queries';
// import Alerts from './pages/UiElements/Alerts';
// import Buttons from './pages/UiElements/Buttons';
import EditForm from './pages/Form/EditForm';
import EditContact from './pages/Form/EditContact';

function App() {
  const [loading, setLoading] = useState(true);

  const preloader = document.getElementById('preloader');

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = 'none';
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <p className=" text-center text-danger">Failed to lead app</p>
  ) : (
    <>

      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editForm" element={<EditForm />} />
        <Route path="/editContact" element={<EditContact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/queries" element={<Queries />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* </Router> */}
    </>
  );
}

export default App;

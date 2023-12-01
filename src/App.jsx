import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import JobsPage from "./pages/JobsPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/register";
import Userpage from "./pages/UserPage";
import JobDetails from "./pages/JobDetailPage";
import UserUpdatePage from "./pages/UserUpdatePage";
import JobAplicationPage from "./pages/JobsAplicationPage";
import CompanyDetailPage from "./pages/CompanyDetailPage";
import NavbarComponent from "./component/NavbarComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:jobId" element={<JobDetails />} />
        <Route path="/jobaplication" element={<JobAplicationPage />} />
        <Route path={"/user"} element={<Userpage />} />
        <Route path={"/userupdate"} element={<UserUpdatePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/company/:CompanyId" element={<CompanyDetailPage />} />
        {/* <Route path="/company/jobs" element={<JobListings />} />
        <Route path="/company/jobs/:jobId" element={<JobDetails />} />
        <Route path="/company/applicants" element={<ApplicantManagement />} />
        <Route
          path="/company/applicants/:applicantId"
          element={<ApplicantDetails />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';

// Public Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PricingPage from './pages/PricingPage';

// Dashboard Pages
import DashboardLayout from './pages/dashboard/DashboardLayout';
import Step1ProductInfo from './pages/dashboard/Step1ProductInfo';
import Step2ExportTarget from './pages/dashboard/Step2ExportTarget';
import Step3StylePreferences from './pages/dashboard/Step3StylePreferences';
import Step4Results from './pages/dashboard/Step4Results';
import GenerationHistory from './pages/dashboard/GenerationHistory';

// Admin Pages
import AdminLayout from './pages/admin/AdminLayout';
import AdminAnalytics from './pages/admin/AdminAnalytics';
import AdminUserManagement from './pages/admin/AdminUserManagement';
import AdminRegulationLibrary from './pages/admin/AdminRegulationLibrary';

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/pricing" element={<PricingPage />} />

      {/* User Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Step1ProductInfo />} />
        <Route path="step1" element={<Step1ProductInfo />} />
        <Route path="step2" element={<Step2ExportTarget />} />
        <Route path="step3" element={<Step3StylePreferences />} />
        <Route path="step4" element={<Step4Results />} />
        <Route path="history" element={<GenerationHistory />} />
        <Route path="settings" element={<div className="p-8 text-primary font-bold">Settings Coming Soon</div>} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminAnalytics />} />
        <Route path="users" element={<AdminUserManagement />} />
        <Route path="regulations" element={<AdminRegulationLibrary />} />
        <Route path="settings" element={<div className="p-8 text-white font-bold">Admin Settings Coming Soon</div>} />
      </Route>
    </Routes>
  );
}

export default App;

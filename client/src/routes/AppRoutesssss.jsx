import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import ProtectedRoute from './ProtectedRoute';

import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Certifications from '../pages/Certifications';
import Faq from '../pages/Faq';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsAndConditions from '../pages/TermsAndConditions';
import LegalNotice from '../pages/LegalNotice';
import NotFound from '../pages/NotFound';

import AdminLogin from '../pages/admin/AdminLogin';
import Dashboard from '../pages/admin/Dashboard';
import AdminProducts from '../pages/admin/AdminProducts';
import AdminCategories from '../pages/admin/AdminCategories';
import AdminBlogs from '../pages/admin/AdminBlogs';
import AdminCertificates from '../pages/admin/AdminCertificates';
import AdminGallery from '../pages/admin/AdminGallery';
import Leads from '../pages/admin/Leads';
import AdminSubscribers from '../pages/admin/AdminSubscribers';
import AdminSettings from '../pages/admin/AdminSettings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:slug', element: <ProductDetail /> },
      { path: 'certifications', element: <Certifications /> },
      { path: 'faq', element: <Faq /> },
      { path: 'contact', element: <Contact /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogDetail /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-and-conditions', element: <TermsAndConditions /> },
      { path: 'legal-notice', element: <LegalNotice /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  { path: '/admin/login', element: <AdminLogin /> },
  {
    path: '/admin',
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'products', element: <AdminProducts /> },
          { path: 'categories', element: <AdminCategories /> },
          { path: 'blogs', element: <AdminBlogs /> },
          { path: 'certificates', element: <AdminCertificates /> },
          { path: 'gallery', element: <AdminGallery /> },
          { path: 'leads', element: <Leads /> },
          { path: 'subscribers', element: <AdminSubscribers /> },
          { path: 'settings', element: <AdminSettings /> },
        ],
      },
    ],
  },
]);

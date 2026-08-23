import { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { LogIn } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import Sprig from '../../components/common/Sprig';
import Seo from '../../components/common/Seo';

export default function AdminLogin() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [serverError, setServerError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  if (user) {
    const from = location.state?.from?.pathname || '/admin/dashboard';
    return <Navigate to={from} replace />;
  }

  const onSubmit = async (values) => {
    setServerError('');
    try {
      await login(values.email, values.password);
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      setServerError(err.message);
    }
  };

  return (
    <>
      <Seo title="Admin Login" />
      <div className="min-h-screen flex items-center justify-center bg-forest-950 px-5">
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center mb-8">
            <Sprig className="w-10 h-10 text-gold-400 mb-3" />
            <h1 className="font-display text-2xl text-cream-100 font-medium">Admin Dashboard</h1>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="bg-cream-100 rounded-2xl p-8 shadow-lift space-y-4"
          >
            {serverError && (
              <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{serverError}</p>
            )}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-xl border border-leaf-400/30 bg-cream-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-charcoal-700 mb-1.5">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full rounded-xl border border-leaf-400/30 bg-cream-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-forest-900 text-cream-100 px-6 py-3 text-sm font-semibold hover:bg-forest-800 transition-colors disabled:opacity-60"
            >
              {isSubmitting ? 'Signing in…' : 'Sign In'}
              <LogIn size={16} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

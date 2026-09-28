
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

import { useToast } from '../../contexts/ToastContext';
import { ENQUIRY_TYPES } from '../../constants/navigation';

export default function ContactForm({ defaultEnquiryType = 'general' }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      enquiryType: defaultEnquiryType,
    },
  });

  const { showToast } = useToast();

  const onSubmit = async (values) => {
    try {
      const formData = new URLSearchParams();

      // Google Form field mapping
      formData.append('entry.79645867', values.name);
      formData.append('entry.750634594', values.phone);
      formData.append('entry.936581884', values.email);
      formData.append('entry.1612864027', values.company || '');
      formData.append('entry.965697224', values.enquiryType);
      formData.append('entry.929905259', values.message || '');

      // Submit to Google Form
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSeTrFYg1KAaMxp9q6xbPJUs1HZkD-KZNchq2Ezb10DKjUXUiw/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      );

      showToast(
        'Enquiry sent — our team will get back to you within 1 business day.'
      );

      reset({
        enquiryType: defaultEnquiryType,
      });
    } catch (err) {
      console.error('Google Form submission error:', err);

      showToast(
        'Failed to send enquiry. Please try again.',
        'error'
      );
    }
  };

  const inputClass =
    'w-full rounded-xl border border-leaf-400/30 bg-cream-100 px-4 py-3 text-sm text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-gold-500';

  const errorClass = 'text-xs text-red-600 mt-1';

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-4"
    >
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="sr-only">
            Full name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Full name *"
            className={inputClass}
            {...register('name', {
              required: 'Name is required',
            })}
          />

          {errors.name && (
            <p className={errorClass}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">
            Phone number
          </label>

          <input
            id="phone"
            type="tel"
            placeholder="Phone number *"
            className={inputClass}
            {...register('phone', {
              required: 'Phone number is required',
            })}
          />

          {errors.phone && (
            <p className={errorClass}>
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Email + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>

          <input
            id="email"
            type="email"
            placeholder="Email address *"
            className={inputClass}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Enter a valid email',
              },
            })}
          />

          {errors.email && (
            <p className={errorClass}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="sr-only">
            Company name
          </label>

          <input
            id="company"
            type="text"
            placeholder="Company name"
            className={inputClass}
            {...register('company')}
          />
        </div>
      </div>

      {/* Enquiry Type */}
      <div>
        <label htmlFor="enquiryType" className="sr-only">
          Enquiry type
        </label>

        <select
          id="enquiryType"
          className={inputClass}
          {...register('enquiryType')}
        >
          {ENQUIRY_TYPES.map((type) => (
            <option
              key={type.value}
              value={type.label}
            >
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>

        <textarea
          id="message"
          rows={4}
          placeholder="Tell us what you're looking for…"
          className={inputClass}
          {...register('message')}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center gap-2 rounded-full bg-forest-900 text-cream-100 px-7 py-3.5 text-sm font-semibold hover:bg-forest-800 transition-colors disabled:opacity-60"
      >
        {isSubmitting ? 'Sending…' : 'Send Enquiry'}

        <Send size={16} />
      </button>
    </form>
  );
}


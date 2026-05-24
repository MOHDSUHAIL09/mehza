import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .regex(/^[+\d][\d\s\-()]{7,19}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  organization: z.string().optional(),
  subject: z.string().min(3, 'Please enter a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  formType: z.string().optional(),
});

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const InquiryForm = ({ formType = 'inquiry', dark = false }) => {
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { formType },
  });

  const onSubmit = async (data) => {
    setSubmitStatus('loading');
    try {
      await axios.post(`${API_URL}/api/inquiry`, { ...data, formType });
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus(null), 6000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const labelClass = "block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-gray-400 mb-2 transition-colors duration-500";

const inputClass = (field) => `
  w-full px-5 py-4 rounded-xl font-medium text-sm transition-all duration-300 outline-none
  /* Light Mode Input Layout Colors */
  bg-slate-50 text-slate-900 border border-slate-200 placeholder-slate-400 focus:bg-white focus:border-[#0072FF]
  /* Dark Mode Input Layout Colors */
  dark:bg-white/[0.03] dark:text-white dark:border-white/10 dark:placeholder-gray-500 dark:focus:bg-[#0A0F1C]/40 dark:focus:border-[#00C6FF]
  ${errors[field] ? 'border-red-400 dark:border-red-400/80 focus:border-red-400' : ''}
`;

  // const inputClass = (field) =>
  //   `w-full rounded-xl border px-5 py-4 bg-white/[0.05] backdrop-blur-md border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-300 ${
  //     errors[field] ? 'border-red-500/50 text-red-200' : ''
  //   }`;

  // const labelClass = `block text-sm font-semibold mb-2 text-white/70 ml-1`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5 relative z-10">
    <input type="hidden" {...register('formType')} value={formType} />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <label htmlFor="name" className={labelClass}>Full Name <span className="text-red-500 dark:text-red-400">*</span></label>
        <input id="name" type="text" placeholder="John Smith" className={inputClass('name')} {...register('name')} />
        {errors.name && <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 transition-colors duration-500">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email Address <span className="text-red-500 dark:text-red-400">*</span></label>
        <input id="email" type="email" placeholder="john@company.com" className={inputClass('email')} {...register('email')} />
        {errors.email && <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 transition-colors duration-500">{errors.email.message}</p>}
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div>
        <label htmlFor="phone" className={labelClass}>Phone Number</label>
        <input id="phone" type="tel" placeholder="+91 98765 43210" className={inputClass('phone')} {...register('phone')} />
        {errors.phone && <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 transition-colors duration-500">{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="organization" className={labelClass}>Organization</label>
        <input id="organization" type="text" placeholder="Your School / Company" className={inputClass('organization')} {...register('organization')} />
      </div>
    </div>

    <div>
      <label htmlFor="subject" className={labelClass}>Subject <span className="text-red-500 dark:text-red-400">*</span></label>
      <input id="subject" type="text" placeholder="What would you like to discuss?" className={inputClass('subject')} {...register('subject')} />
      {errors.subject && <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 transition-colors duration-500">{errors.subject.message}</p>}
    </div>

    <div>
      <label htmlFor="message" className={labelClass}>Message <span className="text-red-500 dark:text-red-400">*</span></label>
      <textarea
        id="message"
        rows={5}
        placeholder="Tell us about your requirements..."
        className={`${inputClass('message')} resize-none`}
        {...register('message')}
      />
      {errors.message && <p className="mt-1.5 text-xs text-red-500 dark:text-red-400 transition-colors duration-500">{errors.message.message}</p>}
    </div>

    <AnimatePresence mode="wait">
      {/* 🔴 Success Alert Layout Box handles background colors adaptively */}
      {submitStatus === 'success' && (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800/40 text-green-700 dark:text-green-400 text-sm transition-colors duration-500"
        >
          <span className="text-lg">className</span>
          <span>Thank you! Your inquiry has been sent. We'll get back to you within 24 hours.</span>
        </motion.div>
      )}
      
      {/* 🔴 Error Alert Layout Box handles background colors adaptively */}
      {submitStatus === 'error' && (
        <motion.div
          key="error"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/40 text-red-700 dark:text-red-400 text-sm transition-colors duration-500"
        >
          <span className="text-lg">⚠️</span>
          <span>Something went wrong. Please try again or email us directly.</span>
        </motion.div>
      )}
    </AnimatePresence>

    <motion.button
      type="submit"
      disabled={submitStatus === 'loading'}
      whileHover={{ scale: submitStatus !== 'loading' ? 1.01 : 1 }}
      whileTap={{ scale: 0.98 }}
      className="w-full flowing-gradient-bg text-white rounded-xl font-bold py-4 shadow-[0_10px_20px_-10px_rgba(0,114,255,0.5)] transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-4"
    >
      {submitStatus === 'loading' ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
          </svg>
          <span>Transmitting...</span>
        </span>
      ) : (
        <span>Send Message →</span>
      )}
    </motion.button>
  </form>
  );
};

export default InquiryForm;

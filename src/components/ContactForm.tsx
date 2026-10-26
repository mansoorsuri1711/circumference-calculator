'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CtaButton from '@/components/CtaButton';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setFormSubmitted(true);
    reset();

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="rounded-2xl border border-ink/10 bg-white/90 p-6 shadow-sm md:p-8">
      <h2 className="mb-6 text-center font-display text-2xl font-bold text-ink">Send Us a Message</h2>

      {formSubmitted ? (
        <div className="mb-6 rounded-xl border border-teal/30 bg-teal/10 p-4 text-center text-ink">
          <p>Thank you for your message. We&apos;ll get back to you soon!</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink/80">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            className={`calc-input ${errors.name ? 'border-coral' : ''}`}
            placeholder="Alex Student"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-coral-deep">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink/80">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`calc-input ${errors.email ? 'border-coral' : ''}`}
            placeholder="alex@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-coral-deep">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="mb-1 block text-sm font-medium text-ink/80">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className={`calc-input ${errors.subject ? 'border-coral' : ''}`}
            placeholder="Question about the calculator"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-coral-deep">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-ink/80">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className={`calc-input ${errors.message ? 'border-coral' : ''}`}
            placeholder="How can we help?"
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-coral-deep">{errors.message.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <CtaButton as="button" type="submit" icon="mail" ariaLabel="Send message">
            SEND MESSAGE
          </CtaButton>
        </div>
      </form>
    </div>
  );
}

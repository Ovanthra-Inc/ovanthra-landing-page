'use client';

import { Mail } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FORM_CONFIG, ERROR_MESSAGES, SUCCESS_MESSAGES } from '@/config/constants';

export default function Newsletter() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const validateEmail = (email: string): boolean => {
    return FORM_CONFIG.VALIDATION.EMAIL_REGEX.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Validation
    if (!formData.name.trim()) {
      setError(ERROR_MESSAGES.FORM.REQUIRED_FIELD);
      return;
    }
    if (
      formData.name.length < FORM_CONFIG.VALIDATION.MIN_NAME_LENGTH ||
      formData.name.length > FORM_CONFIG.VALIDATION.MAX_NAME_LENGTH
    ) {
      setError(ERROR_MESSAGES.FORM.INVALID_NAME);
      return;
    }
    if (!validateEmail(formData.email)) {
      setError(ERROR_MESSAGES.FORM.INVALID_EMAIL);
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) =>
        setTimeout(resolve, FORM_CONFIG.TIMEOUTS.SUBMISSION_DELAY)
      );
      setFormData({ name: '', email: '' });
      setSuccess(true);
      setTimeout(
        () => setSuccess(false),
        FORM_CONFIG.TIMEOUTS.SUCCESS_MESSAGE_DURATION
      );
    } catch {
      setError(ERROR_MESSAGES.FORM.SUBMISSION_ERROR);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto border border-gray-200 rounded-lg bg-white p-12 shadow-sm">
          <div className="flex justify-center mb-8">
            <Mail className="w-16 h-16 text-orange-500 stroke-[1.5]" />
          </div>

          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Subscribe to newsletter
          </h2>

          <p className="text-center text-gray-600 mb-10 text-lg">
            The best text style you can find on themeforest.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
                {SUCCESS_MESSAGES.FORM.NEWSLETTER_SUBSCRIBE}
              </div>
            )}
            <Input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
              required
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all disabled:opacity-50"
            />

            <Input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
              required
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all disabled:opacity-50"
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-4 text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105 disabled:opacity-50"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe For Updates'}
            </Button>
          </form>

          <p className="text-center text-gray-500 text-sm">
            *Don&apos;t Worry! We hate SPAM as much as you do!
          </p>
        </div>
      </div>
    </section>
  );
}

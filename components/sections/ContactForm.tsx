'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="contact_comp padding-section-medium">
      <div className="padding-global">
        <div className="container-large">
          <div className="contact-form-row">
            {/* Contact Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact_thumbnail_wr"
            >
              <img
                src="/images/photos/contact-form.avif"
                loading="lazy"
                alt="Female Employee Connecting on phone"
                className="thumbnail_fit"
              />
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact_form_comp max-width-custom1"
            >
              <div className="title-small">Business consulting</div>
              <div className="padding-bottom padding-xsmall"></div>
              <h2>Get in touch</h2>
              <div className="padding-bottom padding-custom1"></div>

              <div className="form_wr padding-bottom w-form">
                <form
                  onSubmit={handleSubmit}
                  className="form_inner-container"
                >
                  {/* First Row: First Name & Last Name */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">
                        First name
                      </label>
                      <input
                        className="form-field w-input"
                        maxLength={256}
                        name="firstName"
                        placeholder="First name"
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">
                        Last name
                      </label>
                      <input
                        className="form-field w-input"
                        maxLength={256}
                        name="lastName"
                        placeholder="Last name"
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Second Row: Phone & Email */}
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Your phone
                      </label>
                      <input
                        className="form-field w-input"
                        maxLength={256}
                        name="phone"
                        placeholder="Your phone"
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Your email
                      </label>
                      <input
                        className="form-field w-input"
                        maxLength={256}
                        name="email"
                        placeholder="Your email"
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      className="form-field w-input"
                      maxLength={256}
                      name="subject"
                      placeholder="Example Text"
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Your message
                    </label>
                    <textarea
                      placeholder="Your Message"
                      maxLength={5000}
                      id="message"
                      name="message"
                      className="form-field is-text-area w-input"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="w-layout-vflex form_submit_wr">
                    <input
                      type="submit"
                      disabled={isSubmitting}
                      className="button is-submit w-button"
                      value={isSubmitting ? 'Please wait...' : 'Send message'}
                    />
                  </div>
                </form>

                {/* Success Message */}
                {isSuccess && (
                  <div className="form_message-success w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                )}

                {/* Error Message */}
                {isError && (
                  <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


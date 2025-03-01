// src/pages/ContactPage.tsx
import React, { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  fullName: string;
  subject: string;
  email: string;
  body: string;
}

interface FormErrors {
  fullName?: string;
  subject?: string;
  email?: string;
  body?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    subject: '',
    email: '',
    body: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validateForm = (): boolean => {
    let tempErrors: FormErrors = {};
    let isValid = true;

    if (formData.fullName.length < 3) {
      tempErrors.fullName = "Full name must be at least 3 characters";
      isValid = false;
    }

    if (formData.subject.length < 3) {
      tempErrors.subject = "Subject must be at least 3 characters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (formData.body.length < 3) {
      tempErrors.body = "Message must be at least 3 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        subject: '',
        email: '',
        body: ''
      });
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      {isSubmitted && (
        <div>
          <p>Thank you for your message! We'll get back to you soon.</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p>{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p>{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="body">Message</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
          ></textarea>
          {errors.body && <p>{errors.body}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
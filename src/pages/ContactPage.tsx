// src/pages/ContactPage.tsx
import React, { useState, FormEvent, ChangeEvent } from 'react';
import styled from 'styled-components';

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

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.hasError ? '#dc3545' : '#ced4da'};
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#dc3545' : '#80bdff'};
    box-shadow: ${props => props.hasError 
      ? '0 0 0 0.2rem rgba(220, 53, 69, 0.25)' 
      : '0 0 0 0.2rem rgba(0, 123, 255, 0.25)'};
  }
`;

const TextArea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.hasError ? '#dc3545' : '#ced4da'};
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#dc3545' : '#80bdff'};
    box-shadow: ${props => props.hasError 
      ? '0 0 0 0.2rem rgba(220, 53, 69, 0.25)' 
      : '0 0 0 0.2rem rgba(0, 123, 255, 0.25)'};
  }
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  
  &:hover {
    background-color: #0069d9;
  }
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    subject: '',
    email: '',
    body: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

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
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitted(true);
        setIsSubmitting(false);
        setFormData({
          fullName: '',
          subject: '',
          email: '',
          body: ''
        });
      }, 1000);
    }
  };

  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      
      {isSubmitted && (
        <SuccessMessage>
          <p>Thank you for your message! We'll get back to you soon.</p>
        </SuccessMessage>
      )}
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            hasError={!!errors.fullName}
          />
          {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            hasError={!!errors.subject}
          />
          {errors.subject && <ErrorMessage>{errors.subject}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            hasError={!!errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="body">Message</Label>
          <TextArea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            hasError={!!errors.body}
          ></TextArea>
          {errors.body && <ErrorMessage>{errors.body}</ErrorMessage>}
        </FormGroup>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </SubmitButton>
      </form>
    </ContactContainer>
  );
};

export default ContactPage;
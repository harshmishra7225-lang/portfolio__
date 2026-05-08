"use client";

import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter at least 2 characters.";
  }

  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.subject.trim().length < 3) {
    errors.subject = "Please add a short subject.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Please write a message with at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const errors = useMemo(() => validate(values), [values]);

  const updateValue = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });

    if (Object.keys(errors).length > 0) {
      return;
    }

    // Connect this branch to a server action, API route, or email provider when ready.
    setSubmitted(true);
    setValues(initialValues);
    setTouched({});
  };

  return (
    <Card className="p-6 sm:p-8">
      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field
            id="name"
            label="Name"
            value={values.name}
            error={touched.name ? errors.name : undefined}
            placeholder="Your full name"
            onBlur={() => setTouched((current) => ({ ...current, name: true }))}
            onChange={(value) => updateValue("name", value)}
          />
          <Field
            id="email"
            label="Email"
            value={values.email}
            error={touched.email ? errors.email : undefined}
            placeholder="you@example.com"
            type="email"
            onBlur={() => setTouched((current) => ({ ...current, email: true }))}
            onChange={(value) => updateValue("email", value)}
          />
        </div>

        <Field
          id="subject"
          label="Subject"
          value={values.subject}
          error={touched.subject ? errors.subject : undefined}
          placeholder="Project, collaboration, or opportunity"
          onBlur={() => setTouched((current) => ({ ...current, subject: true }))}
          onChange={(value) => updateValue("subject", value)}
        />

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-charcoal">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={values.message}
            placeholder="Tell me a little about what you have in mind..."
            aria-invalid={Boolean(touched.message && errors.message)}
            aria-describedby={touched.message && errors.message ? "message-error" : undefined}
            onBlur={() => setTouched((current) => ({ ...current, message: true }))}
            onChange={(event) => updateValue("message", event.target.value)}
            className="focus-ring mt-2 min-h-40 w-full resize-y rounded-[8px] border border-ink/12 bg-white px-4 py-3 text-charcoal shadow-sm transition placeholder:text-charcoal/38 focus:border-teal"
          />
          {touched.message && errors.message ? (
            <p id="message-error" className="mt-2 text-sm font-medium text-clay">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit">Send Message</Button>
          {submitted ? (
            <p className="text-sm font-medium text-forest" role="status">
              Your message is ready. Please use the email link while direct delivery is connected.
            </p>
          ) : null}
        </div>
      </form>
    </Card>
  );
}

type FieldProps = {
  id: keyof FormValues;
  label: string;
  value: string;
  error?: string;
  placeholder: string;
  type?: string;
  onBlur: () => void;
  onChange: (value: string) => void;
};

function Field({
  id,
  label,
  value,
  error,
  placeholder,
  type = "text",
  onBlur,
  onChange
}: FieldProps) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-charcoal">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        className="focus-ring mt-2 h-12 w-full rounded-[8px] border border-ink/12 bg-white px-4 text-charcoal shadow-sm transition placeholder:text-charcoal/38 focus:border-teal"
      />
      {error ? (
        <p id={errorId} className="mt-2 text-sm font-medium text-clay">
          {error}
        </p>
      ) : null}
    </div>
  );
}

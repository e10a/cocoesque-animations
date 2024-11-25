import { useState } from "react";
import { createClient } from "contentful-management";
import { styled } from "@linaria/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
  max-width: var(--space-128);
  margin: 0 auto;
  padding: 0 var(--space-4);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  position: relative;
  z-index: 1;
`;
const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--space-80);
  margin: 0 auto;
  gap: var(--space-2);
`;
const FieldLabelSrOnly = styled.label`
  clip: rect(0, 0, 0, 0);
  border-width: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    to: "Ellen",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [submissionStatusTitle, setSubmissionStatusTitle] = useState("");

  const client = createClient({
    accessToken: import.meta.env
      .VITE_APP_CONTENTFUL_CONTENT_MANAGEMENT_ACCESS_TOKEN, // Content Management API Access Token
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      to: "Ellen",
    });
    setSubmissionStatusTitle("");
    setSubmissionStatus("");
    setSubmitted(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const space = await client.getSpace(
        import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID
      );
      const environment = await space.getEnvironment("master");

      // Create a new entry in the 'FormSubmission' content type
      const entry = await environment.createEntry("contactFormSubmissions", {
        fields: {
          name: {
            "en-US": formData.name,
          },
          email: {
            "en-US": formData.email,
          },
          message: {
            "en-US": formData.message,
          },
          to: {
            "en-US": formData.to,
          },
        },
      });

      // Optionally, publish the entry
      await entry.publish();
      setSubmissionStatusTitle("Thank You!");
      setSubmissionStatus("Your message has been sent");
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatusTitle("Oh no...");
      setSubmissionStatus(
        "There was an error submitting the form. Please try again later."
      );
      setSubmitted(true);
    }
    setIsSubmitting(false);
  };

  return (
    <Container>
      {!submitted && (
        <Form onSubmit={handleSubmit}>
          <FormInner>
            <div>
              <FieldLabelSrOnly>Message:</FieldLabelSrOnly>
              <textarea
                placeholder="Type your message here..."
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                style={{ minHeight: "var(--space-48)" }}
              ></textarea>
            </div>
            <div>
              <FieldLabelSrOnly>Name:</FieldLabelSrOnly>
              <input
                className="form-control-field"
                placeholder="Your name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <FieldLabelSrOnly>Email:</FieldLabelSrOnly>
              <input
                className="form-control-field"
                placeholder="Email address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </FormInner>

          <button
            disabled={isSubmitting}
            type="submit"
            className="button button-transparent-white button-xl"
          >
            {isSubmitting && "Submitting..."}
            {!isSubmitting && "Submit"}
          </button>
        </Form>
      )}

      <div
        className={`bg-white/90 backdrop-blur-lg transition-opacity isolate duration-500 rounded-lg shadow-md ${submitted ? "h-full opacity-100" : "h-0 opacity-0"
          }`}
      >
        {submitted && (
          <div className="flex flex-col items-center justify-center p-8 gap-4 h-full">
            <header className="flex flex-col items-center">
              <h3>{submissionStatusTitle}</h3>
              <p>{submissionStatus}</p>
            </header>

            <button
              onClick={handleResetForm}
              className="button button--primary"
            >
              Send another message
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

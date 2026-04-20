const BREVO_API_KEY = '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';
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

interface EmailData {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  sender?: { name: string; email: string };
}

export const sendEmail = async (data: EmailData) => {
  const payload = {
    sender: data.sender || {
      name: 'Scientific Alerts',
      email: 'noreply@scientificalerts.com'
    },
    to: data.to,
    subject: data.subject,
    htmlContent: data.htmlContent,
  };

  try {
    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Failed to send email: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const sendContactEmail = async (formData: { name: string; email: string; subject?: string; message: string }) => {
  const subject = formData.subject ? `Contact: ${formData.subject}` : 'New Contact Form Submission';
  const htmlContent = `
    <html>
      <head></head>
      <body>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        ${formData.subject ? `<p><strong>Subject:</strong> ${formData.subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      </body>
    </html>
  `;

  return sendEmail({
    to: [{ email: 'contact@scientificalerts.com', name: 'Scientific Alerts Team' }],
    subject,
    htmlContent,
  });
};

export const sendSubscribeEmail = async (email: string) => {
  const htmlContent = `
    <html>
      <head></head>
      <body>
        <h2>New Newsletter Subscription</h2>
        <p>A new user has subscribed to the newsletter:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>Please add this email to your mailing list.</p>
      </body>
    </html>
  `;

  return sendEmail({
    to: [{ email: 'contact@scientificalerts.com', name: 'Scientific Alerts Team' }],
    subject: 'New Newsletter Subscription',
    htmlContent,
  });
};
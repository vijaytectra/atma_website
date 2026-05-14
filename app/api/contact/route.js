import nodemailer from "nodemailer";

export async function POST(request) {
  const { firstName, lastName, email, mobile, message } = await request.json();

  // Create Zoho Mail transporter (using same credentials)
  // const transporter = nodemailer.createTransport({
  //   host: process.env.ZOHO_MAIL_HOST,
  //   port: parseInt(process.env.ZOHO_MAIL_PORT),
  //   secure: process.env.ZOHO_MAIL_SECURE === "true",
  //   auth: {
  //     user: process.env.GMAIL_USER}>`,,
  //     pass: process.env.ZOHO_MAIL_PASSWORD,
  //   },
  // });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // Email content for user
  const userMailOptions = {
    from: `ATMA Contact <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "Thank You for Contacting ATMA",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #1a365d;">Thank You for Contacting Us, ${firstName}!</h1>
        
        <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p>We've received your message and will get back to you soon.</p>
          <p><strong>Your Message:</strong></p>
          <p style="background-color: #edf2f7; padding: 10px; border-radius: 4px;">${message}</p>
        </div>
        
        <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 0.9em; color: #718096;">
          <p>If you have any urgent inquiries, please contact us at <a href="mailto:Atmausapresident@gmail.com" style="color: #3182ce;">Atmausapresident@gmail.com</a></p>
          <p>© ${new Date().getFullYear()} American Tamil Medical Association. All rights reserved.</p>
        </div>
      </div>
    `,
  };

  // Email content for president
  const presidentMailOptions = {
    from: `ATMA Contact <${process.env.GMAIL_USER}>`,
    to: "Atmausapresident@gmail.com",
    subject: `New Contact Form Submission: ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #1a365d;">New Contact Form Submission</h1>
        
        <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #edf2f7; padding: 10px; border-radius: 4px;">${message}</p>
          <p><strong>Submission Date:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
        
        <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 0.9em; color: #718096;">
          <p>This email was automatically generated from the ATMA contact form.</p>
        </div>
      </div>
    `,
  };

  try {
    // Send both emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(presidentMailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email via Zoho:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

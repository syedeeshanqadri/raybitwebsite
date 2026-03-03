import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, contact, service, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
     user: process.env.EMAIL_USER,
     pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`, // must match auth
      to: "qadri.eeshan@gmail.com", // your inbox
      replyTo: email, // visitor email
      subject: `New Appointment Request - ${service}`,
      html: `
          <h3>New Appointment Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact:</strong> ${contact}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Nodemailer error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message || "Unknown error" }),
      { status: 500 }
    );
  }
}

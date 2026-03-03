import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, contact, service, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "erzahidkhan101@gmail.com",
      pass: "knuqvmcozgzrbttz",
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact" <erzahidkhan101@gmail.com>`, // must match auth
      to: "syedeeshanqadri@gmail.com", // your inbox
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

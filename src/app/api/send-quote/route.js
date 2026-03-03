import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, contact, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "erzahidkhan101@gmail.com", // your Gmail
      pass: "knuqvmcozgzrbttz", // your app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Quote Request" <erzahidkhan101@gmail.com>`,
      to: "syedeeshanqadri@gmail.com", // your inbox
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <h3>New Quote Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Project Details:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500 }
    );
  }
}

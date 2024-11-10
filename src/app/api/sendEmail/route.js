import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message, subject } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
    //   host: "smtpro.zoho.in",
    //   port: 465,
    //   secure: true,
      auth: {
        user: "rcnoubissi@gmail.com",
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    const mailOption = {
      from: "rcnoubissi@gmail.com",
      to: "rcnoubissi@gmail.com",
      subject: "Nouveau message de votre portfolio",
      html: `
        <h3>Hello Eric N., Tu as un nouveau message</h3>
        <li> Nom: ${name}</li>
        <li> Email: ${email}</li>
        <li> Objet: ${subject}</li>
        <li> message: ${message}</li> 
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}

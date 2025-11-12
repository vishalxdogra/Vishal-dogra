import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 🧩 Validate Input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // 💾 Save message to Supabase (via Prisma)
    const newContact = await prisma.contact.create({
      data: { name, email, message },
    });

    // 📧 Configure Nodemailer (Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 🎨 Elegant Black & Gold HTML Template
    const htmlTemplate = `
      <div style="
        background-color: #0E0E0E;
        color: #E8E6E3;
        font-family: 'Inter', sans-serif;
        padding: 2rem;
        border-radius: 12px;
        border: 1px solid rgba(191, 167, 111, 0.3);
        max-width: 600px;
        margin: auto;
      ">
        <h2 style="color: #BFA76F; text-align:center; margin-bottom: 1rem;">
          ✨ New Contact Message ✨
        </h2>

        <p style="font-size: 16px; line-height: 1.6;">
          <strong style="color: #BFA76F;">Name:</strong> ${name}<br />
          <strong style="color: #BFA76F;">Email:</strong> ${email}
        </p>

        <div style="
          background-color: #141414;
          border-left: 3px solid #BFA76F;
          padding: 1rem;
          margin-top: 1.5rem;
          border-radius: 8px;
        ">
          <p style="white-space: pre-line; font-size: 15px; color: #E8E6E3;">
            ${message}
          </p>
        </div>

        <hr style="border: none; border-top: 1px solid rgba(191, 167, 111, 0.2); margin: 2rem 0;" />

        <p style="font-size: 13px; text-align:center; color: #BFA76F;">
          Sent from your <strong>Vishal's</strong> portfolio ✨
        </p>
      </div>
    `;

    // 💌 Email Configuration
    const mailOptions = {
      from: `"Vishal's Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `📩 New Message from ${name}`,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

console.log("🔍 DATABASE_URL:", process.env.DATABASE_URL);
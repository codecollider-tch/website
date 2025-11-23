import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";

const { RESEND_TO_EMAIL, RESEND_FROM_EMAIL, RESEND_API_KEY } = process.env;

const resend = new Resend(RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    console.log("=== Contact Form API Called ===");

    const body = await request.json();
    const { firstName, lastName, phone, email, subject, message } = body;

    console.log("Received data:", {
      firstName,
      lastName,
      phone,
      email,
      subject,
      messageLength: message?.length,
    });

    // Validate required fields
    if (!email || !subject || !message) {
      console.error("Validation failed: Missing required fields");
      return NextResponse.json(
        { error: "Email, subject, and message are required" },
        { status: 400 }
      );
    }

    if (!RESEND_FROM_EMAIL || !RESEND_TO_EMAIL || !RESEND_API_KEY) {
      console.error("Environment variables missing");
      return NextResponse.json(
        { error: "RESEND_FROM_EMAIL, RESEND_TO_EMAIL, and RESEND_API_KEY are required" },
        { status: 500 }
      );
    }

    // Parse email recipients (support comma-separated emails)
    const toEmails = RESEND_TO_EMAIL.split(",").map((email) => email.trim());

    // Send email using Resend
    // IMPORTANT: 'from' must be a verified domain in Resend, not the user's email
    const emailPayload = {
      from: RESEND_FROM_EMAIL,
      to: toEmails, // Array of email addresses
      replyTo: email, // User's email for reply
      subject: `[Contact Form] ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const response = await resend.emails.send(emailPayload);

    // Check if Resend returned an error
    if (response.error) {
      console.error("Resend API error:", response.error);
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: response.error.message,
          resendError: response.error,
        },
        { status: response.error.statusCode || 500 }
      );
    }

    console.log("Email sent successfully:", response.data);

    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    console.error("Contact form error details:", {
      error,
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
    });

    return NextResponse.json(
      {
        error: "Failed to send message",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

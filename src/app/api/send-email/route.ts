import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Separate function to save lead to external API
async function saveLeadToAPI(name: string, email: string, phone: string, subject: string, moveFrom: string, moveTo: string, message: string, status: string, channel: string, whatsapp: string, owner: string) {
  try {
    const leadsRes = await fetch("https://app.miraculoussoft.com/api/public/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.LEADS_KEY!,
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        subject,
        moveFrom,
        moveTo,
        message,
        status : "new",
        channel : "website",
        whatsapp : phone,
        owner : name
      }),
    });

    if (!leadsRes.ok) {
      const errorText = await leadsRes.text();
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch {
        errorData = { message: errorText || `API returned status ${leadsRes.status}` };
      }
      console.error("Leads API error:", leadsRes.status, errorData);
      return false;
    }

    console.log("Lead saved successfully to API");
    return true;
  } catch (error) {
    console.error("Save lead error:", error);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const {
      formType,
      name,
      email,
      phone,
      service,
      moveFrom,
      moveTo,
      moveDate,
      message,
      status,
      channel,
      whatsapp,
      owner,
    } = await req.json();

    const isMovingForm =
      formType === "moving" || (!!moveFrom && !!moveTo && formType !== "contact");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    if (isMovingForm) {
      if (!name || !email || !phone || !service || !moveFrom || !moveTo) {
        return NextResponse.json(
          { success: false, error: "Missing required moving form fields" },
          { status: 400 }
        );
      }

      const leadMessage = [
        `Move From: ${moveFrom}`,
        `Move To: ${moveTo}`,
        moveDate ? `Move Date: ${moveDate}` : null,
        `Service: ${service}`,
      ]
        .filter(Boolean)
        .join("\n");

      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`,
        replyTo: email,
        to: process.env.SEND_TO,
        subject: "New Moving Quote Request",
        html: `<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
              <table cellpadding="10" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
                <tr style="background-color: #372aac; color: #ffffff;">
                  <td colspan="2" style="text-align: center; font-size: 20px; font-weight: bold;">
                    New Moving Quote Request
                  </td>
                </tr>
                <tr>
                  <td style="font-weight: bold; width: 150px;">Name:</td>
                  <td>${name}</td>
                </tr>
                <tr style="background-color: #f2f2f2;">
                  <td style="font-weight: bold;">Email:</td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Phone:</td>
                  <td>${phone}</td>
                </tr>
                <tr style="background-color: #f2f2f2;">
                  <td style="font-weight: bold;">Service:</td>
                  <td>${service}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Move From:</td>
                  <td>${moveFrom}</td>
                </tr>
                <tr style="background-color: #f2f2f2;">
                  <td style="font-weight: bold;">Move To:</td>
                  <td>${moveTo}</td>
                </tr>
                ${
                  moveDate
                    ? `<tr>
                  <td style="font-weight: bold;">Move Date:</td>
                  <td>${moveDate}</td>
                </tr>`
                    : ""
                }
              </table>
              <p style="text-align:center; color:#555; font-size:12px; margin-top:15px;">
                This message was sent from your website moving quote form.
              </p>
            </div>`,
      });

      if (phone && service) {
        saveLeadToAPI(
          name,
          email,
          phone,
          service,
          moveFrom,
          moveTo,
          leadMessage,
          status,
          channel,
          whatsapp,
          owner
        ).catch((err) => {
          console.error("Background lead save failed:", err);
        });
      }

      return NextResponse.json({ success: true });
    }

    // Contact form
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.SEND_TO,
      subject: "New Inquiry via Contact Form",
      html: `<div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
              <table cellpadding="10" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
                <tr style="background-color: #372aac; color: #ffffff;">
                  <td colspan="2" style="text-align: center; font-size: 20px; font-weight: bold;">
                    New Inquiry via Contact Form
                  </td>
                </tr>
                <tr>
                  <td style="font-weight: bold; width: 150px;">Name:</td>
                  <td>${name}</td>
                </tr>
                <tr style="background-color: #f2f2f2;">
                  <td style="font-weight: bold;">Email:</td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Phone:</td>
                  <td>${phone}</td>
                </tr>
                <tr style="background-color: #f2f2f2;">
                  <td style="font-weight: bold;">Service:</td>
                  <td>${service || "Not specified"}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Message:</td>
                  <td>${message}</td>
                </tr>
              </table>
              <p style="text-align:center; color:#555; font-size:12px; margin-top:15px;">
                This message was sent from your website contact form.
              </p>
            </div>`,
    });

    if (phone && service) {
      saveLeadToAPI(
        name,
        email,
        phone,
        service,
        moveFrom || "",
        moveTo || "",
        message,
        status,
        channel,
        whatsapp,
        owner
      ).catch((err) => {
        console.error("Background lead save failed:", err);
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}

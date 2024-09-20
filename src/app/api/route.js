import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the JSON body
    // console.log("Parsed request body:", body);

    if (req.headers.get("authorization") !== "Q4n2ql2nqnZVlRlqwv") {
      return new Response(JSON.stringify({ status: "Unauthorized" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    const transporter = nodemailer.createTransport({
      port: process.env.SMTP_PORT,
      host: process.env.SMTP_HOST,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      secure: false,
      tls: {
        rejectUnauthorized: false // This will allow self-signed certificates
      }
    });

    const mailData = {
      from: process.env.SMTP_USER,
      to: "drevilemailtest@gmail.com", //send to church email
      //   bcc: "usmanasifdev@gmail.com",
      replyTo: body.email,
      subject: `New Contact Message from the Main Page`,
      html: `
        <div><strong>First Name:</strong> ${body.firstName}</div>
        <br/>
        <div><strong>Last Name:</strong> ${body.lastName}</div>
        <br/>
        <div><strong>Email Address:</strong> ${body.email}</div>
        <br/>
        <div><strong>Message:</strong> ${body.message}</div>
        <br/>
        <div>This Email was sent from a contact form on the Main Page</div>`
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, function (err, info) {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log("Email sent:", info);
          resolve(info);
        }
      });
    });

    return new Response(JSON.stringify({ status: "OK" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (err) {
    console.error("Error in processing request:", err);
    return new NextResponse("Failed to send message.", { status: 500 });
    // return new Response(JSON.stringify({ status: "Internal Server Error", error: err.message }), {
    //   status: 500,
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });
  }
}

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: xxxxxxxxx,
    pass: xxxxxxxxxxx,
  },
});

const sendEmail = async (to, subject, otp,htmldata) => {
  const mailOptions = {
    from: '"WAST RALLY" <----mailid---->', // Custom name with email
    to: to, // Recipient's email address
    subject: subject, // Email subject
    text: otp, // Email body (could be OTP or other content)
    html:htmldata
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    if (info.response.includes("OK")) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;

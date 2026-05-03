const sendEmail = require("../utils/sendEmail");

exports.emailSender = async (req, res) => {
  const { email } = req.body;

  try {
    await sendEmail({
      to: email,
      subject: "Welcome to Our App 🎉",
      html: "<h2>Hello!</h2><p>Thanks for joining us.</p>",
    });

    res.status(200).json({ success: true, message: "Email sent" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Email failed" });
  }
};

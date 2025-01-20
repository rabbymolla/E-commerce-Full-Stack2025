const nodemailer = require("nodemailer");

const sendVerifideEmail = async (email, name, url) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "rabby16139@gmail.com",
      pass: "mbfg dgvs xbjt qqar",
    },
    timeout: 200000,
  });

  const info = await transporter.sendMail({
    from: `"My-Facebook" ${"rabby16139@gmail.com"}`, // sender address
    to: email, // list of receivers
    subject: "This is your Veryfication",
    html: `<!DOCTYPE html>
<html>
  <head>
    <title>OTP Verification</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif">
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td style="padding: 10px 0 30px 0">
          <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="600"
            style="border-collapse: collapse"
          >
            <tr>
              <td
                align="center"
                bgcolor="#70bbd9"
                style="
                  padding: 40px 0 30px 0;
                  color: #ffffff;
                  font-size: 28px;
                  font-weight: bold;
                "
              >
                OTP Verification
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="color: #153643; font-size: 24px; text-transform: capitalize">
                      <b>Hi ${name},,,</b>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        padding: 20px 0 30px 0;
                        color: #153643;
                        font-size: 16px;
                        line-height: 26px;
                        text-align: justify;
                      "
                    >
                      Use the following One-Time Password (OTP) to complete your
                      transaction. The OTP is valid for 10 minutes.
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding: 20px 0">
                      <span
                        style="
                          display: inline-block;
                          padding: 15px 25px;
                          font-size: 24px;
                          color: #ffffff;
                          background-color: #70bbd9;
                          border-radius: 5px;
                        "
                      >
                        ${url}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        padding: 30px 0 0 0;
                        color: #153643;
                        font-size: 16px;
                        line-height: 26px;
                        text-align: justify;
                      "
                    >
                      If you did not request this, please ignore this email.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td bgcolor="#70bbd9" style="padding: 30px 30px 30px 30px">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="color: #ffffff; font-size: 14px" width="75%">
                      &reg; My-Facebook, 2024<br />
                      All rights reserved.
                    </td>
                    <td align="right" width="25%">
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="font-size: 12px; font-weight: bold">
                            <a href="#" style="color: #ffffff"> Unsubscribe </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>  
    `,
  });
};

module.exports = sendVerifideEmail;

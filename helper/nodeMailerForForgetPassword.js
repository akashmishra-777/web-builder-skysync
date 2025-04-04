const nm = require("nodemailer");


const transporter = nm.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: "root00skysync@gmail.com",
        pass: process.env.APP_PASSWORD,
    },
});

async function sendMail(to,resetLink) {
    try {
       


        const mailOptions = {
            from: '"SkySync Support" <support00skysync@gmail.com>',
            to: to,
            subject: 'Reset Your SkySync Password',
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <title>Reset Your SkySync Password</title>
                <style>
                  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
                  
                  body {
                    font-family: 'Poppins', sans-serif;
                    background-color: #f7f9fc;
                    margin: 0;
                    padding: 0;
                    color: #333;
                  }
                  
                  .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(55, 132, 255, 0.1);
                  }
                  
                  .header {
                    background: linear-gradient(135deg, #3784FF 0%, #2a67d5 100%);
                    padding: 30px;
                    text-align: center;
                    animation: gradientShift 8s ease infinite;
                    background-size: 200% 200%;
                  }
                  
                  @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                  }
                  
                  .logo {
                    height: 40px;
                    margin-bottom: 15px;
                    transition: transform 0.3s ease;
                  }
                  
                  .logo:hover {
                    transform: scale(1.05);
                  }
                  
                  h1 {
                    color: white;
                    margin: 0;
                    font-weight: 600;
                    font-size: 24px;
                  }
                  
                  .content {
                    padding: 30px;
                  }
                  
                  p {
                    line-height: 1.6;
                    margin-bottom: 20px;
                    font-size: 15px;
                  }
                  
                  .button {
                    display: inline-block;
                    background-color: #3784FF;
                    color: white !important;
                    text-decoration: none;
                    padding: 12px 30px;
                    border-radius: 30px;
                    font-weight: 500;
                    margin: 20px 0;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(55, 132, 255, 0.3);
                  }
                  
                  .button:hover {
                    background-color: #2a67d5;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(55, 132, 255, 0.4);
                  }
                  
                  .footer {
                    text-align: center;
                    padding: 20px;
                    background-color: #f1f5fe;
                    color: #666;
                    font-size: 13px;
                  }
                  
                  .token {
                    background-color: #f1f5fe;
                    padding: 15px;
                    border-radius: 6px;
                    text-align: center;
                    margin: 20px 0;
                    font-family: monospace;
                    font-size: 16px;
                    color: #3784FF;
                    word-break: break-all;
                  }
                  
                  .divider {
                    height: 1px;
                    background-color: #e0e6ed;
                    margin: 25px 0;
                  }
                  
                  .animate-in {
                    animation: fadeInUp 0.6s ease-out;
                  }
                  
                  @keyframes fadeInUp {
                    from {
                      opacity: 0;
                      transform: translateY(20px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                  
                  .security-note {
                    background-color: #fff8e6;
                    border-left: 4px solid #ffc107;
                    padding: 15px;
                    margin: 20px 0;
                    border-radius: 0 4px 4px 0;
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  
                  
                  <div class="content">
                    <div class="animate-in">
                      <p>Hello,</p>
                      <p>We received a request to reset your SkySync account password. Click the button below to reset it:</p>
                      
                      <div style="text-align: center;">
                        <a href="${resetLink}" class="button">Reset Password</a>
                      </div>
                      
                      <p>If you didn't request this, please ignore this email or contact support if you have questions.</p>
                      
                      <div class="divider"></div>
                      
                      <div class="security-note">
                        <p><strong>Security tip:</strong> This link will expire in 1 hour and can only be used once. Never share your password or this link with anyone.</p>
                      </div>
                      
                      <p>Alternatively, you can copy and paste this link into your browser:</p>
                      <div class="token">${resetLink}</div>
                    </div>
                  </div>
                  
                  <div class="footer">
                    <p>&copy; ${new Date().getFullYear()} SkySync. All rights reserved.</p>
                  </div>
                </div>
              </body>
              </html>
            `
          };


        // Send mail and wrap the callback in a Promise
        const info = await transporter.sendMail(
            mailOptions
        );
        
        console.log("Email sent:", info.messageId);
        return { success: true, messageId: info.messageId };
        
    } catch (error) {
        // Properly handle the error without trying to stringify circular structures
        console.error("Error sending email:", error.message);
        return error.message
    }
}

module.exports = sendMail;
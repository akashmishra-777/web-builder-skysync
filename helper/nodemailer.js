const nm = require("nodemailer");




const transporter = nm.createTransport({
  service:"gmail",
  auth:{
    user: "root00skysync@gmail.com",
    pass: process.env.APP_PASSWORD,
  }
})





async function sendMail(to,accountVerificationUrl) {
    try {
        const mailOptionsForPromotionalMails = {
            from: '"SkySync Web Builder" <root00skysync@gmail.com>',
            to: to,
            subject: "🚀 Create Stunning Websites in Minutes with AI!",
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>SkySync AI Website Builder</title>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
                <style>
                    /* Base Styles */
                    body {
                        font-family: 'Poppins', sans-serif;
                        background-color: #f8faff;
                        margin: 0;
                        padding: 0;
                        color: #2a2d3e;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background: white;
                        border-radius: 16px;
                        overflow: hidden;
                        box-shadow: 0 10px 30px rgba(47, 141, 255, 0.1);
                    }
                    
                    /* Animations */
                    @keyframes float {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    
                    /* Header */
                    .header {
                        background: linear-gradient(135deg, #2F8DFF 0%, #6C63FF 100%);
                        padding: 40px 30px;
                        text-align: center;
                        color: white;
                    }
                    .logo {
                        width: 150px;
                        margin-bottom: 20px;
                        animation: fadeIn 0.8s ease-out;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 28px;
                        font-weight: 700;
                        animation: fadeIn 1s ease-out;
                    }
                    
                    /* Content */
                    .content {
                        padding: 30px;
                    }
                    .feature-card {
                        background: #f8faff;
                        border-radius: 12px;
                        padding: 20px;
                        margin-bottom: 20px;
                        display: flex;
                        align-items: center;
                        transition: all 0.3s ease;
                        border-left: 4px solid #2F8DFF;
                    }
                    .feature-card:hover {
                        transform: translateX(5px);
                        box-shadow: 0 5px 15px rgba(47, 141, 255, 0.1);
                    }
                    .feature-icon {
                        width: 40px;
                        margin-right: 15px;
                        animation: float 3s ease-in-out infinite;
                    }
                    
                    /* CTA Button */
                    .cta-button {
                        display: inline-block;
                        background: linear-gradient(135deg, #2F8DFF 0%, #6C63FF 100%);
                        color: white !important;
                        text-decoration: none;
                        padding: 16px 32px;
                        border-radius: 50px;
                        font-weight: 600;
                        margin: 25px 0;
                        text-align: center;
                        box-shadow: 0 10px 20px rgba(47, 141, 255, 0.3);
                        transition: all 0.3s ease;
                        animation: pulse 2s infinite;
                    }
                    .cta-button:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 15px 25px rgba(47, 141, 255, 0.4);
                    }
                    @keyframes pulse {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                        100% { transform: scale(1); }
                    }
                    
                    /* Footer */
                    .footer {
                        text-align: center;
                        padding: 20px;
                        background: #f0f4ff;
                        color: #6c757d;
                        font-size: 14px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    
                    
                    <div class="content">
                        <p style="font-size: 16px; line-height: 1.6;">Hi there,</p>
                        <p style="font-size: 16px; line-height: 1.6;">Our AI just helped <strong>so many people to</strong> create beautiful websites this week. Here's what you can do with SkySync:</p>
                        
                        <div class="feature-card">
                            <img src="https://cdn-icons-png.flaticon.com/512/2933/2933245.png" class="feature-icon" alt="AI Magic">
                            <div>
                                <h3 style="margin: 0 0 5px 0;">AI-Powered Design</h3>
                                <p style="margin: 0; color: #6c757d;">Describe your vision and watch our AI generate stunning designs</p>
                            </div>
                        </div>
                        
                        <div class="feature-card">
                            <img src="https://cdn-icons-png.flaticon.com/512/3024/3024559.png" class="feature-icon" alt="No Code">
                            <div>
                                <h3 style="margin: 0 0 5px 0;">Zero Coding Needed</h3>
                                <p style="margin: 0; color: #6c757d;">Drag-and-drop interface makes building effortless</p>
                            </div>
                        </div>
                        
                        <div class="feature-card">
                            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" class="feature-icon" alt="Responsive">
                            <div>
                                <h3 style="margin: 0 0 5px 0;">Perfectly Responsive</h3>
                                <p style="margin: 0; color: #6c757d;">Looks great on all devices automatically</p>
                            </div>
                        </div>
                        
                        <div style="text-align: center; margin: 40px 0;">
                            <a href="https://web-builder.skysync.in" class="cta-button">Start Building Free →</a>
                            <p style="font-size: 14px; color: #6c757d;">No credit card required • Enjoy your free trial.</p>
                        </div>
                        
                        <p style="font-size: 16px; line-height: 1.6;">Join thousands of creators who launched their websites in minutes, not weeks!</p>
                        <p style="font-size: 16px; line-height: 1.6;">Happy building,<br><strong>The SkySync Team</strong></p>
                    </div>
                    
                    <div class="footer">
                        <p>© ${new Date().getFullYear()} SkySync. All rights reserved.</p>
                        
                        
                    </div>
                </div>
            </body>
            </html>
            `,
            text: `Build Your Dream Website with AI\n\nHi there,\n\nOur AI just helped so many users create beautiful websites this week. Here's what you can do with SkySync:\n\n✨ AI-Powered Design: Describe your vision and watch our AI generate stunning designs\n\n🖱️ Zero Coding Needed: Your simple text prompt makes building effortless\n\n📱 Perfectly Responsive: Looks great on all devices automatically\n\nStart your free trial today:\nhttps://web-builder.skysync.in/get-started\n\nNo credit card required • Enjoy your free tier.\n\nHappy building,\nThe SkySync Team\n\n---\n© ${new Date().getFullYear()} SkySync AI. All rights reserved.\nUnsubscribe: https://web-builder.skysync.in`,
            headers: {
                'X-Entity-Ref-ID': 'promo-001',
                'List-Unsubscribe': '<https://web-builder.skysync.in>, <mailto:support00skysync@gmail.com>'
            },
            priority: 'high'
        };

        const mailOptionsForAccountVerification = {
            from: 'SkySync <root00skysync@gmail.com>',
            to: to,
            subject: "Complete Your SkySync Registration - Verify Your Email", 
            html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email Verification</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
                <style>
                  @keyframes fadeIn {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                  }
                  @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                  }
                  body {
                    font-family: 'Open Sans', sans-serif;
                    line-height: 1.6;
                    color: #333333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f7f9fc;
                  }
                  .header {
                    text-align: center;
                    padding: 20px 0;
                    animation: fadeIn 0.6s ease-out;
                  }
                  .logo {
                    max-width: 180px;
                    height: auto;
                  }
                  .content {
                    background-color: #ffffff;
                    padding: 30px;
                    border-radius: 12px;
                    box-shadow: 0 6px 18px rgba(47, 141, 255, 0.08);
                    animation: fadeIn 0.8s ease-out;
                    border-top: 4px solid #2F8DFF;
                  }
                  h2 {
                    font-family: 'Poppins', sans-serif;
                    color: #2F8DFF;
                    margin-top: 0;
                    font-weight: 700;
                  }
                  .button {
                    display: inline-block;
                    padding: 14px 28px;
                    background-color: #2F8DFF;
                    color: #ffffff !important;
                    text-decoration: none;
                    border-radius: 6px;
                    font-weight: 600;
                    font-family: 'Poppins', sans-serif;
                    margin: 25px 0;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(47, 141, 255, 0.3);
                    animation: pulse 2s infinite;
                  }
                  .button:hover {
                    background-color: #2472d4;
                    transform: translateY(-2px);
                  }
                  .footer {
                    text-align: center;
                    margin-top: 30px;
                    color: #777777;
                    font-size: 14px;
                    animation: fadeIn 1s ease-out;
                  }
                  .highlight {
                    color: #2F8DFF;
                    font-weight: 600;
                  }
                  .divider {
                    height: 1px;
                    background: linear-gradient(90deg, rgba(47, 141, 255, 0.1), rgba(47, 141, 255, 0.5), rgba(47, 141, 255, 0.1));
                    margin: 30px 0;
                  }
                  .welcome-text {
                    font-size: 13px;
                    margin-bottom: 15px;
                  }
                  .signature {
                    font-style: italic;
                    color: #555;
                  }
                  .social-icons {
                    margin: 20px 0;
                  }
                  .social-icon {
                    margin: 0 8px;
                    transition: transform 0.3s ease;
                  }
                  .social-icon:hover {
                    transform: translateY(-3px);
                  }
                </style>
              </head>
              <body>
                
                
                <div class="content">
                  <h2>Welcome to SkySync!</h2>
                  
                  <p class="welcome-text">Thank you for joining our community. Let's get your account verified so you can start exploring all the features.</p>
                  
                  <span>${accountVerificationUrl}</span>
                  
                  <p>This link will expire in 24 hours. If you didn't request this, please ignore this email or <a href="mailto:support00skysync@gmail.com" style="color: #2F8DFF;">contact our support team</a>.</p>
                  
                  <div class="divider"></div>
                  
                  <p class="signature">The SkySync Team<br>Making your cloud experience seamless</p>
                  
                 
                </div>
                
                <div class="footer">
                  <p>© ${new Date().getFullYear()} SkySync. All rights reserved.</p>
                </div>
              </body>
            </html>
            `,
            text: `Welcome to SkySync!\n\nThank you for joining our community. To complete your registration, please verify your email address by visiting this link:\n\n{{${accountVerificationUrl}}}\n\nThis link will expire in 24 hours. If you didn't request this, please ignore this email.\n\nNeed help? Contact our support team at support00skysync@gmail.com\n\n© ${new Date().getFullYear()} SkySync. All rights reserved.\n123 Cloud Street, San Francisco, CA 94107`, 
            headers: {
              'X-Entity-Ref-ID': '123456',
              'List-Unsubscribe': '<mailto:support00skysync@gmail.com>, <https://skysync.in/unsubscribe>',
            },
            priority: 'high',
        };


        // Send mail and wrap the callback in a Promise
        const info = await transporter.sendMail(
            mailOptionsForAccountVerification
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
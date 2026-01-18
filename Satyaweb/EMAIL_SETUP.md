# Email Setup Instructions

## Contact Form Email Functionality

The contact form is now set up to send emails when users submit the form. Here's how to configure it:

### 1. Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

### 2. Gmail Setup Instructions

1. **Enable 2-Factor Authentication**:
   - Go to your Google Account settings
   - Navigate to Security → 2-Step Verification
   - Enable 2-factor authentication

2. **Generate App Password**:
   - Go to Google Account → Security → App passwords
   - Select "Mail" and your device
   - Copy the generated 16-character password
   - Use this password in `EMAIL_PASS` (not your regular Gmail password)

3. **Update Environment Variables**:
   - Replace `your-gmail@gmail.com` with your actual Gmail address
   - Replace `your-app-password` with the generated app password

### 3. How It Works

- When users fill out the contact form, it sends a POST request to `/api/contact`
- The API route uses Nodemailer to send an email to `sreesatyanandivada@gmail.com`
- The email includes all form data in a nicely formatted HTML email
- Users see success/error messages based on the email sending status

### 4. Email Template

The email includes:
- Sender's name and email
- Subject (if provided)
- Message content
- Timestamp
- Professional HTML formatting

### 5. Testing

1. Start the development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email for the message

### 6. Production Deployment

For production deployment (Vercel, Netlify, etc.):
1. Add the environment variables to your hosting platform
2. Make sure `EMAIL_USER` and `EMAIL_PASS` are set in production
3. The contact form will work automatically

### Troubleshooting

- **"Failed to send email"**: Check your Gmail credentials and app password
- **"Missing required fields"**: Ensure all required fields are filled
- **SMTP errors**: Verify 2FA is enabled and app password is correct

The contact form is now fully functional and will send emails to your inbox when users submit messages!

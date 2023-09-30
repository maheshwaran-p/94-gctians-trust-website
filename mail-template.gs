function doGet(e) {
  sendEmailWithoutTemplate(e.parameter.user_name, e.parameter.email, e.parameter.subject,e.parameter.body);
}

function sendEmailWithoutTemplate(username, email, subject,body) {
  // Create the HTML content for your email
  var emailContent = "<p>Hello " + username + ",</p>";
  emailContent += "<p>" + body + "</p>";

  // Attach the image file (replace "IMAGE_URL" with the URL of the image you want to attach)
  var imageBlob = UrlFetchApp.fetch("https://maheshwaran-p.github.io/server/ganapathy.jpeg").getBlob();

  // Send the email with the constructed content and attached image
  MailApp.sendEmail({
    to: email,
    subject: subject,
    body: "Please enable HTML in your email client to view this message.",
    htmlBody: emailContent,
    attachments: [imageBlob], // Attach the image
    inlineImages: { "image": imageBlob }, // Inline image in the email (optional)
  });
}

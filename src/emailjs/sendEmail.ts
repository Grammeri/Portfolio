const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_lal0mp4", // Replace with your service ID
      "contact_form", // Replace with your template ID
      e.target,
      "YOUR_USER_ID" // Replace with your user ID from the EmailJS dashboard
    )
    .then(
      (result: any) => {
        console.log(result.text);
        // Handle success
      },
      (error: any) => {
        console.log(error.text);
        // Handle error
      }
    );
};

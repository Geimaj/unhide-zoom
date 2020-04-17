const webclient = document.querySelector(".webclient");
if (webclient && webclient.children.length > 0) {
  const meetingLink = webclient.children[0].href;

  if (meetingLink) {
    const response = confirm("join using web client?");
    if (response) {
      document.location = meetingLink;
    }
  }
}

let contactInfo = firebase.database().ref("user_messages");

document.querySelector(".form").addEventListener("submit", submitForm);

function submitForm(e) {
  let name = document.querySelector(".fname").value;

  let subject = document.querySelector(".subject").value;
  let message = document.querySelector(".message").value;
  e.preventDefault();
  console.log(name, subject, message);

  saveContactInfo(name, subject, message);
}

function saveContactInfo(name, subject, message) {
  console.log("I can run");
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,

    email: subject,
    message: message,
  });
}

const firebaseConfig = {
    apiKey: "AIzaSyD-2CgVD0bYqF2jUbOJSpJsJ1jq2XG13O8",
    authDomain: "contactpage-portfolio.firebaseapp.com",
    databaseURL: "https://contactpage-portfolio-default-rtdb.firebaseio.com",
    projectId: "contactpage-portfolio",
    storageBucket: "contactpage-portfolio.appspot.com",
    messagingSenderId: "265893089117",
    appId: "1:265893089117:web:84879b0001af9e331622b4",
    measurementId: "G-77HP82ZW20"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //refrence
  var contactFormDB = firebase.database().ref("contactForm");

document.getElementById('contactForm').addEventListener("submit", submitForm);

function submitForm(e)
{
    e.preventDefault();
    var name=getElementVal('name');
    var email=getElementVal('emailid');
    var subject=getElementVal('subject');
    var message=getElementVal('message');

    saveMessages(name, emailid,subject,message);
    
    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 1000);
    
      //   reset the form
      document.getElementById("contactForm").reset();
}

const saveMessages=(name,emailid,subject,message)=>
{
  var newContactForm= contactFormDB.push();  
  newContactForm.set({
    Name: name,
    email: emailid,
    Subject: subject,
    Message: message,

  });
};

const getElementVal= (id) =>{
    return document.getElementById(id).value;
};



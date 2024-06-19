var typed = new Typed(".text",{
    strings: ["Student .","Frontend Developer .","Musician .","Tech Enthusiast ."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

const form=document.querySelector("form");
const fullName =document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const subject=document.getElementById("subject");
const mess=document.getElementById("message");



function sendEmail() {

    const bodyMessage =`Full Name : ${fullName.value}<br> Email :${email.value}<br>
    Phone Number :${phone.value}<br> Message :${mess.value}`;
    Email.send({
        SecureToken:" f2b4fb8a-9df9-44f7-8b40-ad36858b4cf5",
        Host : "smtp.elasticemail.com",
        Username : "aditya1101raj@gmail.com",
        Password : "05F63DE84AE8E28BD04704E4BEFC31A50DC2",
        To : 'aditya1101raj@gmail.com',
        From : "aditya1101raj@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message=="OK"){
            Swal.fire({
                title: "Success!",
                text: "Message send successfully!",
                icon: "success"
              });
              
        }
    }
    );
    
    
    
}
form.addEventListener("submit",(e) => {
    e.preventDefault();
    sendEmail();

});


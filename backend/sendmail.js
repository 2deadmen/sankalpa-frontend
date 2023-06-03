const nodemailer = require('nodemailer');


function sendEmail(message) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kartikhegde.2002@gmail.com',
        pass: "haqpahjttjjlhzlj"
      }
    })

    transporter.sendMail(message, function(err, info) {
      if (err) {
        rej(err)
      } else {
        res(info)
      }
    })
  })
}

const sendConfirmationEmail = function(email,teamname,college,utr,screenshot) {
  const message = {
    from: "kartikhegde.2002@gmail.com",
    // to: toUser.email // in production uncomment this
    to:email,
    subject: 'Sankalpa 2023 - Registration confirmation ',
    html: `
      <h3> Hello ${email} </h3>
      <p>Thank you for registering into Sankalpa 2023.</p>
      <p>This email is to confirm that we have recieved your application and payment. </p>
      <p>The payment details will be revieved shortly</p>
      <p>Your UTR number is ${utr}</p>
      <p>Your screenshot  is <a href="${screenshot}">${screenshot}</a></p>
      <p>Cheers</p>
      <p>All The Best team ${teamname}  !!! </p>
      <p> We hope you get the best experience ${college}  !!! </p>
      <p> SANKALPA 2023 </p>
    `
  }

  return sendEmail(message);
}

const sendteamdetails = (email,treasurehunt,advertising,quiz,photography,cultural,team_id) => {
  let len=cultural.length
  let cul=``
  for (i=0;i< len;i++){
     if (i%2==0){
      cul += `${cultural[i]},`
  }}
  console.log(cul)
  const message = {
    from: process.env.GOOGLE_USER,
    // to: toUser.email // in production uncomment this
    to: email,
    subject: 'Sankalpa 2023 - Team Details ',
    html: `
      <h3>Hello ${email} </h3>
      <p>Treasurehunt team - ${treasurehunt[0]},${treasurehunt[2]}</p>
      <p>Advertising team - ${advertising[0]},${advertising[2]}</p>
      <p>Quiz team - ${quiz[0]},${quiz[2]}</p>
      <p>Photography and video editing team - ${photography[0]},${photography[2]}</p>
      <p>cultural team -${cul} </p>
      <p>Cheers,</p>
      <p> SANKALPA 2023 </p>
    `
  }

  return sendEmail(message);
}

module.exports={sendConfirmationEmail,sendteamdetails};
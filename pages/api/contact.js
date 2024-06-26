import  nodemailer from "nodemailer"

export default async function (req,res){
    const { username,email,phone,service,date } = req.body

    const data = {
        username,email,phone,service,date
    }
    const user ='ngabosevelin@gmail.com' 

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth:{
            user:user,
            pass:'zpfx qisa azei pnki'
        }
    });
    try {
        const mail = await transporter.sendMail({
            from: user,
            to: "mzeegustmann12@gmail.com",
            replyTo: email,
            subject: `Sauna and Massage Client ${username}`,
            html:`
            <p>Name: ${username}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Service: ${service}</p>
            <p>Date of Service: ${date}</p>
            `

        })
        console.log("message sent:", mail.messageId)

        return res.status(200).json({message: "success"})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "couldnot send the email. your  message was not sent"
        })
        
    }

   
}
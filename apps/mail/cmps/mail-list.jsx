import { MailPreview } from "./mail-preview.jsx";

export function MailList({mails}){
    return <div className="mail-list-container">
    {mails.map(mail=> <MailPreview mail={mail} key={mail.id} />)}
    </div>
}
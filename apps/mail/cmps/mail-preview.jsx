const { Link } = ReactRouterDOM


export function MailPreview({ mail }) {
    return <article className="mail" >
        <div className="star-container"></div>
        <span>{mail.from}</span>
        <span>{mail.subject}</span>
        <span>{mail.body}</span>
        <span>{mail.sentAt}</span>

    </article>

}


import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const mailService = {
    query
}


const MAIL_KEY = 'mailsDB'

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const gMails=[
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now(),
        from:'Rachel Green',
        to: 'user@appsus.com',
    },
    {
        id: 'e102',
        subject: 'how you doinggg!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now(),
        from:'joey tribbiani',
        to: 'user@appsus.com',
    },
    {
        id: 'e103',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now(),
        from:'Monika Geler',
        to: 'user@appsus.com',
    },
    {
        id: 'e104',
        subject: 'lets push and commit!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now(),
        from:'Ross Geller',
        to: 'user@appsus.com',
    },
    {
        id: 'e105',
        subject: 'Sale- only today!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now(),
        from:'Chendler Bing',
        to: 'user@appsus.com',
    },
    {
        id: 'e106',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: Date.now(),
        from:'pheobe buffay',
        to: 'user@appsus.com',
    }
]

const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes',
    isRead: false,
    sentAt: 1551133930594,
    from:'user@appsus.com',
    to: 'momo@momo.com',
}

function query(critirea) {
    let mails
    mails = storageService.loadFromStorage(MAIL_KEY)
    if(!mails||!mails.length) mails=gMails
    if(!critirea.status||!critirea.txt||!critirea.isRead||!critirea.isStared) return Promise.resolve(mails)
}

function _createMail(subject, body, to) {
    const id = utilService.makeId
    const mail = {
        id,
        subject,
        body,
        isRead: false,
        sentAt: null,
        to
    }
}
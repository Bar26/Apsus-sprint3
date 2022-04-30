import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"

export const mailService = {
    query,
    updateReadState,
    updateStarredState,
    deleteMail,
    addMail,
    getById,
    ReadPrecentage,
    sort,
    updateMailStatus,
    updateMailCategory
}


const MAIL_KEY = 'mailsDB'

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const gMails = [
    {
        id: 'e101',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Rachel Green',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['friends']
    },
    {
        id: 'e102',
        subject: 'how you doinggg!',
        body: 'Would love to catch up sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'joey tribbiani',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['friends']
    },
    {
        id: 'e109',
        subject: 'join us for 99$',
        body: 'Would you like to join dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Netflix',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['Promotions']
    },
    {
        id: 'e110',
        subject: 'Sahbak',
        body: 'we got jobs for you. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Sahbak',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['spam']
    },
    {
        id: 'e112',
        subject: 'Sahbak',
        body: 'we got jobs for you. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Sahbak',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['spam']
    },
    {
        id: 'e111',
        subject: 'Sahbak',
        body: 'we got jobs for you. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Sahbak',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['spam']
    },
    {
        id: 'e103',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: true,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Monica Geler',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['friends']
    },
    {
        id: 'e104',
        subject: 'lets push and commit!',
        body: 'Would love to catch up sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: Date.now(),
        from: 'Ross Geller',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['friends', 'family']
    },
    {
        id: 'e105',
        subject: 'Sale- only today!',
        body: 'Would love to catch up sometimesipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium ',
        isRead: true,
        isStarred: false,
        sentAt: 1251132930294,
        from: 'Chendler Bing',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['friends']
    },
    {
        id: 'e106',
        subject: 'Miss you!',
        body: 'Would love to catch up sometimeipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: 1551133930594,
        from: 'pheobe buffay',
        to: 'user@appsus.com',
        status: 'sent',
        labels: []
    },
    {
        id: 'e120',
        subject: 'want to cath up❤',
        body: 'Would love to catch up sometime i psum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
        isRead: false,
        isStarred: false,
        sentAt: 1551133930594,
        from: 'pheobe buffay',
        to: 'user@appsus.com',
        status: 'inbox',
        labels: ['friends,family']
    }
]

const email = {
    id: 'e101',
    subject: 'Miss you!',
    body: 'Would love to catch up sometimes Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam porro, dolorum est error fuga itaque minima veniam consectetur incidunt, doloremque dolorem! Qui culpa vitae voluptatem facilis et placeat praesentium',
    isRead: true,
    sentAt: 1551133930594,
    from: 'user@appsus.com',
    to: 'momo@momo.com',
    status: 'sent'
}

function updateReadState(mailToUpdate) {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    mailToUpdate.isRead = !mailToUpdate.isRead
    mails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail)
    storageService.saveToStorage(MAIL_KEY, mails)
}


function query(critirea) {
    let mails
    mails = storageService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = gMails
        storageService.saveToStorage(MAIL_KEY, mails)
    }

    mails = mails.filter(mail => mail.status === critirea.status && (mail.body.includes(critirea.txt) ||
        mail.subject.includes(critirea.txt) || mail.from.includes(critirea.txt)))
    if (critirea.category) mails=mails.filter(mail=>mail.labels.includes(critirea.category))
    if (critirea.isRead !== null && critirea.isRead !== 'all') {
        mails = mails.filter(mail => {
            return mail.isRead + '' === critirea.isRead
        })
    }
    if (critirea.isStarred) mails = mails.filter(mail => mail.isStarred)
    return Promise.resolve(mails)
}

function _createMail(to, subject, body, statusDraft) {
    const id = utilService.makeId()
    let status
    if (!statusDraft) status = to + '' === 'user@appsus.com' ? 'inbox' : 'sent'
    else status = statusDraft
    const from = 'Lee Sadot'
    const sentAt = Date.now()
    const mail = {
        from,
        subject,
        body,
        isRead: false,
        isStarred: false,
        sentAt,
        to,
        status,
        id: id,
        removedAt: ''
    }
    console.log(id)
    return mail
}

function updateStarredState(mailToUpdate) {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    mailToUpdate.isStarred = !mailToUpdate.isStarred
    mails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail)
    storageService.saveToStorage(MAIL_KEY, mails)
}

function deleteMail(mailToDelete) {
    console.log(mailToDelete)
    let mails = storageService.loadFromStorage(MAIL_KEY)
    const idx = mails.findIndex(mail => mail.id === mailToDelete.id)
    console.log(idx)
    mails.splice(idx, 1)
    storageService.saveToStorage(MAIL_KEY, mails)
}

function addMail(to, subject, body, status) {
    const mail = _createMail(to, subject, body, status)
    let mails = storageService.loadFromStorage(MAIL_KEY)
    mails.unshift(mail)
    storageService.saveToStorage(MAIL_KEY, mails)
}

function getById(mailId) {
    const mails = storageService.loadFromStorage(MAIL_KEY)
    const mail = mails.find(_mail => _mail.id === mailId)
    return Promise.resolve(mail)
}

function ReadPrecentage() {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    if (!mails) mails = gMails
    const readMails = mails.reduce(function (acc, mail) {
        if (mail.isRead && mail.status === 'inbox') acc++
        return acc
    }, 0)
    const readQuant = readMails
    const precentage = (readQuant / mails.length) * 100
    return precentage
}

function sort(sortBy) {
    console.log('sorting', sortBy)
    let mails = storageService.loadFromStorage(MAIL_KEY)
    if (sortBy === 'date') {
        console.log('by date')
        mails.sort((mail1, mail2) => mail2.sentAt - mail1.sentAt)
    }

    if (sortBy === 'subject') {
        console.log('sorting by subject')
        mails.sort(function (mail1, mail2) {
            const subject1 = mail1.subject.toUpperCase();
            const subject2 = mail2.subject.toUpperCase();
            if (subject1 < subject2) {
                return -1;
            }
            if (subject1 > subject2) {
                return 1;
            }
            return 0;

        })
    }
    storageService.saveToStorage(MAIL_KEY, mails)
}

function updateMailStatus(mailToUpdate, status) {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    mailToUpdate.status = status
    mails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail)
    storageService.saveToStorage(MAIL_KEY, mails)
}

function updateMailCategory(mailToUpdate,category){
    console.log(mailToUpdate,category)
    let mails = storageService.loadFromStorage(MAIL_KEY)
    mailToUpdate.labels.push(category)
    console.log(mailToUpdate)
    mails = mails.map(mail => mail.id === mailToUpdate.id ? mailToUpdate : mail )
    storageService.saveToStorage(MAIL_KEY, mails)
}
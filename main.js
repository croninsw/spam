const emails = customers.map(person => {
    let customerEmails = person.contacts.email
    return customerEmails
})

console.log(emails)

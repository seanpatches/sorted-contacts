export function makeContactTemplate(contact) {
    const html = `
    <tr>
    <td>${contact.isActive ? 'Yes' : 'No'}</td> 
    <td>${contact.firstName}</td> 
    <td>${contact.lastName}</td> 
    <td>${contact.company}</td> 
    <td>${contact.email}</td> 
    <td>${contact.favoriteFruit}</td> 
    </tr>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const tableBody = document.getElementById('table-body');
export default function loadContacts(contacts) {  
    while(tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }  
    contacts.forEach((contact) => {
        const dom = makeContactTemplate(contact);
        tableBody.appendChild(dom);
    });
    

}
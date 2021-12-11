const { program } = require('commander');
const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require('./contacts');

program
  .option('-a, --action <type>', 'action type')
  .option('-i, --id <type>', 'action id')
  .option('-n, --name <type>', 'action name')
  .option('-e, --email <type>', 'action email')
  .option('-p, --phone <type>', 'action phone');

program.parse(process.argv);

const options = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'listContacts':
      const contacts = await listContacts();
      console.log(contacts);
      break;
    case 'getById':
      const contact = await getContactById(id);
      console.log(contact);
      break;
    case 'addContact':
      const newContact = await addContact({ name, email, phone });
      console.log(newContact);
      break;
    case 'removeContact':
      const removingContact = await removeContact(id);
      console.log(removingContact);
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(options);

// const id = '5';
// invokeAction('listContacts');

// invokeAction({ action: 'getById', id });

// const data = {
//   name: 'Ivan Petrov',
//   email: 'petrov@mail.com',
//   phone: '(044) 222-7755',
// };
// invokeAction({ action: 'addContact', ...data });

// const id = '03ca23f3-0454-4b15-825e-66e1c30c942d';
// invokeAction({ action: 'removeContact', id });

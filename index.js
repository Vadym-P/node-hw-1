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

import * as contactsServices from "./contacts.js";

import { program } from "commander";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await contactsServices.listContacts();
      console.log(contactsList);
      break;

    case "get":
      const oneContact = await contactsServices.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction(options);
invokeAction({action: "get", id: "qdggE76Jtbfd9eWJHrssHw"});
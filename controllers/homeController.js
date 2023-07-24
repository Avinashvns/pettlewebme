import { FrappeApp } from 'frappe-js-sdk';
const frappe = new FrappeApp('http://20.163.238.153');
const db = frappe.db();
\
const auth = await frappe.auth();
auth
  .getLoggedInUser()
  .then((user) => console.log(`User ${user} is logged in.`))
  .catch((error) => console.error(error));

db.getDoc('Leads', 'Leads')
  .then((doc) => console.log(doc))
  .catch((error) => console.error(error));  

const homeController=(req,res)=>{
    res.render('index')
}

export {homeController}

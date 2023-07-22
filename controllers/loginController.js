import { FrappeApp } from 'frappe-js-sdk';
const frappe = new FrappeApp('http://20.163.238.153');


 const login= async (req,res)=>{ 
    console.log(req.body)
const data = {
    username: req.body.username,
    password: req.body.password
  }
  
  const auth = await frappe.auth();
    auth.loginWithUsernamePassword(data)
  
    .then((response) => {
        console.log('Logged in')
       return res.redirect('/')
       
 })
    .catch((error) => console.error(error));
}

const loginController=(req,res)=>{
  
   
        
        
 
    
    res.render('login',)
}

export { loginController ,login}

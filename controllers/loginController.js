
import axios from 'axios';
function parseCookies(cookieString) {
  const cookies = {};
  if (cookieString) {
    const cookieArr = cookieString.split(';');
    for (const cookie of cookieArr) {
      const [name, ...valueParts] = cookie.trim().split('=');
      const value = valueParts.join('=');
      cookies[name] = value;
    }
  }
  return cookies;
}
const login= async (req,res)=>{ 
 await axios
  .post('http://172.190.62.52/api/method/login', {
    usr: req.body.username,
    pwd: req.body.password,
   }, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    
   }) 
   .then(response => {
  //  console.log(response.headers);
    if (response.headers['set-cookie']){ 
      const rawCookieString=  response.headers['set-cookie']
      rawCookieString.forEach((cookie) => {
      const [sid, value] = cookie.split(';')[0].split('=');
       //   console.log(sid,value)
       res.cookie(sid,value)
      // document.cookie = `${sid.trim()}=${value.trim()}; path=/`;
         });
    // console.log('Cookie:',rawCookieString);
    }
   // 
   // res.status(200).json(response.data);
    return res.redirect('/')
   })
    .catch(error => {
    console.log(error)
    res.status(500).json({ error: error });
    });  
  }
  const leads = async (req, res) => {
    // Get the cookies from the incoming request
    const cookieString = req.headers.cookie || '';
    const cookies = parseCookies(cookieString);
  
    // Check if the cookie you need is available in the 'cookies' object
    if (cookieString) {


       const response = await axios.get('http://172.190.62.52/api/resource/Lead', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cookie':cookieString, 
        },
      })
      .then(response => {
        console.log(response.data);
        res.status(200).json(response.data);

         // Return the data from the API endpoint
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch leads' });
      });
     } else {
      res.status(401).json({ error: 'Unauthorized' }); // Return an error response if the required cookie is missing
      }
  }  
const loginController=(req,res)=>{

   res.render('login')

const loginController=(req,res)=>{    
    res.render('login',)

}

export { loginController ,login, leads }



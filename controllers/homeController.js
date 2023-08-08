 //'http://172.190.62.52/api/resource/Lead'
 // http://172.190.62.52/api/resource/Patient Appointment?fields=["phone_number","patient","appointment_date"]
 // http://172.190.62.52/api/resource/Lead?fields=[%22first_name%22,%20%22name%22,%22w[…]ars%22,%22age_months%22,%22breed%22,%22gender%22,%22status%22]
import axios from 'axios';
const lead = async (req, res) => {

 
  const cookieString = req.headers.cookie || '';
  // const baseURL = 'http://172.190.62.52/api/resource/Lead';
  // const fields = ['first_name', 'name', 'weight_kg', 'age_months', 'breed', 'gender', 'status'];
  // const encodedFields = encodeURIComponent(JSON.stringify(fields));
  // const url = `${baseURL}?fields=${encodedFields}`;
 
 

  if (cookieString) {
    const url = 'http://172.190.62.52/api/resource/Lead?fields=[%22first_name%22,%20%22name%22,%22age_months%22,%22breed%22,%22gender%22,%22status%22]';

     const response = await axios.get( url,{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        //'Content-Type':'application/x-www-form-urlencoded',
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


const homeController=(req,res)=>{
    
    const data = {
        name: 'johan', // Replace this with dynamic data from your application
        Available:'11',
        Occupied:'112',
        Booking_Requests:'12,09',
        New_Client_Enquiries:'15,080',
        Onboarded_Clients:'12,564',
        Payments:'12345',
      };

    res.render('index',data)
}

export {homeController,lead}

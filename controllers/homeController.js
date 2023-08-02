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

export {homeController}

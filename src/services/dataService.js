function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"));
   const bhid = JSON.parse(sessionStorage.getItem("bhid"));
   return {token, bhid}
}

export async function getUser() {
   const sessionData = getSession();
   
   const requestOptions =  {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionData.token}`,
        },
      }
   const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${sessionData.bhid}`, requestOptions);
   if(!response.ok){
      throw { message : response.statusText, status:response.status}
   }
   const data = await response.json();
   return data;

}

export async function getUserOrders(){
 
    const sessionData = getSession();
   
    const requestOptions =
     {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionData.token}`,
        },
        }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${sessionData.bhid}`, requestOptions);
    if(!response.ok){
      throw { message : response.statusText, status:response.status}
   }
        const data = await response.json();
        return data;
}

export async function createOrder(cartList, total, user) {
  
   const sessionData = getSession();   

   const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
          name: user.name,
          email: user.email,
          id: user.id,
        },
      };
    
   const requestOptions ={
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionData.token}`,
          },
        body: JSON.stringify(order),
      }

      const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, requestOptions);
    if(!response.ok){
      throw { message : response.statusText, status:response.status}
    }
      const data = await response.json();
      return data;
}
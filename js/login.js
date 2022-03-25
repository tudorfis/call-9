 

 const Email=document.querySelector("#email");
 const Password=document.querySelector("#password");
 const Button=document.querySelector("#button");
 

 Button.addEventListener("click", async function(){

    // console.log(Email.value);
    // console.log(Password.value);

   const fetchResponse = await fetch('https://jsonplaceholder.typicode.com/users')
   const data = await fetchResponse.json()

    console.log( 'data', data )
    
    // const isLoggedIn = data.map(user => user.email).includes(Email.value)
    const isLoggedIn = !!data.find(user => user.email === Email.value )

    console.log( isLoggedIn );

})
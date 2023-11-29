
 let btn=document.querySelector('#signin');
 btn.addEventListener('click',function(){
    var user= document.getElementById('username').value;
    var pass= document.getElementById('password').value; 
    if(user==='admin' && pass==='admin'){
        alert('Login Successful');
        window.location.href="admin.html";
    }
    else if(user==='user' && pass==='user'){
        alert('Login Successful');
        window.location.href="student _Dashboard.html";
    }
    else{
        alert("Invalid Username or Password");
    }
});
    
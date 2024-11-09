function user(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username && password){
        let userData = JSON.parse(localStorage.getItem("users")) || []
        userData.push({username, password})

        localStorage.setItem("users", JSON.stringify(userData))
    }
}

function login(){
    let loginName=document.getElementById("loginu_name").value;
    let loginp_word=document.getElementById("loginp_word").value;

    let data=JSON.parse(localStorage.getItem("users"))

    const matched = data.find(x=>x.username == loginName && x.password == loginp_word)
    
    if(matched){
        alert(`Login in by ${loginName}`)
    }else{
        alert("Invalid username/password")
    }    
}

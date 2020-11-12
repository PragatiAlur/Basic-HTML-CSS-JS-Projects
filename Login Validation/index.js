function validate(){
    let name = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    //document.write(name);
    if(name.length >= 8){
        for(let index = 0; index < name.length; index++){
            if(name[index] >= 'A' && name[index] <= 'z')
                continue;
            else{
                document.getElementById('UserNameerror').innerHTML = "Username should contain only alphabets";
                return false;
            }
        }

    }else{
        document.getElementById('UserNameerror').innerHTML = "Username should be minimum 8 letters";
                return false;
    }
    document.getElementById('UserNameerror').innerHTML = '';
    let flag = 0;
    if(password.length >= 8)
    {
        for(let index = 0; index < password.length; index++){
            if(password[index] == " "){
                document.getElementById('Passworderror').innerHTML = "Password cannot contain whitespace"
                return false;
            }
            else if(password[index]=='!' || password[index]== '@' || password[index] == '*' ||
            password[index]=='&' || password[index]== '$' || password[index] == '+'){
                flag = 1;
                continue;
            }
        }
        if(flag == 0){
            document.getElementById('Passworderror').innerHTML = "Password should contain least one special character";
            return false;
        }
    }
    else {
        document.getElementById('Passworderror').innerHTML = "Password should contian minimum 8 characters"
        return false;
    }
    document.getElementById('Passworderror').innerHTML = '';
    alert("Successfully logged in");
    return true;

}
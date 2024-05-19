

function validateForm(){
    var retrunVal=true;
    
    var username = document.getElementById("fname").value;
    var password = document.getElementById('pass').value;
    if(username==='malvika' && password==='1234'){
        console.log("username and password match");
      
        return retrunVal;
        }
        // else if(username===""|| password=="")  {
        //     if(username===""){
        //         document.getElementById("name-error").innerText="Username cannot be empty"
        //         return false;
        //     }
        //     else{
        //         document.getElementById("pass-error").innerText="Please enter password"
        //         return false;
        //     }
          
         
        //     }
            else if (username==="" && password==""){
                document.getElementById("name-error").innerText="Username cannot be empty"  
                document.getElementById("pass-error").innerText="Please enter password"
                return false;
            }
            else if (username!='malvika' && password!='1234') {
                document.getElementById("name-error").innerText="Please enter correct username"  
                document.getElementById("pass-error").innerText="Please enter correct password"
            }
            else if (username === "") {
                document.getElementById("name-error").innerText = "Username cannot be empty";
                document.getElementById("pass-error").innerText = "";
                return false;
            } else if (password === "") {
                document.getElementById("name-error").innerText = "";
                document.getElementById("pass-error").innerText = "Please enter password";
                return false;
            }
                
            else if (username!="malvika") {
                document.getElementById("name-error").innerText="Please enter correct username"  
                document.getElementById("pass-error").innerText = "";
                return false;
            }
            else if (username!="1234") {
                document.getElementById("name-error").innerText = "";
                document.getElementById("pass-error").innerText="Please enter correct password"
                return false;
            }  
           

        }
        
        window.onload = function() {
            document.getElementById("btn").addEventListener("click", function (event) {
                
                event.preventDefault();
                
                
                if (validateForm()) {
                    // Redirect to home.html
                    window.location.href = "home.html";
                }
            });
        };

       
let LoginInput = document.querySelector(".a");
let PassInput = document.querySelector(".b");
let EmailInput = document.querySelector(".c");
let button = document.querySelector(".d");
let ArremailInput = EmailInput.value.split('');
let warning = document.querySelector(".class")


function checkEmail() {
    let regex = /./;
        let regex2 = /@/;
        let testdog = regex.test(EmailInput.value)
        let testTochka = regex2.test(EmailInput.value)
    
        if (testdog === true) {
            let indexdog = EmailInput.value.indexOf("@")
            if (indexdog == 0) {
            }
            else {
                if (EmailInput.value[indexdog + 2] == undefined) {
                }
                else if(testTochka == true){
                    let indexTochka = EmailInput.value.indexOf(".")
                    if (EmailInput.value[indexTochka+1]==undefined){
                    }
                        else{
                            alert("Registration completed")
                            warning.textContent = ''
                        }
                    }
                    else{
                        warning.textContent = "Error";
                        warning.style.color = 'red';
                    }
                }
                }
            }
    
    button.addEventListener("click", checkEmail)
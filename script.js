let calculation= localStorage.getItem('calculation') ||'';
        function calculate(userInput){
            if(userInput==='1'){
                calculation+=userInput;
            }
            else if(userInput==='2'){
                calculation+=userInput;
            }
            else if(userInput==='3'){
                calculation+=userInput;
            }
            else if(userInput==='4'){
                calculation+=userInput;
            }
            else if(userInput==='5'){
                calculation+=userInput;
            }
            else if(userInput==='6'){
                calculation+=userInput;
            }
            else if(userInput==='7'){
                calculation+=userInput;
            }
            else if(userInput==='8'){
                calculation+=userInput;
            }
            else if(userInput==='9'){
                calculation+=userInput;
            }
            else if(userInput==='0'){
                calculation+=userInput;
            }
            else if(userInput==='+'){
                calculation+=userInput;
            }
            else if(userInput==='-'){
                calculation+=userInput;
            }
            else if(userInput==='*'){
                calculation+=userInput;
            }
            else if(userInput==='/'){
                calculation+=userInput;
            }
            else if(userInput==='.'){
                calculation+=userInput;
            }
            else if(userInput===''){
                calculation=userInput;
            }
            else if(userInput==='='){
                document.querySelector('.display-result').innerHTML=(eval(calculation));
                return;
            }
            
            document.querySelector('.display-result').innerHTML=(calculation);
            
        }

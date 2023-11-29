const counterNumber=document.querySelectorAll('.counter-number');

const speed=200;

counterNumber.forEach(curelement => {
    const updatenumber = () =>{
        const targetNum = parseInt(curelement.dataset.number);
        // console.log(targetNum);
        const initalNum = parseInt(curelement.innerText);
        // console.log(initalNum);

        const incrementNum= Math.trunc(targetNum/speed) // Math.trunc is a method by which we ignore the decimal value

        if(initalNum<targetNum){
            curelement.innerText= `${initalNum+incrementNum}+`;
        }
        setTimeout(updatenumber,10);
    };
    updatenumber();
});

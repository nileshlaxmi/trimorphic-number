const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    if(str !== ""){
        let num = parseInt(str);
        let cube = Math.pow(num, 3);
        let strCube = cube.toString();

        let index = strCube.length - str.length;
        let lastStr = strCube.substr(index);

        if(lastStr === str){
            document.getElementById('opText').innerHTML = "Trimorphic Number";
        }
        else{
            document.getElementById('opText').innerHTML = "Not a Trimorphic Number";
        }
    }
    else{
        document.getElementById('opText').innerHTML = "Please enter a number";
    }
    
}

function clearFields(){
    document.getElementById('ipText').value = "";
    document.getElementById('opText').innerHTML = "";
}

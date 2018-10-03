const clickFunction = () => {
    let str = document.getElementById('ipText').value;
    if(str !== ""){
        let num = parseInt(str);
        let cube, strCube, index, lastStr, i, singleStr;
        for(i=1; i<num; i++){
            singleStr = i.toString();
            cube = Math.pow(i, 3);
            strCube = cube.toString();
            index = strCube.length - singleStr.length;
            lastStr = strCube.substr(index);
            console.log(i+" "+cube);
            
            if(lastStr === singleStr){
                var para = document.createElement("p");
                para.innerHTML = "Trimorphic Numbers: "+ i + " And its cube: " + cube;
                document.getElementById('opText').appendChild(para);
            }
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

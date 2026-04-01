let usr=0;
let ma=0;
let fn=0;
let sn=0;
let nu=0;

class details{
    constructor(name,mail,semester,team,num)
    {
        this.name=name;
        this.mail=mail;
        this.semester=semester;
        this.team=team;
        this.num=num;

    }
    set name(value){
        if(value===null||value===""){
            document.getElementById("user").textContent="required column";
        }
        else if(value.length <10){
            document.getElementById("user").textContent ="atleast 10 digits required";
        }
        else {
            this._name=value;
            usr=1;
        }
    }
    get name(){
        return this._name;
    }
    set mail(value){
        let mailPattern = /^(?=.*[A-Z]).+@.+\.com$/;
        if(!mailPattern.test(value)){
    document.getElementById("gmail").textContent="invalid format";
}
    
        else{
            this._mail=value;
            ma=1;
        }
    }
        get mail(){
            return this._mail;
        }
        set semester(value){
           if(value===null||value===""){
            document.getElementById("semestererror").textContent="you have to fill this column";
           }
           else{
            this._semester=value;
            fn=1;
           }
        }
        get semester(){
            return this._semester;
        }
        set team(value){
            if(value===null||value===""){
            document.getElementById("teamerror").textContent="you have to fill this column";
           }
           else{
            this._team=value;
            sn=1;
           }
        }
        get team(){
            return this._team;
        }
        set num(value){
            let numpattern= /^[0-9]{10}$/;
            if(!numpattern.test(value)){
                document.getElementById("number").textContent="invalid format";
            }
            else{
                this._num=value;
                nu=1;
            }
        }
        get num(){
            return this._num;
        }
       isvalid(){
        return usr===1&&ma===1&&fn===1&&sn===1&&nu===1;
       }     
}


function register(){ 
    usr=0; ma=0; fn=0; sn=0; nu=0;
    let name=document.getElementById("name").value;
    let mail=document.getElementById("mail").value;
    let semester=document.getElementById("semester").value;
    let team=document.getElementById("team").value;
    let num=document.getElementById("num").value;

    let classcall=new details (name,mail,semester,team,num);
    console.log(classcall); 

    if(classcall.isvalid()){
    document.getElementById("succesfull").textContent="Registration succesfull";
    }
    else{
       document.getElementById("succesfull").textContent="Registration invalid ";
    }
}
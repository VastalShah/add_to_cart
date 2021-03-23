
class FirstScript {

    static addbtn: any;
    static rembtn: any;

    static addToStorage(abtn: string, rbtn: string, key: string, value: string){
        this.addbtn = document.getElementById(abtn);
        this.rembtn = document.getElementById(rbtn);
        this.rembtn.style.visibility = 'visible';
        this.addbtn.style.visibility = 'hidden';
        sessionStorage.setItem(key, value);
    }

    static removeFromStorage(abtn: string, rbtn: string, key: string){
        this.addbtn = document.getElementById(abtn);
        this.rembtn = document.getElementById(rbtn);
        this.addbtn.style.visibility = 'visible';
        this.rembtn.style.visibility = 'hidden';
        sessionStorage.removeItem(key);
    }

    static checkStorage(){
        console.log("BUtton 1");
        if(sessionStorage.length != 0){
            if(sessionStorage.getItem('item1') == "Website Development+60000"){
                this.addbtn = document.getElementById('addbtn1');
                this.rembtn = document.getElementById('rembtn1');
                this.addbtn.style.visibility = 'hidden';
                this.rembtn.style.visibility = 'visible';
            }
            if(sessionStorage.getItem('item2') == "Mobile Application Development+50000"){
                this.addbtn = document.getElementById('addbtn2');
                this.rembtn = document.getElementById('rembtn2');
                this.addbtn.style.visibility = 'hidden';
                this.rembtn.style.visibility = 'visible';
            }
            if(sessionStorage.getItem('item3') == "Cloud+65000"){
                this.addbtn = document.getElementById('addbtn3');
                this.rembtn = document.getElementById('rembtn3');
                this.addbtn.style.visibility = 'hidden';
                this.rembtn.style.visibility = 'visible';
            }
        }
    }
}
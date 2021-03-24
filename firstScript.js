var FirstScript = /** @class */ (function () {
    function FirstScript() {
    }
    FirstScript.addToStorage = function (abtn, rbtn, key, value) {
        this.addbtn = document.getElementById(abtn);
        this.rembtn = document.getElementById(rbtn);
        this.rembtn.style.visibility = 'visible';
        this.addbtn.style.visibility = 'hidden';
        sessionStorage.setItem(key, value);
    };
    FirstScript.removeFromStorage = function (abtn, rbtn, key) {
        this.addbtn = document.getElementById(abtn);
        this.rembtn = document.getElementById(rbtn);
        this.addbtn.style.visibility = 'visible';
        this.rembtn.style.visibility = 'hidden';
        sessionStorage.removeItem(key);
    };
    FirstScript.checkStorage = function () {
        if (sessionStorage.length != 0) {
            if (sessionStorage.getItem('item1') == "Website Development+60000") {
                this.addbtn = document.getElementById('addbtn1');
                this.rembtn = document.getElementById('rembtn1');
                this.addbtn.style.visibility = 'hidden';
                this.rembtn.style.visibility = 'visible';
            }
            if (sessionStorage.getItem('item2') == "Mobile Application Development+50000") {
                this.addbtn = document.getElementById('addbtn2');
                this.rembtn = document.getElementById('rembtn2');
                this.addbtn.style.visibility = 'hidden';
                this.rembtn.style.visibility = 'visible';
            }
            if (sessionStorage.getItem('item3') == "Cloud+65000") {
                this.addbtn = document.getElementById('addbtn3');
                this.rembtn = document.getElementById('rembtn3');
                this.addbtn.style.visibility = 'hidden';
                this.rembtn.style.visibility = 'visible';
            }
        }
    };
    return FirstScript;
}());

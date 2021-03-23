class SecondScript {
    
    private _itemName: string;
    private _itemPrice: number;

    get itemName(): string{
        return this._itemName;
    }

    set itemName(name: string){
        this._itemName = name;
    }

    get itemPrice(): number{
        return this._itemPrice;
    }

    set itemPrice(price: number){
        this._itemPrice = price;
    }
}

function retrieveFromStorage(){
    if(sessionStorage.length == 0){
        const pageTitle: any = document.getElementById('pageTitle');
        pageTitle.innerHTML = "There are no items in your cart."
        const emptyCartmsg: any = document.getElementById('emptyCartmsg');
        emptyCartmsg.style.visibility = 'visible';
        const tableParent: any = document.getElementById('tableParent');
        tableParent.style.visibility = 'hidden';
        return;
    }else{
        var total: number = 0;
        var arr: any = [];
        const cartTable: any = document.getElementById('cartTable');
        const emptyCartmsg: any = document.getElementById('emptyCartmsg');
        emptyCartmsg.style.visibility = 'hidden';
        for(let i:number=0; i<sessionStorage.length; i++){
            let key = sessionStorage.key(i);
            let value = sessionStorage.getItem(key);
            arr = value.split('+');

            const item = new SecondScript();
            item.itemName = arr[0];
            item.itemPrice = parseInt(arr[1]);

            total += item.itemPrice;

            var row = cartTable.insertRow(cartTable.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = i+1;
            cell2.innerHTML = item.itemName;
            cell3.innerHTML = item.itemPrice;
        }
        var lastRow = cartTable.insertRow(cartTable.rows.length);
        var cell1 = lastRow.insertCell(0);
        var cell2 = lastRow.insertCell(1);
        var cell3 = lastRow.insertCell(2);
        cell1.innerHTML = "";
        cell2.innerHTML = "Total";
        cell3.innerHTML = `Rs. ${total}`;
    }
}
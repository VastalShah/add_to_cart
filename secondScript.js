var SecondScript = (function () {
    function SecondScript() {
    }
    Object.defineProperty(SecondScript.prototype, "itemName", {
        get: function () {
            return this._itemName;
        },
        set: function (name) {
            this._itemName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SecondScript.prototype, "itemPrice", {
        get: function () {
            return this._itemPrice;
        },
        set: function (price) {
            this._itemPrice = price;
        },
        enumerable: true,
        configurable: true
    });
    return SecondScript;
})();
function retrieveFromStorage() {
    if (sessionStorage.length == 0) {
        var pageTitle = document.getElementById('pageTitle');
        pageTitle.innerHTML = "There are no items in your cart.";
        var emptyCartmsg = document.getElementById('emptyCartmsg');
        emptyCartmsg.style.visibility = 'visible';
        var tableParent = document.getElementById('tableParent');
        tableParent.style.visibility = 'hidden';
        return;
    }
    else {
        var total = 0;
        var arr = [];
        var cartTable = document.getElementById('cartTable');
        var emptyCartmsg = document.getElementById('emptyCartmsg');
        emptyCartmsg.style.visibility = 'hidden';
        for (var i = 0; i < sessionStorage.length; i++) {
            var key = sessionStorage.key(i);
            var value = sessionStorage.getItem(key);
            arr = value.split('+');
            var item = new SecondScript();
            item.itemName = arr[0];
            item.itemPrice = parseInt(arr[1]);
            total += item.itemPrice;
            var row = cartTable.insertRow(cartTable.rows.length);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = i + 1;
            cell2.innerHTML = item.itemName;
            cell3.innerHTML = item.itemPrice;
        }
        var lastRow = cartTable.insertRow(cartTable.rows.length);
        var cell1 = lastRow.insertCell(0);
        var cell2 = lastRow.insertCell(1);
        var cell3 = lastRow.insertCell(2);
        cell1.innerHTML = "";
        cell2.innerHTML = "Total";
        cell3.innerHTML = "Rs. " + total;
    }
}

const menuItems = [
    {
        name: "Rooz Bukhari",
        course: "main",
        price: 99,
        quantity: 1
    },
    {
        name: "Haneed Mutton",
        course: "main",
        price: 229,
        quantity: 1
    },
    {
        name: "Faham Chicken Half",
        course: "main",
        price: 179,
        quantity: 1
    },
    {
        name: "Spring Rolls",
        course: "starters",
        price: 150,
        quantity: 1
    },
    {
        name: "Sheek Kebab",
        course: "main",
        price: 199,
        quantity: 1
    },
    {
        name: "Chicken salad",
        course: "starters",
        price: 199,
        quantity: 1
    },
    {
        name: "Zanood",
        course: "dessert",
        price: 60,
        quantity: 1
    },
    {
        name: "kunafa",
        course: "dessert",
        price: 299,
        quantity: 1
    },
    {
        name: "Yemeni Halwa",
        course: "dessert",
        price: 60,
        quantity: 1
    }
];

const tableData = {
    table1: {
        totalItems: () => {
            if (!localStorage.getItem("table1")) {
                return 0;
            }
            const data = JSON.parse(localStorage.getItem("table1"));
            return data.length;
        },
        totalPrice: () => {
            if (!localStorage.getItem("table1")) {
                return 0;
            }
            const data = JSON.parse(localStorage.getItem("table1"));
            let price = 0;
            for (let obj of data) {
                price = price + obj.price * obj.quantity;
            }
            return price;
        },
    },
    table2: {
        totalItems: () => {
            if (!localStorage.getItem("table2")) {
                return 0;
            }
            const data = JSON.parse(localStorage.getItem("table2"));
            return data.length;
        },
        totalPrice: () => {
            if (!localStorage.getItem("table2")) {
                return 0;
            }
            const data = JSON.parse(localStorage.getItem("table2"));
            let price = 0;
            for (let obj of data) {
                price = price + obj.price * obj.quantity;
            }
            return price;
        },
    },
    table3: {
        totalItems: () => {
            if (!localStorage.getItem("table3")) {
                return 0;
            }
            const data = JSON.parse(localStorage.getItem("table3"));
            return data.length;
        },
        totalPrice: () => {
            if (!localStorage.getItem("table3")) {
                return 0;
            }
            const data = JSON.parse(localStorage.getItem("table3"));
            let price = 0;
            for (let obj of data) {
                price = price + obj.price * obj.quantity;
            }
            return price;
        },
    },
    table4: {
        totalItems: () => {
            if (!localStorage.getItem("table4")) {
                return 0;
            }
            const data = JSON.parse(localStorage.getItem("table4"));
            return data.length;
        },
        totalPrice: () => {
            if (!localStorage.getItem("table4")) {
                return 0;
            }
            const data = JSON.parse(localStorage.getItem("table4"));
            let price = 0;
            for (let obj of data) {
                price = price + obj.price * obj.quantity;
            }
            return price;
        },
    },
}

document.getElementById("table1").innerHTML = `Rs: ${tableData.table1.totalPrice()} | ${tableData.table1.totalItems()} items`;
document.getElementById("table2").innerHTML = `Rs: ${tableData.table2.totalPrice()} | ${tableData.table2.totalItems()} items`;
document.getElementById("table3").innerHTML = `Rs: ${tableData.table3.totalPrice()} | ${tableData.table3.totalItems()} items`;
document.getElementById("table4").innerHTML = `Rs: ${tableData.table4.totalPrice()} | ${tableData.table4.totalItems()} items`;

// Rendering the menu items
let menuId = 0;
const menuList = document.getElementsByClassName("menu-list");
for (var obj of menuItems) {
    const node = document.getElementsByClassName("menu")[0];
    const clone = node.cloneNode(true);
    clone.childNodes[1].textContent = obj.name;
    clone.childNodes[3].textContent = obj.course;
    clone.childNodes[6].textContent = `Rs: ${obj.price}`;
    clone.setAttribute("id", menuId++);

    menuList[0].appendChild(clone);
}
menuList[0].children[0].style.display = "none";


// search Menu List
const searchMenu = () => {
    const searchInput = document.getElementById("search-menu");
    let filterValue = searchInput.value.toUpperCase();
    for (let i = 0; i < menuItems.length; i++) {
        if ((menuItems[i].course.toUpperCase().indexOf(filterValue) > -1) || menuItems[i].name.toUpperCase().indexOf(filterValue) > -1) {
            document.getElementById(i).style.display = "";
        } else {
            document.getElementById(i).style.display = "none";
        }
    }
}

// search Table List
const searchTable = () => {
    let filter = document.getElementById("search-table").value.toUpperCase();

    const tables = document.getElementsByClassName("table");

    for (let i = 0; i < tables.length; i++) {
        let temp = tables[i].getElementsByTagName("h2")[0];
        let content = temp.textContent;
        if (content.toUpperCase().indexOf(filter) > -1) {
            tables[i].style.display = "";
        } else {
            tables[i].style.display = "none";
        }
    }
}

// functionality for dragging and dropping
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event, num) {
    const targetId = event.dataTransfer.getData("text");

    if (num === 1) {
        if (!localStorage.getItem("table1")) {
            localStorage.setItem("table1", '[]');
        }
        let oldData = JSON.parse(localStorage.getItem("table1"));
        for (let i = 0; i < oldData.length; i++) {
            if (oldData[i].name === menuItems[targetId].name) {
                oldData[i].quantity = parseInt(oldData[i].quantity) + 1;
                localStorage.setItem("table1", JSON.stringify(oldData));
                window.location.reload();
                return;
            }
        }
        oldData.push(menuItems[targetId]);
        localStorage.setItem("table1", JSON.stringify(oldData));
    } else if (num === 2) {
        if (!localStorage.getItem("table2")) {
            localStorage.setItem("table2", '[]');
        }
        let oldData = JSON.parse(localStorage.getItem("table2"));
        for (let i = 0; i < oldData.length; i++) {
            if (oldData[i].name === menuItems[targetId].name) {
                oldData[i].quantity = parseInt(oldData[i].quantity) + 1;
                localStorage.setItem("table2", JSON.stringify(oldData));
                window.location.reload();
                return;
            }
        }
        oldData.push(menuItems[targetId]);
        localStorage.setItem("table2", JSON.stringify(oldData));
    } else if (num === 3) {
        if (!localStorage.getItem("table3")) {
            localStorage.setItem("table3", '[]');
        }
        let oldData = JSON.parse(localStorage.getItem("table3"));
        for (let i = 0; i < oldData.length; i++) {
            if (oldData[i].name === menuItems[targetId].name) {
                oldData[i].quantity = parseInt(oldData[i].quantity) + 1;
                localStorage.setItem("table3", JSON.stringify(oldData));
                window.location.reload();
                return;
            }
        }
        oldData.push(menuItems[targetId]);
        localStorage.setItem("table3", JSON.stringify(oldData));
    } else if (num === 4) {
        if (!localStorage.getItem("table4")) {
            localStorage.setItem("table4", '[]');
        }
        let oldData = JSON.parse(localStorage.getItem("table4"));
        for (let i = 0; i < oldData.length; i++) {
            if (oldData[i].name === menuItems[targetId].name) {
                oldData[i].quantity = parseInt(oldData[i].quantity) + 1;
                localStorage.setItem("table4", JSON.stringify(oldData));
                window.location.reload();
                return;
            }
        }
        oldData.push(menuItems[targetId]);
        localStorage.setItem("table4", JSON.stringify(oldData));
    }
    window.location.reload();
}

// open specific modal when clicked
function openModal(num) {
    const modalHead = document.getElementById("table-num");
    modalHead.innerHTML = `Table ${num}`

    var modal = document.getElementById("myModal");

    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    const closeBill = document.getElementsByClassName('close-bill')[0];
    closeBill.setAttribute("id", num);
    closeBill.setAttribute("onclick", "generateBill(event)");
    closeBill.style.cursor = "pointer";
    closeBill.style.textAlign = "right";
    console.log(closeBill);

    display(num);

    span.onclick = function () {
        modal.style.display = "none";
        window.location.reload();
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            window.location.reload();
        }

    }
}

// displays the menu items ordered at specific table
function display(num) {
    let totalPrice = 0;
    let tempArray = [];

    let tableNum = "table" + num;
    const tbody = document.getElementsByTagName("tbody");
    let j = 1;
    if (!localStorage.getItem(tableNum)) {
        window.location.reload();
    }
    data = JSON.parse(localStorage.getItem(tableNum));
    totalItems = data.length;
    for (let obj of data) {
        var inputNumber = document.createElement("input");
        inputNumber.setAttribute("type", "number");
        inputNumber.setAttribute("class", "quantity");
        inputNumber.setAttribute("min", 1);
        inputNumber.setAttribute("id", "" + num + j);
        inputNumber.setAttribute("oninput", "updateQuantity(event)");


        const node = document.getElementById("row");
        const clone = node.cloneNode(true);
        clone.childNodes[1].textContent = j++;
        clone.childNodes[3].textContent = obj.name;
        clone.childNodes[5].textContent = obj.price;
        clone.childNodes[7].appendChild(inputNumber);
        clone.childNodes[9].childNodes[0].setAttribute("id", "d" + num + (j - 1));
        clone.childNodes[9].childNodes[0].setAttribute("onclick", "deleteItem(event)");

        tbody[0].appendChild(clone);
        tempArray.push(obj.quantity);
        totalPrice = totalPrice + obj.quantity * obj.price;

        document.getElementById("total").innerHTML = `Total Price: ${totalPrice}`;
    }
    const inputArray = document.getElementsByClassName("quantity");
    for (let k = 0; k < inputArray.length; k++) {
        inputArray[k].value = tempArray[k];
    }

}
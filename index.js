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

let menuId = 0;

// populate the menuList to the page
for (let i = 0; i < menuItems.length; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "menu");
    div.setAttribute("id", ++menuId);

    const h2 = document.createElement("h2");
    const h2_node = document.createTextNode(menuItems[i].name);

    const h4 = document.createElement("h4");
    const h4_node = document.createTextNode(menuItems[i].course);

    const p = document.createElement("p");
    const p_node = document.createTextNode(menuItems[i].price);

    h2.appendChild(h2_node);
    h4.appendChild(h4_node);
    p.appendChild(p_node);

    div.appendChild(h2);
    div.appendChild(h4);
    div.appendChild(p);

    document.getElementById("menu-list-id").appendChild(div);
}

// search Menu List
const searchMenu = () => {
    let filter = document.getElementById("search-menu").value.toUpperCase();

    for (let i = 0; i < menuItems.length; i++) {
        if ((menuItems[i].name.toUpperCase().indexOf(filter) > -1) || (menuItems[i].course.toUpperCase().indexOf(filter) > -1)) {
            document.getElementById(i + 1).style.display = "";
        }
        else {
            document.getElementById(i + 1).style.display = "none";
        }
    }
}


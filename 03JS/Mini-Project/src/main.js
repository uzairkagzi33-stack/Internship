let users = []

function loadUser(){
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
        displayUsers();                   //! Fetch users 
    } else {
        fetch("./users.json")
        .then(res => res.json())
        .then(data => {
            users = data;
            displayUsers();
        });
    }
}

function displayUsers(){
    const userList = document.getElementById('userList')
    userList.innerHTML = '';        //! Refresh list from empty everytime
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        li.className = 'flex justify-between items-center mb-1 ';

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete'
        delBtn.className = 'bg-red-500 text-white px-4 rounded ml-1 hover:cursor-pointer py-2 hover:bg-red-600 shadow-2xl mr-4';
        delBtn.onclick = () => deleteUser(user.id);

        li.appendChild(delBtn);         //! Append Child to DOM
        userList.appendChild(li);
    });
}

window.onload = loadUser;       //! Fetch the user and display them on load

document.getElementById('addUserBtn').addEventListener('click', () => {
    const input = document.getElementById('usernameInput');     //? value from input field
    const name = input.value.trim();
    if (!name) return;

  // Create new user
    const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name: name
    };

    users.push(newUser);
    displayUsers();
    input.value = '';       //? So the text field will be empty again

    saveUsers();
});

document.getElementById('downloadBtn').addEventListener('click', () => {    //! Download btn 
    const jsonData = JSON.stringify(users, null, 2);    //?String Conversion
    const blob = new Blob([jsonData], { type: "application/json" });  //! Create Blob( Binary Large object) an virtual file
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.json';
    a.click();

    URL.revokeObjectURL(url);
});


function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    displayUsers();
    saveUsers();
}


function saveUsers() {
    const jsonData = JSON.stringify(users, null, 2);
    localStorage.setItem('users', jsonData);        //! saved data to local Storage as can't write to file 
}

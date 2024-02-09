const button = document.querySelector('button');
const userEntry = document.querySelector('#favchap');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (userEntry.value !== "") {

        // create a li and a delete element button

        let listItem = document.createElement('li');
        let deleteButton = document.createElement('button');

        // set attributes
        listItem.classList.add('list');
        deleteButton.classList.add('delete');

        // asign values
        listItem.textContent = userEntry.value;
        deleteButton.textContent = "✖";

        // add to list element and the delete button
        list.appendChild(listItem);
        listItem.append(deleteButton);

        // delete button
        deleteButton.addEventListener('click', function () {

            listItem.remove();
            
        });
                
        document.querySelector('input').focus();
        userEntry.value = '';
    }
});
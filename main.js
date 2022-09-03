const form = document.querySelector('#addForm')
const items = document.querySelector('ul')
const search = document.querySelector('#search')

form.addEventListener('submit', addItem)
items.addEventListener('click', removeItem)
search.addEventListener('keyup', filterItem)

function addItem(e) {
    const newItem = document.querySelector('#filter').value
    e.preventDefault()
    if (newItem === '') {
        alert('Input your item')
        return;
    }
    listItem = document.createElement('li')
    listItem.className = 'list-item'
    listItem.appendChild(document.createTextNode(newItem))
    // Create delete button
    const del = document.createElement('button')
    del.className = 'delete'
    del.appendChild(document.createTextNode('X'))
    listItem.appendChild(del)
    items.appendChild(listItem)
    // clear the input field
    document.querySelector('#filter').value = null
}

function removeItem(e) {
    // if (e.target.className === 'delete')
    if (e.target.classList.contains('delete')) {
        if (confirm('Do you want to delete this?')) {
            const currList = e.target.parentElement
            items.removeChild(currList)
        }
    }
}

function filterItem(e) {
    let text = e.target.value.toLowerCase()
    let lis = items.getElementsByTagName('li')
    for (let item of lis) {
        if (item.firstChild.textContent.toLowerCase().includes(text)) 
            item.style.display = 'flex'
        else 
            item.style.display = 'none'
    }

    // ANOTHER METHOD
    // convert to an array from an HTML collection
    // Array.from(lis).forEach(item => {
    //     let itemName = item.firstChild.textContent
    //     if (itemName.toLowerCase().indexOf(text) != -1)
    //         item.style.display = 'flex'
    //     else
    //         item.style.display = 'none'
    // })

}
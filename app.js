const title = document.querySelector("#title");
const author = document.querySelector("#author");
const isbn = document.querySelector("#isbn");
const list = document.querySelector("#book-list");
const container = document.querySelector(".container");
const formDiv = document.querySelector("#book-form");
const addBook = (e)=>{
    
    const book = new Book(title.value,author.value,isbn.value);
    return book;
}



// BOOK constructor
class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}
// UI constructor
class UI{
   
    addBookToList(book){
        let node = document.createElement("tr");
        node.innerHTML = `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class='delete'>X</a></td>`
        list.appendChild(node);

    }
    clearFields(){
        title.value='',author.value='',isbn.value='';
        title.focus();
    }
    showAlert(msg,cls){
        
        let item = document.createElement('div');
        item.className=`alert ${cls}`;
        item.textContent=msg;
        container.insertBefore(item,formDiv);
        setTimeout(()=>{
            document.querySelector(".alert").style.display='none';
        },2000);
    }
}

initApp=()=>{
    const ui = new UI();
    document.querySelector(".submit").addEventListener('click',(e)=>{
        e.preventDefault();
        
        if(title.value!= '' && author.value!='' && isbn.value!=''){
            const book = addBook();
            
            ui.addBookToList(book);
            ui.clearFields();
            ui.showAlert('Book added!','success');


        }
        else{
            ui.showAlert('Invalid details!','error');
        }
    })
    list.addEventListener('click',(e)=>{
        if(e.target.classList.contains('delete')){
            e.target.parentElement.parentElement.remove();
            ui.showAlert('Book deleted!','success');
            title.focus();
        }
        
    })
}

initApp();

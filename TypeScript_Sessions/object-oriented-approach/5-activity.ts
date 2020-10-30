class BookList{
    //Instance Members
    private books: string[] = [];
    name:string;

    //Static Members
    static totalBookCount: number = 0;
    static maxBookCount: number = 5;

    constructor(name:string){
        this.name=name;
    }

    addBook(book:string){
        if(this.books.length >= BookList.maxBookCount){
            throw new Error('BookList is full')
        }else{
            this.books.push(book);
            BookList.totalBookCount++;
        }
    }

    static totalBooks(){
        return BookList.totalBookCount;
    }
}

var bookList = new BookList('My Book List');
console.log(`***** ${bookList.name} *****`);

bookList.addBook("Angular Fundamentals 1");
bookList.addBook("Angular Fundamentals 2");
bookList.addBook("Angular Fundamentals 3");
bookList.addBook("Angular Fundamentals 4");
bookList.addBook("Angular Fundamentals 5");
bookList.addBook("Angular Fundamentals 5");



console.log(`Maximum Books can be ${BookList.maxBookCount}`)
console.log(`Total Books added ${BookList.totalBookCount}`)
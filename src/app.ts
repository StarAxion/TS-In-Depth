import { ReferenceItem, UL, RefBook, Shelf } from "./classes";
import { Library } from './classes/library';
// import type { Library } from './classes/library';
import { Category } from "./enums";
import {
    getObjectProperty, purge, printRefBook, getAllBooks, logFirstAvailable, logBookTitles, getBookTitlesByCategory,
    getBookAuthorByIndex, calcTotalPages, createCustomerID, createCustomer, getBookByID, checkoutBooks, getTitles,
    bookTitleTransform, printBook, getProperty, setDefaultConfig, getBooksByCategory, logCategorySearch,
    getBooksByCategoryPromise, logSearchResults
} from "./functions";
import { Book, Author, Librarian, Logger, TOptions, Magazine } from "./interfaces";
import { CreateCustomerFunctionType, UpdatedBook, BookRequiredFields, PersonBook } from './types';



showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}



// 02. Types Basics:

// Task 02.01. Basic Types

// Task 02.01. Basic Types

// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.CSS));
// console.log(getBookAuthorByIndex(0));
// calcTotalPages();



// 03. Functions:

// Task 03.01. Function Type

// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;
// idGenerator = (name: string, id: number) => `${id}/${name}`;
// idGenerator = createCustomerID;

// const a = typeof createCustomerID;
// console.log(idGenerator('Boris', 20));

// Task 03.02. Optional, Default and Rest Parameters

// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');

// console.log(getBookTitlesByCategory());
// console.log(getBookTitlesByCategory(Category.CSS));

// logFirstAvailable();

// console.log(getBookByID(1));

// console.log(checkoutBooks('Noname customer', 1, 2, 3, 4));
// console.log(checkoutBooks('Noname customer', ...[1, 2, 3, 4]));
// console.log(checkoutBooks('Noname customer'));

// Task 03.03. Function Overloading

// console.log(getTitles(1, true));
// console.log(getTitles(true));
// console.log(getTitles(false));
// console.log(getTitles(2, false));
// console.log(getTitles('Lea Verou'));

// Task 03.04. Assertion Functions

// console.log(bookTitleTransform('Learn TypeScript'));
// console.log(bookTitleTransform(123));
// console.log(bookTitleTransform({}));



// 04. Interfaces:

// Task 04.01. Defining an Interface

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3
//     pages: 200,
//     // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
//     markDamaged(reason: string) {
//         console.log(`Damaged: ${reason}`);
//     }
// }

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02. Defining an Interface for Function Types

// const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03. Extending Interface

// const faviriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBooksPublished: 2
// }

// const faviriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical literature',
//     assistCustomer: null
// }

// Task 04.04. Optional Chaining

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);
// console.log(offer.book.authors?.[10]?.name);

// Task 04.05. Keyof Operator

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));



// 05. Classes:

// Task 05.01. Creating and Using Classes

// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'abc group';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.02. Extending Classes

// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();
// console.log(refBook);
// console.log(refBook.getID());

// Task 05.03. Creating Abstract Classes

// refBook.printCitation();

// Task 05.04. Interfaces for Class Types

// const favoriteLabrarian = new UL.UniversityLibrarian();
// const favoriteLabrarian: Librarian /*& A*/ = new UniversityLibrarian();
// favoriteLabrarian.name = 'Anna';
// favoriteLabrarian.assistCustomer('Boris', 'Learn TypeScript');
// favoriteLabrarian.a = 2;

// Task 05.05. Intersection and Union Types

// const personBook: PersonBook = {
//     name: 'Anna',
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@example.com',
//     id: 1,
//     title: 'Unknown'
// };

// const options: TOptions = { duration: 20 };
// const options2 = setDefaultConfig(options);
// console.log(options);
// console.log(options2);
// console.log(Object.is(options, options2));



// 06. Modules and Namespaces:

// Task 06.01. Using Namespaces

// Task 06.02. Export and Import

// Task 06.03. Default Export

// Task 06.03 Default Export

// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// printRefBook(refBook);

// Task 06.04. Re-Export

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);

// Task 06.05. Dynamic Import Expression

// const flag = true;

// if (flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);

//             console.log(reader);
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log('Complete!'));
// }

// if (flag) {
//     const o = await import('./classes');

//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);

//     console.log(reader);
// }

// Task 06.06. Type-Only Imports and Exports

// let library: Library;
// let library: Library = new Library();
// let library: Library = {
//     id: 1,
//     address: '',
//     name: 'Anna'
// };



// 07. Generics:

// Task 07.01. Generic Functions

// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: '???', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];

// const result: string[] = purge(['123', '234', '345']);
// const result = purge(['123', '234', '345']);
// const result = purge<string>(['123', '234', '345']);
// const result = purge<number>([1, 2, 3]);

// const result = purge<Book>(inventory);
// const result1 = purge(inventory);
// console.log(result1);
// const result2 = purge([1, 2, 3]);
// console.log(result2);

// Task 07.02. Generic Interfaces and Classes

// const bookShelf: Shelf<Book> = new Shelf<Book>();
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst().title);

// Task 07.03. Generic Constraints

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty<Book, 'author' | 'title'>(inventory[1], 'author'));

// Task 07.04. Utility Types

// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Learn Angular'
// };

// const updatedBook: UpdatedBook = {};
// const updatedBook: UpdatedBook = {
//     id: 1,
//     pages: 300
// };

// let params: Parameters<CreateCustomerFunctionType>;
// params = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);

// Task 07.05. Mapped Types, Utility Types, Conditional Types



// 08. Decorators:

// Task 08.01. Class Decorators (sealed)

// const favoriteLibrarian1 = new UL.UniversityLibrarian();
// const favoriteLibrarian2 = new UL.UniversityLibrarian();
// favoriteLibrarian1['a'] = 1;
// UL.UniversityLibrarian['a'] = 2;
// UL.UniversityLibrarian.prototype['a'] = 3;

// Task 08.02. Class Decorators that replace constructor functions (logger)

// console.log(favoriteLibrarian1);
// favoriteLibrarian1.printLibrarian();
// favoriteLibrarian1.name = 'Anna';
// favoriteLibrarian1['printLibrarian']();

// Task 08.03. Method Decorator (writable)

// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.assistFaculty = null;
// favoriteLibrarian.teachCommunity = null;

// Task 08.04. Method Decorator (timeout)

// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.printItem();

// Task 08.05. Parameter Decorator (logParameter)

// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');

// Task 08.06. Property Decorator

// const favoriteLibrarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// console.log(favoriteLibrarian.name);
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');
// console.log(favoriteLibrarian);

// Task 08.07. Accessor Decorator

// const refBook: RefBook = new RefBook(1, 'Learn TypeScript', 2022, 2);
// refBook.copies = 10;
// refBook.copies = -10;
// console.log(refBook.copies);



// 09. Asynchronous Patterns:

// Task 09.01. Callback Functions

// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02. Promises

// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return Promise.resolve(titles.length);
//     })
//     .then(n => console.log(n))
//     .catch(reason => console.log(reason));
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');

// Task 09.03. Async Functions

// console.log('Begin');
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software).catch(err => console.log(err));
// console.log('End');



// let str: number | string;
// (<string>str).toUpperCase();
// (str as string).toUpperCase();
// (str as unknown as string).toUpperCase();
// if (typeof str === 'string') {
//     str.toUpperCase();
// } else /*if (typeof str === 'number')*/ {
//     str.toFixed();
// }

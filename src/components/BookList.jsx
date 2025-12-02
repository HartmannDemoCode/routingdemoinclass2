import bookFacade from '../bookFacade'
import { NavLink } from 'react-router'
const BookList = () => {
    const books = bookFacade.getBooks();
    console.log(books)
    const handleDelete = (evt) => {
        console.log('TARGET: ',evt.target)
    }
    // const handleEdit = () => {}
    return (
        <>
        <table>
            <thead>
                <tr><th>Id</th><th>Title</th><th>Info</th></tr>
            </thead>
            <tbody>
                {books.map((book)=>
                    <tr key={book.id}><td>{book.id}</td><td>
                     <NavLink to={`/books/${book.id}`} end>
                    {book.title}
                    </NavLink></td>
                    <td>{book.info}</td>
                    {/* <td><button onClick={handleEdit}>edit</button></td> */}
                    <td><button id={book.id} onClick={handleDelete}>delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>
        </>
    );
};
export default BookList;
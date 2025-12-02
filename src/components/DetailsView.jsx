import { useParams, useSearchParams } from "react-router";
import bookFacade from '../bookFacade'
const DetailsView = () => {
    const { bookId } = useParams();
    console.log(bookId);
    // const [ search ] = useSearchParams();
    const book = bookFacade.findBook(bookId);
    console.log(book)
    return (
        <>
            <h1>Detailsview of single book</h1>
            <h3>{book.title}</h3>
            <p>{book.info}</p>
        </>
    );
}
export default DetailsView;
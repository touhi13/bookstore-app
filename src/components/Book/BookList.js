import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../../redux/book/thunk/fetchBooks";
import BookItem from './BookItem';

export default function BookList() {

    const books = useSelector((state) => state.books);
    const searchText = useSelector((state) => state.search);
    const dispatch = useDispatch();
    const [featured, setFeatured] = useState(false);

    useEffect(() => {
        dispatch(fetchBooks);
    }, [dispatch]);

    const searchByText = (book) => {
        if (searchText !== '') {
            return book.name.toLowerCase().includes(searchText.toLowerCase())
        }
        return true;
    };
    const filterByFeatured = (book) => {
        if (featured) {
            return book.featured === featured
        }
        return true;
    }
    return (
        <div className="order-2 xl:-order-1">
            <div className="flex items-center justify-between mb-12">
                <h4 className="mt-2 text-xl font-bold">Book List</h4>

                <div className="flex items-center space-x-4">
                    <button className={`filter-btn ${!featured && "active-filter"} `} id="lws-filterAll" onClick={() => setFeatured(false)}>All</button>
                    <button className={`filter-btn ${featured && "active-filter"} `} id="lws-filterFeatured" onClick={() => setFeatured(true)}>Featured</button>
                </div>
            </div>
            <div className="lws-bookContainer">
                {
                    books
                        .filter(searchByText)
                        .filter(filterByFeatured)
                        .map((book) => <BookItem key={book.id} book={book} />)
                }


            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import addBook from '../../redux/book/thunk/addBook';
import { updateBook } from '../../redux/book/thunk/updateBook';

export default function BookForm() {
    const dispatch = useDispatch();
    const editBook = useSelector((state) => state.editBook);

    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [featured, setFeatured] = useState(false);
        
    const resetData = () => {
        setName("");
        setAuthor("");
        setThumbnail("");
        setPrice("");
        setRating("");
        setFeatured(false);
    }

    useEffect(() => {
        if (editBook) {
            setName(editBook.name);
            setAuthor(editBook.author);
            setThumbnail(editBook.thumbnail);
            setPrice(editBook.price);
            setRating(editBook.rating);
            setFeatured(editBook.featured);
        } else {
            console.log("hhh")
            resetData()
        }
    }, [editBook]);

    const submitHandler = (e) => {
        e.preventDefault();
        const book = {
            name,
            author,
            thumbnail,
            price,
            rating,
            featured
        }
        if (!editBook) {
            dispatch(
                addBook(book)
            );
        } else {
            dispatch(updateBook(editBook.id, book))
        }
        resetData();
    };
    return (
        <div>
            <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
                <h4 className="mb-8 text-xl font-bold text-center">{editBook ? "Edit Book" : "Add New Book"}</h4>
                <form className="book-form" onSubmit={submitHandler}>
                    <div className="space-y-2">
                        <label htmlFor="name">Book Name</label>
                        <input required className="text-input" type="text" id="input-Bookname" name="name" value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="category">Author</label>
                        <input required className="text-input" type="text" id="input-Bookauthor" name="author" value={author}
                            onChange={(e) => setAuthor(e.target.value)} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="image">Image Url</label>
                        <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" value={thumbnail}
                            onChange={(e) => setThumbnail(e.target.value)} />
                    </div>

                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <div className="space-y-2">
                            <label htmlFor="price">Price</label>
                            <input required className="text-input" type="number" id="input-Bookprice" name="price" value={price}
                                onChange={(e) => setPrice(parseFloat(e.target.value))} />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="quantity">Rating</label>
                            <input required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" value={rating}
                                onChange={(e) => setRating(parseFloat(e.target.value))} />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" checked={featured} onChange={(e) => setFeatured(!featured)} />
                        <label htmlFor="featured" className="ml-2 text-sm"> This is a featured book </label>
                    </div>

                    <button type="submit" className="submit" id="submit">{editBook ? "Update Book" : "Add Book"}</button>
                </form>
            </div>
        </div>)
}

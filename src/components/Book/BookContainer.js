import BookForm from './BookForm';
import BookList from './BookList';

export default function BookContainer() {
    return (
        <main className="py-12 2xl:px-6">
            <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                <BookList />
                <BookForm />
            </div>
        </main>
    )
}

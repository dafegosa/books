import Navbar from '../../components/Navbar';
import AddFormBooks from '../../components/forms/AddFormBooks';

const AddBooks = () => {
  return (
    <div>
      <Navbar />
      <h2 className="text-center text-xl font-bold">AddBooks</h2>
      <AddFormBooks />
    </div>
  );
};
export default AddBooks;

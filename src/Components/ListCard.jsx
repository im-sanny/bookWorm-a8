
const ListCard = ({ list }) => {
        const { bookName, author, image, tags, rating, category, bookId, review, totalPages, publisher, yearOfPublishing } = list;

    return (
        <div className="">
      <div className="container grid grid-cols-12 max-w-6xl mx-auto">
        <div
          className="flex flex-col justify-center col-span-12 align-middle bg-[#1313130D]  lg:col-span-6 ">
            <img src={image} alt="" />
          
        </div>
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
          <div className="pt-6 pb-4 space-y-2">
            
            <h1 className="text-3xl font-bold">{bookName}</h1>
            <span>By: {author}</span>
            <div className="divider"></div>
            <p>{category}</p>
            <div className="divider"></div>
            <p> {review} </p>
           
             <p>Tag: <span>{tags[0]} {tags[1]}</span></p> 
             <p>Number of Pages: {totalPages}</p>
             <p>Publisher: {publisher}</p>
             <p>Year of Publishing: {yearOfPublishing}</p>
             <p>Rating: {rating}</p>
             <div className="flex gap-10">
                <button type="btn">Read</button>
                <button type="btn">Wishlist</button>
             </div>
              
          </div>
        </div>
      </div>
    </div>
    );
};

export default ListCard;
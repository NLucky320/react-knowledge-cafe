
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3 '>
            <div className='bg-[#1111110D] p-[30px] rounded-xl'>
                <h4 className="text-3xl  ">bookmarked Blogs: {bookmarks.length}</h4>
            <div className=''>
                 {
                bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark} ></Bookmark>)
            }
           </div>
            </div>
        </div>
    );
};



Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;

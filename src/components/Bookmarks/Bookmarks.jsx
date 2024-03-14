
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3 '>
            <div className='bg-[#6047EC1A] border-1 border-[#6047EC] rounded-lg p-4 mb-4'>
                <h3 className='text-[24px] font-bold text-[#6047EC] text-center' >Spent time on read : { readingTime} min</h3>
            </div>
            <div className='bg-[#1111110D] p-[30px] rounded-xl '>
                <h4 className="text-3xl  ">Bookmarked Blogs: {bookmarks.length}</h4>
            <div className=''>
                 {
                bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
            }
           </div>
            </div>
        </div>
    );
};



Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmarks;

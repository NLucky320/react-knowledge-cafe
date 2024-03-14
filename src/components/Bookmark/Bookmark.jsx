import PropTypes from 'prop-types'

const Bookmark = ({ bookmark }) => {
    
    return (
        <div className='bg-white p-[20px] rounded-lg mb-4 mt-4'>
            <h3 className='text-[18px] font-semibold'>{ bookmark.title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;
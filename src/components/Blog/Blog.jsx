import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
   
    return (
        <div className=''>
            <img className='w-full rounded-lg' src={blog.cover} alt='' />

            <div className='flex justify-between pt-[30px] pb-[16px]'>
                <div className='flex gap-4'>
                    <div className='w-[60px]'>
                        <img className='' src={blog.author_img} alt="" />
                    </div>
                    <div>
                        <p className='text-[24px] font-bold'>{blog.author}</p>
                        <p className='text-[16px] font-semibold text-[#11111199]'>{ blog.posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center text-[20px] font-medium text-[#11111199]'>
                    <p className=''><span>{blog.reading_time}</span> min read</p>
                    <button> <FaRegBookmark /></button>
                </div>
            </div>
            <h2 className="text-[40px] font-bold md:max-w-[737px] pb-4"> {blog.title}</h2>
            <p className='pb-6'>
                {
                    blog.hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash }</a></span>)
                }
            </p>
            <div className='pb-8 border-b-2 mb-8'>
                <button className='text-[20px] font-semibold text-[#6047EC] border-b-2 border-[#6047EC]'>Mark as read</button>
            </div>
         
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;
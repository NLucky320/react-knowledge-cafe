import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
   
    return (
        <div>
            <img src={blog.cover} alt='' />

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
                <div>
                    <p className='text-[20px] font-medium text-[#11111199]'><span>{ blog.reading_time}</span> min read</p>
                </div>
            </div>
            <h2 className="text-[40px] font-bold"> { blog.title}</h2>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;
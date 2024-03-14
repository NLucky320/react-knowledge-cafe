import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime]=useState(0)
  
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time)
    //remove the read blog from bookmark
    // console.log('remove', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }
  


  return (
    <>
      
    <div className='max-w-[1170px] mx-auto p-4'>
         <Header></Header>
      <div className='md:flex mt-5'>
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
     
     </div>
    </>
  )
}

export default App

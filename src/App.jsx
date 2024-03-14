import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      
    <div className='max-w-[1170px] mx-auto'>
         <Header></Header>
      <div className='md:flex mt-5'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
     
     </div>
    </>
  )
}

export default App

import React,{useEffect} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {FiSettings } from 'react-icons/fi';
import {TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Acceuil, Etudiants, Export, Professeurs, Editor, Candidats, Import,Institutions } from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';

 
const App = () => {
    const {activeMenu} = useStateContext();
  return (
    
   <div>
    
<BrowserRouter>
<div className='flex relative dark:bg-main-dark-bg'>
<div className='fixed right-4 bottom-4' style={{ zIndex:'1000' }}>
<TooltipComponent content="Settings" position="Top">
<button type='button' className='text-4xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background:'blue',borderRadius:'50%' }}>
    <FiSettings/>
</button>
</TooltipComponent>
</div>
{activeMenu ? (
    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
        <Sidebar />
    </div>
) : (
    <div  className='w-0 dark:bg-secondary-dark-bg'>
        <Sidebar />
    </div>
)}
<div className={
    `dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full ${ activeMenu ? 'md:ml-72 ' : ' flex-2'}`
   
}>
    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
     <Navbar />
   

</div>
<div>
    <Routes>
        {/* dashbord Ecommerce, Orders, Calendar, Employees, Editor, Customers, Kanban ,ColorPicker */}
        <Route path='/' element={<Acceuil/>}/>
        <Route path='/DPSE' element={<Acceuil/>}/>
        {/* Pages */}
        <Route path='/Professeurs' element={<Professeurs/>}/>
        <Route path='/Etudiants' element={<Etudiants/>}/>
        <Route path='/Candidats' element={<Candidats/>}/>
        <Route path='/Institutions' element={<Institutions/>}/>
        {/* Apps */}
        <Route path='/Import' element={<Import/>}/>
        <Route path='/editor' element={<Editor/>}/>
        <Route path='/Export' element={<Export/>}/>
        {/* <Route path='/coler-picker' element={<ColorPicker/>}/> */}
        {/* charts */}
        <Route path='/line' element="Line"/>
    </Routes>
</div>
</div>
</div>
</BrowserRouter>
   </div>
  )
}

export default App
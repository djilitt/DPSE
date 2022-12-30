import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import {GoPrimitiveDot } from 'react-icons/go';
import { Stacked ,Pie,Button,Sparkline} from '../components';
import {earningData,SparklineAreaData,ecomPieChartDat} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
const Acceuil = () => {
  return (
    <div className='mt-12 ring-0'>
<div className='flex flex-wrap lg:flex-nowrap justify-center'>
{/* <div className='bg-white
 dark:text-gray-200
 dark:bg-secondary-dark-bg 
 h-44 rounded-xl
 w-full lg:w-80 p-8 pt-9  
 m-3 bg-hero-pattern 
 bg-no-repat bg-cover bg-center'>
  <div>
    <p className='font-bold text-gray-400'>Etudiants</p>
    <p className='text-2xl'>663.448</p>
  </div>

<div className='mt-6'>
<Button Color="white"
bgColor="blue"
text="Download"
borderRadius="10px"
size="md"
/>
</div>
</div> */}
<div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
{earningData.map((item)=>
<div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  md:w-56 p-4 pt-9 rounded-2xl "
>
<button type='button' style={{ color:item.iconColor,backgroundColor: item.iconBg }}
className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
>
  {item.icon}
</button>
<p className='mt-3'>

  <span className='text-lg font-semibold'>
    {item.amount}
  </span>
  <span className={ `text-sm text-${item.pcColor} ml-2`}>
    {item.percentage}
  </span>
</p>
<p className='text-sm text-gray-400 mt-1'>{item.title}</p>
</div>
)}
</div>
</div>
{/* // section bachelier */}
<div  className='flex gap-10 flex-wrap justify-center'>
  <div className='bg-white dark:text-gray200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 '>
    <div className='flex justify-between '>
      <p className='font-semibold text-xl'>Candidats BAC</p>
      <div className='flex-items-center gap-4'>
<p className='flex items-center gap-2 text-red-600 hover:drop-shadow-xl'>
  <span><GoPrimitiveDot/></span>
  <span> Ajourné</span>
</p>
<p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
  <span><GoPrimitiveDot/></span>
  <span>Admis</span>
</p>
</div>
    </div>
    {/* //effectif */}
<div className='mt-10 flex gap-10 flex-wrap justify-center'>
  <div className='border-r-1 border-color m-4 pr-10'>
    {/* /// */}
  <div>
   <p>
    <span className='text-3xl font-semibold'>3434,431</span>
    {/* <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full  bg-green-400 ml-3 text-xs'>23%</span> */}
    </p> 
    <p className='text-red-500 mt-1 '>Ajourné</p>
  </div>
  {/* /// */}
  <div className='mt-8'>
   <p>
    <span className='text-3xl font-semibold'>784,431</span>
    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full  bg-green-400 ml-3 text-xs '>23%</span>
    </p> 
    <p className='text-green-500 mt-1 '>Admis</p>
  </div>
 <div className='mt-5'>
 <Sparkline currentColor="blue" id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color="blue" />

  </div> 


 <div className='mt-10'>

  <Button
      to="/Candidats"
  color="white"
  bgColor="powderblue"
  text="Plus de détails"
borderRadius="10px"
  />
  </div>
</div>
<div >
<Stacked
width="320px"
height="360px"
/>
</div>
</div>
  </div>
 
</div>
{/* <div  className='flex gap-10 flex-wrap justify-center'>
<div className='bg-white dark:text-gray200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 '>

  <span lassName='text-md text-gray-200 mt-1'>À propos de nous</span>
  <p className='text-sm text-gray-600 mt-1'>
Au niveau central, le département s’est enrichi par la mise en activité de l’Autorité
Mauritanienne d’Assurance-Qualité (AMAQ-ES) et dont le statut vient d’être modifié
pour devenir un établissement public à caractère administratif (EPA). Statut lui conférant une plus grande
autonomie administrative et financière. Elle a d’ores et déjà entamé la mise en place des Cellules Internes
d’Assurance-Qualité (CIAS) de tous les Etablissements d’Enseignement Supérieur.
</p>
  </div>
  </div> */}
    </div>
  )}

export default Acceuil
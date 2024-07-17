import React from 'react'
import NewAri_1 from '../../assets/HomeImg/new1.jpg'
import NewAri_2 from '../../assets/HomeImg/new2.jpg'
import NewAri_3 from '../../assets/HomeImg/new3.jpg'
import NewAri_4 from '../../assets/HomeImg/new4.jpg'
import { FaArrowLeft } from 'react-icons/fa'
import { FaLongArrowAltRight } from 'react-icons/fa'
import TitleList from '../../components/TitleList/TitleList'
const ProductsData = [
  {
    id: 1,
    img: NewAri_1,
    title: 'Samsung',
    aosDelay: '0'
  },
  {
    id: 2,
    img: NewAri_2,
    title: 'Oppo',
    aosDelay: '200'
  },
  {
    id: 3,
    img: NewAri_3,
    title: 'Iphone',
    aosDelay: '200'
  },
  {
    id: 4,
    img: NewAri_4,
    title: 'Nokia',
    aosDelay: '200'
  }
]
const NewArrival = () => {
  return (
    <div className='container'>
      <TitleList title='New Arrival' />
      <div className='pt-[50px]'>
        <div className='flex justify-around items-center'>
          <FaArrowLeft />
          {ProductsData.map((data) => (
            <div key={data.id} className='flex flex-col gap-6'>
              <img src={data.img} alt='' />
              <p className='font-bold'>{data.title}</p>
            </div>
          ))}
          <FaLongArrowAltRight />
        </div>
      </div>
    </div>
  )
}

export default NewArrival

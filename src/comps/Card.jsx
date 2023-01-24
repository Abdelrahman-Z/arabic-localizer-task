import {useState} from 'react'
import { FaPen, FaPauseCircle, FaTrash, FaExclamation, FaPhone, FaEnvelope } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeEmpoly } from '../redux/Features/cardsSlice'
const Card = ({ card, i }) => {

  const [hoverd, setHoverd] = useState(false)


  const dispatch = useDispatch()
  let color = ''
  if (card.attendance === 'present') { 
    color = 'bg-[#27b40c]'
  }
  if (card.attendance === 'absent') { 
    color ='bg-[#ff6a6a]'
  }
  if (card.attendance === 'on leave') { 
    color = 'bg-[#8997a4]'
  }
  if (card.attendance === 'weekend') { 
    color = 'bg-[#2764ac]'
  }
  if (card.attendance === 'holiday') { 
    color = 'bg-[#23aaeb]'
  }
  const handleDelete = (i) =>{
      dispatch(removeEmpoly(i))
    }
  return (
    <div className='bg-white flex flex-col sm:flex-row gap-2 items-center sm:px-5'>
      <div className='flex flex-col border-solid border-b sm:border-b-0 py-5 sm:border-r border-[#707070] justify-around items-center gap-14'>
        <img src={card.image}  className='w-14 object-contain rounded-full' />
        <div className='flex  flex-row flex-wrap gap-5 justify-center items-center  mx-5 sm:mx-3 '>
          <FaPen className='text-[#707070]' />
          <FaPauseCircle className='text-[#707070]' />
          <FaTrash className='text-[#707070]' onClick={()=> handleDelete(i)}/>
        </div>
      </div>
      <div className='flex-1 m-4 sm:ml-10 my-8'>
        <h1 className=' capitalize sm:text-2xl'>{card.userName}</h1>
        <h2 className=' sm:text-xl'>{card.position}</h2>
        <p className=' sm:text-lg'>{card.role}</p>
        <div className='flex flex-row justify-between items-center gap-5 sm:gap-0'>
          <span className={`${color} sm:font-bold text-white py-1 sm:px-3 px-2 rounded-md my-3 `}>{card.attendance}</span>
          <div className='flex justify-center gap-2 sm:gap-5 items-center'>
              <span className='bg-[#eaeef0] text-[#313030] rounded-full p-3  sm:text-base text-sm'><FaEnvelope /></span>
              <span className='bg-[#eaeef0] text-[#313030] rounded-full p-3  sm:text-base text-sm'><FaPhone /></span>
            <span
              onMouseEnter={()=> setHoverd(true)} onMouseLeave={()=> setHoverd(false)}
              className='bg-[#eaeef0] text-[#313030] rounded-full p-3 shadow-lg sm:text-base text-sm relative z-10'>
              <FaExclamation />
              {hoverd && <div className=' absolute -bottom-[230px] -right-10 gap-5 p-5 z-50 flex flex-row justify-between flex-wrap w-[1000%] bg-white'>
                <div>
                  <p  className='text-[#8997a4] font-bold'>office</p>
                  <p className='font-bold text-[#313030]'>{card.office}</p>
                </div>
                <div>
                  <p className='text-[#8997a4] font-bold'>role</p>
                  <p className='font-bold text-[#313030]'>{card.role}</p>
                </div>
                <div>
                  <p className='text-[#8997a4] font-bold'>coppied Manager</p>
                  <p className='font-bold text-[#313030]'>{card.directManager}</p>
                </div>
                <div>
                  <p className='text-[#8997a4] font-bold'>joining date</p>
                  <p className='font-bold text-[#313030]'>{card.startedDate}</p>
                </div>
                <div>
                  <p className='text-[#8997a4] font-bold'>Manager</p>
                  <p className='font-bold text-[#313030]'>{card.directManager}</p>
                </div>
                
              </div>}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
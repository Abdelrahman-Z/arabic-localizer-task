import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addEmpoly } from '../redux/Features/cardsSlice'
import { nanoid, urlAlphabet } from 'nanoid'
const Form = ({setNewEmpolye}) => {
    const dispatch = useDispatch()
    const [fullForm, setFullForm] = useState({
        image: '',
        userName: '',
        phone: '',
        startedDate: '',
        email: '',
        office: '',
        department: '',
        attendance: '',
        role: '',
        position: '',
        directManager: '',
        workHome: false,
        id:nanoid()
    })
    const handleChange = (e) => {
        const { name, value , files} = e.target
        if (name === 'workHome') {
            setFullForm((prevState) => {
                return {
                    ...prevState,
                    [name] : !prevState.workHome
                }
            })
            return
        }
        if (name === 'image') {
            setFullForm((prevState) => {
                return {
                    ...prevState,
                    [name] : URL.createObjectURL(files[0])
                }
            })
            return
        }
        setFullForm((prevState) => {
            return {
                ...prevState,
                [name] : value
            }
        })
    }
    const handleCancel = (e) => {
        e.preventDefault()
        setNewEmpolye(false)
        setFullForm({
            image: '',
            userName: '',
            phone: '',
            startedDate: '',
            email: '',
            office: '',
            department: '',
            attendance: '',
            role: '',
            position: '',
            directManager: '',
            workHome: false,
            id: nanoid()
        })
    }
    const handleSave = (e) => {
        e.preventDefault()
        setNewEmpolye(false)
        dispatch(addEmpoly(fullForm));
        setFullForm({
            image: '',
            userName: '',
            phone: '',
            startedDate: '',
            email: '',
            office: '',
            department: '',
            attendance: '',
            role: '',
            position: '',
            directManager: '',
            workHome: false,
            id:nanoid()
        })
    }
  return (
      <>
          <div className=' fixed w-full h-full top-0 left-0 bg-[#2868ae6e] backdrop-blur-[3px] z-50 '>
                  <form className='bg-white p-2 sm:m-10 ' onSubmit={e=> handleSave(e)} >
                      <h1 className='text-[#23aaeb] border-b border-[#23aaeb]'>NEW EMPLOYEE</h1>
                      <h2 className=' font-bold text-[#23aaeb] my-5'>personal info</h2>
                      <div className='flex flex-row flex-wrap gap-7 items-center'>
                          <div>
                              <label htmlFor='image' className=' cursor-pointer text-[#5c6974] p-10 block border-dashed border-[#707070] border-[2px]'>DRAG IMAGE HERE</label>
                              <input type='file' accept='image/gif, image/jpeg, image/png' onChange={(e)=> handleChange(e)} name='image' id='image' className=' hidden'></input>
                          </div>
                          <div className='flex-1'>
                              <div className='flex flex-col gap-2'>
                                <label htmlFor='name' className='block'>Name</label>
                                <input type='text' id='name' value={fullForm.userName}  onChange={(e)=> handleChange(e)} name='userName' required className=' outline-none rounded-md border-solid border-[1px] border-[#aaaaaad6] indent-3'></input>
                              </div>
                              <div className='flex flex-col gap-2'>
                                <label htmlFor='phone' className='block'>phone</label>  
                                <input type='text' id='phone' name='phone' value={fullForm.phone} onChange={(e)=> handleChange(e)} className=' outline-none rounded-md border-solid border-[1px] border-[#aaaaaad6] indent-3'></input>
                              </div>
                          </div>
                          <div className='flex-1'>
                              <div className='flex flex-col gap-2'>
                                <label htmlFor='name' className='block'>Start Date</label>
                                <input type='date' id='name' required value={fullForm.startedDate}  onChange={(e)=> handleChange(e)} name='startedDate' className=' outline-none rounded-md border-solid border-[1px] border-[#aaaaaad6] indent-3'></input>
                              </div>
                              <div className='flex flex-col gap-2'>
                                <label htmlFor='phone' className='block'>Email</label>  
                                <input type='email' required id='phone' value={fullForm.email}  onChange={(e)=> handleChange(e)} name='email' className=' outline-none rounded-md border-solid border-[1px] border-[#aaaaaad6] indent-3'></input>
                              </div>
                          </div>
                      </div>
                      <h2 className=' font-bold text-[#23aaeb] my-5'>personal info</h2>
                      <div>
                          <label htmlFor='office' className='block'>Office</label>
                          <select id='office' name='office' value={fullForm.office}  onChange={(e)=> handleChange(e)} placeholder='select' className='w-full rounded-md border-solid border-[1px] border-[#aaaaaad6] outline-none'>
                              <option></option>
                              <option>Arabic Localizer</option>
                              <option>Amazon</option>
                              <option>Face Book</option>
                              <option>Google</option>
                          </select>
                      </div>
                      <div className='flex sm:flex-row flex-wrap items-center gap-5 mt-10 flex-col justify-center'>
                          <div className='flex-1 w-full sm:w-fit'>
                              <label htmlFor='department' className='block'>Department</label>
                              <select required name='department' value={fullForm.department}  onChange={(e)=> handleChange(e)} className='rounded-md border-solid border-[1px] border-[#aaaaaad6] outline-none w-full'>
                                    <option></option>
                                    <option>business development</option>
                                    <option>web development</option>
                              </select>
                          </div>
                          <div className='flex-1 w-full sm:w-fit'>
                              <label htmlFor='department' className='block'>Attendance Profile</label>
                              <select name='attendance' value={fullForm.attendance}  onChange={(e)=> handleChange(e)} className='rounded-md border-solid border-[1px] border-[#aaaaaad6] outline-none w-full'>
                                  <option></option>
                                    <option>present</option>
                                    <option>on leave</option>
                                    <option>weekend</option>
                                    <option>holiday</option>
                                    <option>absent</option>
                              </select>
                          </div>
                      </div>
                      <div className='flex sm:flex-row flex-wrap items-center gap-5 mt-10 flex-col'>
                          <div className='flex-1 w-full sm:w-fit'>
                              <label htmlFor='department' className='block'>Role</label>
                              <select name='role' value={fullForm.role}  onChange={(e)=> handleChange(e)} className='rounded-md border-solid border-[1px] border-[#aaaaaad6] outline-none w-full'>
                                    <option></option>
                                    <option>business development</option>
                                    <option>web development</option>
                              </select>
                          </div>
                          <div className='flex-1 w-full sm:w-fit'>
                              <label htmlFor='department' className='block'>Position</label>
                              <select required value={fullForm.position} onChange={(e)=> handleChange(e)} name='position' className='rounded-md border-solid border-[1px] border-[#aaaaaad6] outline-none w-full'>
                                    <option></option>
                                    <option>HR Head</option>
                                    <option>HR Helper</option>
                                    <option>HR Founder</option>
                              </select>
                          </div>
                      </div>
                      <div className='flex flex-row flex-wrap items-center gap-5 mt-10'>
                          <div className='w-[50%]'>
                              <label htmlFor='department' className='block'>Direct Manager</label>
                              <select name='directManager' value={fullForm.directManager}  onChange={(e)=> handleChange(e)} className='rounded-md border-solid border-[1px] border-[#aaaaaad6] outline-none w-full'>
                                    <option></option>
                                    <option>Abd ElRahman El-Bawab</option>
                                    <option>Mohamed tarek</option>
                              </select>
                          </div>
                      </div>
                      <h2 className=' font-bold text-[#23aaeb] my-5'>work from home</h2>
                      <input type='checkbox' name='workHome' value={fullForm.workHome} id='work-home' onChange={(e)=> handleChange(e)}></input>
                      <label className='ml-3' htmlFor='work-home'>Allow Employee To Work From Home</label>
                      <hr className='my-6 bg-[#aaaaaad6]' />
                      <div className='flex justify-end items-center text-white'>
                          <button className='bg-[#ff6a6a] py-1 px-5 rounded-md' onClick={(e)=> handleCancel(e)}>Cancel</button>
                          <button type='submit' className='bg-[#23aaeb] py-1 px-5 rounded-md ml-3'>Save</button>
                      </div>
                  </form>
              </div>
      </>
  )
}

export default Form
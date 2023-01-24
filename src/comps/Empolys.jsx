import { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../css/cards.css'
import { searchEmpoly } from '../redux/Features/cardsSlice'
import Card from './Card'
import Form from './Form'
const Empolys = () => {
    const dispatch = useDispatch()
    const { allEmpolyes , searchedEmpolyes } = useSelector(state => state.cards)
    const [newEmpolye, setNewEmpolye] = useState(false)
    const [searchBar, setSearchBar] = useState('')
    const handleSearch = (e) => {
        setSearchBar(e.target.value)
        dispatch(searchEmpoly(e.target.value))
    }
  return (
      <div className='bg-[#f7f8f9] flex flex-col sm:ml-[123px] mr-5 sm:p-10' >
          <div className='flex justify-center items-center gap-3'>
              <input type='text'
                  className='flex-1 placeholder:text-[#707070] border-none outline-none indent-3 rounded-md p-2'
                  placeholder='search'
                  value={searchBar}
                  onChange={(e)=> handleSearch(e)}
                  />
              <button className='bg-[#2764ac] flex gap-2 p-1 rounded-md text-white' onClick={() => setNewEmpolye(true)}><span className='font-bold'>+</span> Add new</button>
              {newEmpolye && <Form setNewEmpolye={setNewEmpolye} />}
              
          </div>
              <div className='cards mt-10'>
                {searchBar === '' ? allEmpolyes.map((card, i) => (
                    <Card key={i} card={card} i={card.id} />
                )) : searchedEmpolyes.map((card, i) => (
                    <Card key={i} card={card} i={card.id} />
                ))}
              </div>
    </div>
  )
}

export default Empolys
import { AppHeader, LoadIcon } from '@/components'
import { useDebounce } from '@/hooks'
import { useSearch } from '@/hooks/useSearch'
import { LOAD_SIZE } from '@/types'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 700)
  const {isLoading, response} = useSearch(debouncedValue)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    console.log(response)
  }, [response])

  return (
    <div className="bg-cover bg-no-repeat bg-[url('https://cdnb.artstation.com/p/assets/images/images/043/834/111/large/zareta-forestsunnyfinishedbig.jpg?1638377432')]">
      <article className="min-h-screen flex flex-col gap-4 items-center">
        <AppHeader title="..." />
        <main className="max-w-2xl h-full w-full flex flex-col items-center gap-8">
          <div className='w-full'>
            <input
              onChange={handleInput}
              value={searchValue}
              className="bg-gray-100 rounded-md w-full p-2 outline-none shadow-lg"
              placeholder="Search city..."
            />
          </div>
          {
            isLoading ?
          <div className='flex flex-col gap-2 items-center bg-gray-50 p-8 rounded-full bg-opacity-75 text-xl'>
            <LoadIcon size={LOAD_SIZE.MEDIUM} />
            <p>Loading...</p>
          </div>

: response?.length ? response.map((e) => <Link to={`/${e.url}`} key={e.id} className='bg-gray-100 w-full p-4 rounded'>
<section >{e.name}, {e.country}</section>
</Link>
) 
: <p>Nothing found</p>
          }
        </main>
        <div />
      </article>
    </div>
  )
}

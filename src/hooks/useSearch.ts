import { getSearch } from '@/api'
import { SearchAPI } from '@/types'
import { useEffect, useState } from 'react'

export const useSearch = (searchValue: string) => {
  const [response, setResponse] = useState<SearchAPI[] | null>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    if (searchValue) {
      setIsLoading(true)

      getSearch(searchValue).then((data) => {
        setResponse(data)
        setIsLoading(false)
      })
    }
    return () => controller.abort()
  }, [searchValue])

  return {
    response,
    isLoading,
  }
}

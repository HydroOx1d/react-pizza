import React from 'react'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'

const SearchView = styled.div`

`

const SearchElement = styled.div`
  
`

const SearchInput = styled.input`

`

const Search = () => {
  const [search, setSearch] = useSearchParams()
  const searchQueryValue = search.get('title') || ''
  const [value, setValue] = React.useState(searchQueryValue)

  React.useEffect(() => {
    setSearch({
      sortBy: search.get('sortBy') || '',
      order: search.get('order') || '',
      category: search.get('category') || '',
      title: value
    })
  }, [value])

  return (
    <SearchView>
      <SearchElement>
        <SearchInput value={searchQueryValue || value} onChange={(e) => setValue(e.target.value)} placeholder='Поиск пиццы...'/>
      </SearchElement>
    </SearchView>
  )
}

export default Search
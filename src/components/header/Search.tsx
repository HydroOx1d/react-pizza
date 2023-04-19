import React from 'react'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'

const SearchView = styled.div`

`

const SearchElement = styled.div`
  border: 1px solid rgba(0,0,0, .5);
  width: 300px;
  height: 35px;
  border-radius: 5px;
`

const SearchInput = styled.input`
  padding: 0px 0px 0px 20px;
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  &:focus {
    outline: 1px solid rgba(0,0,0, .7);
  }
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
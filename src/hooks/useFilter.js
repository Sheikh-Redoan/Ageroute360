import { useState, useMemo } from 'react'

export const useFilter = (data, filterKey) => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredData = useMemo(() => {
    if (activeFilter === 'All') return data
    return data.filter(item => item[filterKey] === activeFilter)
  }, [data, activeFilter, filterKey])

  return { filteredData, activeFilter, setActiveFilter }
}

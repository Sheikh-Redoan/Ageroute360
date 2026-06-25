const MapFilters = () => {
  return (
    <div className="bg-brand-navy/90 p-4 rounded-lg">
      <h3 className="font-semibold text-white mb-3">Filters</h3>
      <div className="space-y-2">
        <select className="w-full px-3 py-2 bg-brand-dark text-white rounded border border-gray-700">
          <option>All Categories</option>
          <option>Roads</option>
          <option>Bridges</option>
          <option>Highways</option>
        </select>
        <select className="w-full px-3 py-2 bg-brand-dark text-white rounded border border-gray-700">
          <option>All Status</option>
          <option>Ongoing</option>
          <option>Completed</option>
        </select>
      </div>
    </div>
  )
}

export default MapFilters

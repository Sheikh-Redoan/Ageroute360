import { cn } from '../../utils/cn'

const Pagination = ({ currentPage, totalPages, onPageChange, className }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className={cn('flex justify-center gap-2', className)}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-brand-navy text-white disabled:opacity-50 hover:bg-brand-navy/70"
      >
        Previous
      </button>
      
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            'px-4 py-2 rounded-lg',
            currentPage === page
              ? 'bg-brand-amber text-brand-dark'
              : 'bg-brand-navy text-white hover:bg-brand-navy/70'
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg bg-brand-navy text-white disabled:opacity-50 hover:bg-brand-navy/70"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination

import { Link } from 'react-router-dom'
import { formatCurrency } from '../../../utils/formatCurrency'

const ProjectCard = ({ project }) => {
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'completed': return 'bg-green-500'
      case 'suspended': return 'bg-red-500'
      case 'ongoing': 
      default: return 'bg-brand-amber text-slate-900'
    }
  }

  const getStatusTextColor = (status) => {
    return status.toLowerCase() === 'ongoing' ? 'text-slate-900' : 'text-white'
  }

  return (
    <Link 
      to={`/projects/${project.id}`}
      className="project-card group bg-white rounded-[30px] shadow-[0_1px_4px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col overflow-hidden w-full h-full"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img 
          src={project.image || "https://placehold.co/400x220/f1f5f9/64748b?text=Project+Image"} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          <div className={`px-3 py-1 rounded-full ${getStatusColor(project.status)}`}>
            <span className={`text-xs font-medium font-inter tracking-wide ${getStatusTextColor(project.status)}`}>
              {project.status}
            </span>
          </div>
          <div className="px-3 py-1 bg-slate-950/70 backdrop-blur-md rounded-full">
            <span className="text-white text-xs font-medium font-inter tracking-wide">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between gap-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-slate-950 text-lg md:text-xl font-semibold font-sora leading-snug line-clamp-2">
            {project.name}
          </h3>
          
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-500 text-sm font-jakarta truncate max-w-[140px]">
                {project.location}
              </span>
            </div>
            <span className="text-slate-950 text-base font-semibold font-inter">
              {formatCurrency(project.budget)}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="flex justify-between items-end w-full">
            <span className="text-slate-950/80 text-sm font-jakarta">Progress</span>
            <span className="text-brand-amber text-sm font-bold font-inter">{project.progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-amber rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${project.progress}%` }} 
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard

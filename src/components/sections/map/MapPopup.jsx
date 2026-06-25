import StatusPill from '../../ui/StatusPill'
import ProgressBar from '../../ui/ProgressBar'

const MapPopup = ({ project }) => {
  return (
    <div className="bg-brand-navy p-4 rounded-lg min-w-[280px]">
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-bold text-white">{project.name}</h4>
        <StatusPill status={project.status} />
      </div>
      <p className="text-sm text-gray-400 mb-3">📍 {project.location}</p>
      <ProgressBar progress={project.progress} />
      <p className="text-xs text-gray-400 mt-2">{project.progress}% Complete</p>
    </div>
  )
}

export default MapPopup

import { useState, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'
import { projects } from '../../../data/projects'
import ProjectFilters from './ProjectFilters'
import ProjectCard from './ProjectCard'

gsap.registerPlugin(ScrollTrigger)

const ProjectsGrid = () => {
  const gridRef = useRef(null)
  
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesFilter = activeFilter === 'All' || project.status === activeFilter
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.location.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [activeFilter, searchQuery])

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(".projects-filter-bar", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    )
    .fromTo(".project-card", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" },
      "-=0.2"
    )
  }, [gridRef])

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div ref={gridRef} className="max-w-[1260px] mx-auto px-6 flex flex-col gap-10">
        
        <div className="projects-filter-bar z-20">
          <ProjectFilters 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="w-full py-20 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-sora text-slate-900 mb-2">No projects found</h3>
            <p className="text-gray-500 font-jakarta">Try adjusting your filters or search query.</p>
          </div>
        )}

      </div>
    </section>
  )
}

export default ProjectsGrid

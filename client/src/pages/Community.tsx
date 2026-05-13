import { useEffect, useState } from "react"
import type { Project } from "../types"
import { dummyGenerations } from "../assets/assets"
import { Loader2 } from "lucide-react"
import ProjectCard from "../components/ProjectCard"

const Community = () => {

  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProjects = async() => {
    setTimeout(() => {
      setProjects(dummyGenerations)
      setLoading(false)
    }, 3000)
  }

  useEffect(() => {
    fetchProjects()
  },[])

  return loading? (
    <div className="min-h-screen flex justify-center items-center">
      <Loader2 className="size-7 animate-spin text-pink-400"/>
    </div>
  ):
  (
    <div className="min-h-screen text-white p-6 md:p-12 my-16">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">Community</h3>
          <p className="text-gray-400">See what others are creating with snappify</p>
        </header>

        {/* Project List */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {projects.map(project => (
            <ProjectCard key={project.id} gen={project} setGeneration={setProjects} forCommunity={true}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Community
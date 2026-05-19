import { prisma } from "../configs/prisma";

export const getUserCredits = async(request, response) => {
    try {
        const {userId} = request.auth();

        if(!userId) 
            return response.status(401).json({message: "Unauthorized"})

        const user = await prisma.user.findUnique({
            where: {id: userId},
        })

        response.status(200).json({credits: user.credits})
    } catch (error) {
        response.status(500).json({message: "Internal Server Error"})
    }
}

export const getAllProjects = async(request, response) => {
    try {
        const {userId} = request.auth();

        if(!userId) 
            return response.status(401).json({message: "Unauthorized"})

        const projects = await prisma.project.findMany({
            where: {userId},
        })

        response.status(200).json({projects})
    } catch (error) {
        response.status(500).json({message: "Internal Server Error"})
    }
}

export const getProjectById = async(request, response) => {
    try {
        const {userId} = request.auth();
        const {projectId} = request.params;

        const project = prisma.project.findUnique({
            where: {id: projectId, userId}
        })

        if(!project)
            return response.status(404).json({message: "Project not found"})
        
        return response.status(200).json({project})
    } catch (error) {
        response.status(500).json({message: "Internal Server Error"})
    }
}

export const toggleProjectVisibility = async(request, response) => {
    try {
        const {userId} = request.auth();
        const {projectId} = request.params;

        const project = prisma.project.findUnique({
            where: {id: projectId, userId}
        })

        if(!project)
            return response.status(404).json({message: "Project not found"})

        if(!project.generatedImage && !project.generatedVideo)
            return response.status(404).json({message: "Image/Video not Generated"})
        
        await prisma.project.update({
            where: {id: projectId},
            data: {isPublished: !project.isPublished}
        })
        return response.status(200).json({isPublished: !project.isPublished})
        
    } catch (error) {
        response.status(500).json({message: "Internal Server Error"})
    }
}
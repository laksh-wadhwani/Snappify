export const protect = async(request, response, next) => {
    try {
        const {userId} = request.auth()

        if(!userId)
            return response.status(401).json({message: "Unauthorized"})
    } catch (error) {
        response.status(500).json({message: error.code || "Internal Server Error"})
    }
}
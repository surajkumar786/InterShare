import jwt from 'jsonwebtoken'
import { handleError } from "../helpers/handleError.js" // Corrected import path based on your file structure

export const onlyadmin = async (req, res, next) => {
    try {
        const token = req.cookies.access_token
        if (!token) {
            // This is the correct way to pass a 403 error to the error handler.
            return next(handleError(403, 'Unauthorized'))
        }
        
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
        
        if (decodeToken.role === 'admin') {
            req.user = decodeToken
            next() 
        } else {
            // This is also the correct way to pass a 403 error.
            return next(handleError(403, 'Unauthorized'))
        }
    } catch (error) {
        // This part is already correct as it uses handleError.
        // It handles cases where the token is invalid (e.g., expired, malformed).
        next(handleError(500, error.message))
    }
}
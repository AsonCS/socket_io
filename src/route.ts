import {
    Request,
    Response,
    Router
} from 'express'

export default function route(): Router {
    const route = Router()

    route.get('/', (req: Request, res: Response) => {
        res.send('<h1>Hello world</h1>')
    })

    return route
}

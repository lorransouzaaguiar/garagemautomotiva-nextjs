import type { NextApiRequest, NextApiResponse } from 'next';
import { CustomerFactory } from '~/server/modules/customer/CustomerFactory';

const controller = CustomerFactory.makeController()

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    switch (req.method) {
        case 'GET': {
            res.json(await controller.getAll())
        } break;
        case 'POST': {
            res.json(await controller.insert(req))
        } break;
        case 'PUT': {
            res.json(await controller.update(req))
        } break;
        case 'DELETE': {
            res.json(await controller.delete(req))
        } break;
        default:
            break;
    }
    
}

import { FastifyReply, FastifyRequest } from 'fastify'

export function verifyUserRole(roleToVerify: 'ADMIN' | 'USER') {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { role } = request.user

      if (role !== roleToVerify) {
        return reply.status(401).send({ message: 'Unauthorized' })
      }
    } catch (err) {
      return reply.status(401).send({ message: 'Unauthorized.' })
    }
  }
}

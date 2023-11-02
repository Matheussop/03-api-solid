import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  // const authenticateBodySchema = z.object({
  //   email: z.string().email(),
  //   password: z.string().min(6),
  // })

  // const { email, password } = authenticateBodySchema.parse(request.body)

  // try {
  //   return reply.status(200)
  // } catch (err) {
  //   if (err) {
  //     return reply.status(400).send({ message: err.message })
  //   }
  //   throw err
  // }

  return reply.status(200).send()
}

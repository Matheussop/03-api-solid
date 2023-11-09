import { makeCheckInUseCase } from '@/use-cases/factories/make-check-in-use-case'
import { makeValidateCheckInUseCase } from '@/use-cases/factories/make-validate-check-in-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function validate(request: FastifyRequest, reply: FastifyReply) {
  const validateCheckInQuerySchema = z.object({
    checkInId: z.string().uuid(),
  })

  const { checkInId } = validateCheckInQuerySchema.parse(request.query)

  const validadeCheckInUseCase = makeValidateCheckInUseCase()

  await validadeCheckInUseCase.execute({
    checkInId,
  })

  return reply.status(204).send()
}
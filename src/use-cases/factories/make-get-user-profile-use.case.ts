import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { GetUserUseCase } from '../get-user-profile'

export function makeGetUserProfileUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const useCase = new GetUserUseCase(usersRepository)

  return useCase
}

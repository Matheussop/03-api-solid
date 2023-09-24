import { prisma } from '@/lib/prisma'
import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

export class RegisterUseCase {
  constructor(private usersRepositories: UsersRepository) {}

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepositories.findByEmail(email)

    if (userWithSameEmail) {
      throw new Error('Email is already exists.')
    }

    await this.usersRepositories.create({
      name,
      email,
      password_hash,
    })
  }
}

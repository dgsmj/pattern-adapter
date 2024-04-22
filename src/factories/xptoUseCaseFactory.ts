import { makeIdGeneratorFactory } from "./idGeneratorFactory"
import { UseCaseInterface } from "../interfaces/useCaseInterface"
import { XptoUseCase } from "../usecases/xptoUseCase"

// Cria a instância da classe e injeta tudo o que o for necessário para funcionar
export const makeXptoUseCaseFactory = (): UseCaseInterface  => {
  const idGenerator = makeIdGeneratorFactory()
  const useCase = new XptoUseCase(idGenerator)
  return useCase
}
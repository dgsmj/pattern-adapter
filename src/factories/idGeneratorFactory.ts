import { IdGeneratorAdapter } from "../adapters/idGeneratorAdapter"
import { IdGeneratorInterface } from "../interfaces/idGeneratorInterface"

// Cria a instância da classe e injeta tudo o que o for necessário para funcionar
export const makeIdGeneratorFactory = (): IdGeneratorInterface  => {
  const idGenerator = new IdGeneratorAdapter()
  return idGenerator
}
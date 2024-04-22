import { IdGeneratorInterface } from "../interfaces/idGeneratorInterface"
import { IdGeneratorNativeAdapter } from "../adapters/idGeneratorNativeAdapter"

// Cria a instância da classe e injeta tudo o que o for necessário para funcionar
export const makeIdGeneratorNativeFactory = (): IdGeneratorInterface  => {
  const idGenerator = new IdGeneratorNativeAdapter()
  return idGenerator
}
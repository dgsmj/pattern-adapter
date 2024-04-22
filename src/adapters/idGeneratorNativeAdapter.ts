import { IdGeneratorInterface } from "../interfaces/idGeneratorInterface"
import { randomUUID } from "node:crypto"

/**
 * Implementação da interface/contrato, classe concreta, nesse caso usando uma lib interna, porém sua aplicação não sabe.
 * 
 * Imaginando o cenário onde sua aplicação terá vários lugares o uso dessa interface (outros casos de uso por exemplo),
 * se for necessário trocar a lib da implementação por uma outra, será transparente para sua aplicação 
 * e você irá fazer a manutenção em um único lugar, apenas aqui no adapter :)
 */
export class IdGeneratorNativeAdapter implements IdGeneratorInterface {
  generate(): string {
    return randomUUID()
  }
}
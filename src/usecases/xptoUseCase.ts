import { IdGeneratorInterface } from "../interfaces/idGeneratorInterface"
import { UseCaseInterface } from "../interfaces/useCaseInterface"

export class XptoUseCase implements UseCaseInterface {
  constructor(
    /**
     * Sua aplicação só irá conhecer a interface/contrato, quem está por baixo dos panos pra ela tanto faz
     * 
     * Imaginando o cenário onde sua aplicação terá vários lugares o uso dessa interface (outros casos de uso por exemplo),
     * se for necessário trocar a lib da implementação por uma outra, será transparente para sua aplicação 
     * e você irá fazer a manutenção em um único lugar, apenas no adapter :)
     */
    private readonly idGenerator: IdGeneratorInterface
  ) { }

  // Nesse caso de uso, está retornando void e dê exemplo, fazendo um um console.log
  execute(): void {
    console.log('lógica para fazer tal coisa')
    console.log({
      id: this.idGenerator.generate(),
      name: 'Brunno'
    })
  }
}


import { MallardDuck } from './MallardDuck'
import { ModelDuck } from './ModelDuck'
import { RocketPoweredFly } from './flyBehaviors/RocketPoweredFly';

export class Simulator {
  static run(): void {
    const mallard = new MallardDuck
    mallard.display()
    mallard.swim()
    mallard.quack()
    mallard.fly()

    console.log('------------')

    const model = new ModelDuck
    model.display()
    model.fly()
    model.setFlyBehavior(new RocketPoweredFly)
    model.fly()
  }
}

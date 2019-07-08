import { Duck } from './Duck'
import { FlyWithWings } from './flyBehaviors/FlyWithWings'
import { Quack } from './quackBehaviors/Quack'

export class MallardDuck extends Duck {
  constructor() {
    super()
    this.flyBehavior = new FlyWithWings
    this.quackBehavior = new Quack
  }

  display() {
    console.log('mallard duck')
  }
}

import { Duck } from './Duck'
import { DoNotFly } from './flyBehaviors/DoNotFly'
import { Quack } from './quackBehaviors/Quack'

export class ModelDuck extends Duck {
  constructor() {
    super()
    this.flyBehavior = new DoNotFly
    this.quackBehavior = new Quack
  }

  display() {
    console.log('model duck')
  }
}

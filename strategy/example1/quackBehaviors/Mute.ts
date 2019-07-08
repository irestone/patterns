import { IQuackBehavior } from './IQuackBehavior'

export class Mute implements IQuackBehavior {
  quack() {
    console.log('...')
  }
}

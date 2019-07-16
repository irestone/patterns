import { IFlyBehavior } from './IFlyBehavior'

export class DoNotFly implements IFlyBehavior {
  fly() {
    console.log('not flying')
  }
}

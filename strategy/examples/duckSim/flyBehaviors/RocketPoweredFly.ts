import { IFlyBehavior } from './IFlyBehavior'

export class RocketPoweredFly implements IFlyBehavior {
  fly() {
    console.log('flying on a rocket')
  }
}

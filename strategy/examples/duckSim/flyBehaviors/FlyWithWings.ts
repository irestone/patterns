import { IFlyBehavior } from './IFlyBehavior'

export class FlyWithWings implements IFlyBehavior {
  fly() {
    console.log('flying w/ wings')
  }
}

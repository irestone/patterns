import { IFlyBehavior } from './flyBehaviors/IFlyBehavior'
import { IQuackBehavior } from './quackBehaviors/IQuackBehavior'

export abstract class Duck {
  protected flyBehavior: IFlyBehavior
  protected quackBehavior: IQuackBehavior

  public setFlyBehavior(fb: IFlyBehavior) {
    this.flyBehavior = fb
  }

  public setQuackBehavior(qb: IQuackBehavior) {
    this.quackBehavior = qb
  }

  public fly(): void {
    this.flyBehavior.fly()
  }

  public quack(): void {
    this.quackBehavior.quack()
  }

  public swim(): void {
    console.log('swimming')
  }

  abstract display(): void
}

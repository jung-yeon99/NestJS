export class SuperEntity<T> {
  constructor(entity: Partial<T>) {
    Object.assign(this, entity);
  }
}

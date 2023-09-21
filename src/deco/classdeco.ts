function reportableClassDecorator<T extends { new (...args: any[]): object }>(
  constructor: T,
) {
  return class extends constructor {
    reportingURL = 'https://www.example.com';
  };
}
@reportableClassDecorator
class BugReport {
  type = 'report';
  tilte: string;

  constructor(t: string) {
    this.tilte = t;
  }
}

const bug = new BugReport('Needs dark mode');
console.log(bug);

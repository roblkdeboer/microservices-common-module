import { Stan } from 'node-nats-streaming';
import { Subjects } from '../subjects';

interface Event {
  subject: Subjects;
  data: any;
}

export abstract class Publisher<T extends Event> {
  // Abstract properties must be defined by the subclass
  abstract subject: T['subject'];

  private client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  //   Return a promise and resolve it to be able to make it an async function
  //   Will resolve with a promise with no type
  publish(data: T['data']): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) {
          return reject(err);
        }
        console.log('Event published to subject', this.subject);

        resolve();
      });
    });
  }
}

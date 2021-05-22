import faker from 'faker';

export const avatar = () => faker.image.avatar();
export const firstName = () => faker.name.firstName();
export const date = () =>
  new Date(faker.datatype.datetime()).toLocaleDateString('en-US', {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  });
export const content = () => faker.lorem.sentence();

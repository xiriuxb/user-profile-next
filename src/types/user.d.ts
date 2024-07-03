export type User = {
  name: string;
  lastName: string;
  about: string;
  interests: Interest[];
  email: string;
};

export type Interest = {
  name: string;
  description: string;
};

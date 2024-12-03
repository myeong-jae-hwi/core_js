type User = {
  id: number;
  name: string;
  email: string;
};

const user: Omit<User, "email"> = {
  id: 1,
  name: "jaehwi",
};

type User3 = {
  id: number;
  name: string;
  email: string;
  address: {
    lat: number;
    long: number;
  };
};

const user3: Partial<User3> = {
  name: "jaewhi",
};

type User4 = {
  id: number;
  name: string;
  eamil: string;
};

const user4: Readonly<User4> = {
  id: 1,
  name: "jaehwi",
  eamil: "aaa@aaaa.aaa",
};

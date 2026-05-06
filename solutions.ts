//* Problem 1:

const filterEvenNumbers = (value: number[]): number[] => {
  return value.filter((num) => num % 2 === 0);
};

const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

//* Problem 2:

const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

const result2 = reverseString("typescript");

//* Problem 3:

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
};

const result3 = checkType(34);

//* Problem 4:

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const user = { id: 1, name: "John Doe", age: 21 };

const result4 = getProperty(user, "name");

//* Problem 5:
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return {
    ...book,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
const result5 = toggleReadStatus(myBook);

//* Problem 6:

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
const result6 = student.getDetails();

//* Problem 7:

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((element) => arr2.includes(element));
};

const result7 = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(result7);

const person: {
    name: string;
    age: number;
    hobbies: string[];        // array
    role: [number, string]    // tuple
} = {
    name: 'Marc',
    age: 43,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

person.role.push(444);
// person.role[1] = 10;
person.role = [178, 'what'];

console.log(person);

let favoriteActivites: string[];
favoriteActivites = ['Sport'];

for (const hobby of favoriteActivites) {
    console.log(hobby.toLowerCase());
}
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

enum Role { ADMIN, READ_ONLY = 9, AUTHOR };

const user = {
    name: 'Jared',
    age: 30,
    hobbies: ['Gaming', 'Knitting'],
    role: Role.ADMIN
}

let favoriteActivites: string[];
favoriteActivites = ['Sport'];

for (const hobby of favoriteActivites) {
    console.log(hobby.toLowerCase());
}

if (user.role === Role.ADMIN) {
    console.log('is an admin');
}
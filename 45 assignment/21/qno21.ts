// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let myProfile:{
    name:string;
    age:number;
    rollNumber:number;
    address:{
        city:string;
        country:string;
    }
    center:string
    days:string
}={
    name:"umer amin",
    age: 24,
    rollNumber:397798,
    address:{
        city:"Karachi",
        country:"Pakistan"
    },
    center:"Governer House",
    days:"Monday 7:00 to 10:00 PM",

}

console.log(myProfile);
console.log(myProfile.name);
console.log(myProfile.age);
console.log(myProfile.rollNumber);
console.log(myProfile.address);
console.log(myProfile.center);
console.log(myProfile.days);







//if-else-if
let m1=89,m2=78,m3=66,m4=67,m5=78;
let total =m1+m2+m3+m4+m5;
let Avg=total/5;
let grade="";
if(m1>40&&m2>40&&m3>40&&m4>40&&m5>40)
{
if(Avg>=70)grade="Distinction";
else if(Avg>=60)grade="FirstClass";
else if(Avg=>50)grade="SecondClass";
else grade="Third Class";
console.log(`Grade:${grade}\nTotal Marks:${total}\n Percentage:${Avg}%`);
}
else{
    console.log("Result: Fail");
}
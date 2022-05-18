//method overridding
/*
class A
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    incAge()
    {
        this.age=this.age+10;
    }
}

class B extends A
{
    incAge()
    {
        this.age=this.age+20;
    }
    
}

const x=new A("superman",60);
const y=new B("spiderman",70);

y.incAge();
x.incAge();
console.log(x.name,x.age);
console.log(y.name,y.age);
*/

//static method
class Article
{
    constructor(title,year)
    {
        this.title=title;
        this.year=year;
    }
    static compare(a,b)
    {
        return a.year-b.year;
    }
}

const x=[new Article("Great",2020),new Article("Majestic",2002),new Article("Astounding",2021)];
x.sort(Article.compare);
console.log(x[0].title);




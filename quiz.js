value=0;
var number=document.getElementsByName("number");
let book=document.getElementsByName("book");
let car=document.getElementsByName("car");
let ingredient=document.getElementsByName("ingredient");
let language=document.getElementsByName("language");
let years=document.getElementsByName("years");
let titles=document.getElementsByName("titles");
let lights=document.getElementsByName("lights");
let person=document.getElementsByName("person");
let meaning=document.getElementsByName("meaning");

function submit(){
    switch(value){
        case 0:
            document.getElementById("begin").style.display="none";
            value++;
        case 1:
            document.getElementById("Q1").style.display="block";
            for(i=0;i<number.length;i++){
                if(number[i].checked){
                    value++;
                }
            }
            break;
        case 2:
            document.getElementById("Q1").style.display="none";
            document.getElementById("Q2").style.display="block";
            for(i=0;i<book.length;i++){
                if(book[i].checked){
                    value++;
                }
            }
            break;
        case 3:
            document.getElementById("Q2").style.display="none";
            document.getElementById("Q3").style.display="block";
            for(i=0;i<car.length;i++){
                if(car[i].checked){
                    value++;
                }
            }
            break;
        case 4:
            document.getElementById("Q4").style.display="block";
            document.getElementById("Q3").style.display="none";
            for(i=0;i<ingredient.length;i++){
                if(ingredient[i].checked){
                    value++;
                }
            }
            break;
        case 5:
            document.getElementById("Q5").style.display="block";
            document.getElementById("Q4").style.display="none";
            for(i=0;i<language.length;i++){
                if(language[i].checked){
                    value++;
                }
            }
            break;
        case 6:
            document.getElementById("Q6").style.display="block";
            document.getElementById("Q5").style.display="none";
            for(i=0;i<years.length;i++){
                if(years[i].checked){
                    value++;
                }
            }
            break;
        case 7:
            document.getElementById("Q7").style.display="block";
            document.getElementById("Q6").style.display="none";
            for(i=0;i<titles.length;i++){
                if(titles[i].checked){
                    value++;
                }
            }
            break;
        case 8:
            document.getElementById("Q8").style.display="block";
            document.getElementById("Q7").style.display="none";
            for(i=0;i<lights.length;i++){
                if(lights[i].checked){
                    value++;
                }
            }
            break;
        case 9:
            document.getElementById("Q9").style.display="block";
            document.getElementById("Q8").style.display="none";
            for(i=0;i<person.length;i++){
                if(person[i].checked){
                    value++;
                }
            }
            break;
        case 10:
            document.getElementById("Q10").style.display="block";
            document.getElementById("Q9").style.display="none";
            for(i=0;i<meaning.length;i++){
                if(meaning[i].checked){
                    value++;
                }
            }
            break;
        default:
    }
}
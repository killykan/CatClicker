$(function(){

  let container = $(".wrapper");

  class CatClicker {

      constructor(name, url, id){
        this.name = name;
        this.url = url;
        this.id = id;
        this.count = 0
        this.create = function(){
          let count = this.count;
          let kitten = this.name;
          let box = $("<div class=box id="+ id + "><figure><img src=" + url + "><figcaption>"+ name + "</figcaption></figure></div>");
          let countMessage = $("<span>You clicked " + kitten + " : <span id=counter" + id +">" + count + "</span>  times</span>");

          box.on("click", function(){
            count++;
            $("#counter"+ id).text(count);
            console.log(`you clicked ${kitten} ${count} times.`);
          });
          container.append(box);
          box.append(countMessage);


        }
      }


  }
  let cat1 = new CatClicker("Meoww1", "images/hannah-troupe.jpg", "box_one");
  let cat2 = new CatClicker("Meoww2", "images/marko-blazevic.jpg", "box_two");
  let cat3 = new CatClicker("Meoww3", "images/freddie-marriage.jpg", "box_three");
  let cat4 = new CatClicker("Meoww4", "images/simone-dalmeri.jpg", "box_four");
  let cat5 = new CatClicker("Meoww5", "images/koen-eijkelenboom.jpg", "box_five");
  let cats = [cat1, cat2, cat3, cat4, cat5];
  for(let cat of cats){
    cat.create();
  }











})

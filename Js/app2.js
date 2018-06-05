$(function(){

  let container = $(".wrapper");
  let catNav = $("<nav class=list></nav>");
  container.append(catNav);
  catNav.append("<ul></ul>");


  class CatClicker {

      constructor(name, url, id, i){
        this.name = name;
        this.url = url;
        this.id = id;
        this.i = i;
        this.count = 0
        this.create = function(){
          let count = this.count;
          let kitten = this.name;
          let box = $("<div class=box id="+ id + "><figure><img src=" + url + "><figcaption>"+ name + "</figcaption></figure></div>");
          let countMessage = $("<span>You clicked " + kitten + " : <span id=counter" + id +">" + count + "</span>  times</span>");
          /*let catList = $("<li class=catli><button id=btn_" + i + " type=button>" + name + "</button></div>")
          catNav.children().append(catList);
          let catBtn = $("#btn_" + i);

          catBtn.on("click", function(){
            $("#box_" + id).show("slow");
          });*/

          box.on("click", function(){
            count++;
            $("#counter"+ id).text(count);
            console.log(`you clicked ${kitten} ${count} times.`);
          });
          container.append(box);
          box.append(countMessage);


        }
        this.create2 = function(){
          let catList = $("<li class=catli><button id=btn_" + i + " type=button>" + name + "</button></div>")
          catNav.children().append(catList);
          let catBtn = $("#btn_" + i);

          catBtn.on("click", function(){
            if($(".box").hasClass("show")){
              $(".box").removeClass("show").addClass("hidden");
            };
            $("#" + id).toggleClass("hidden show");


          });
        }

      }


  }
  let cat1 = new CatClicker("Meoww1", "images/hannah-troupe.jpg", "box_one", "one");
  let cat2 = new CatClicker("Meoww2", "images/marko-blazevic.jpg", "box_two", "two");
  let cat3 = new CatClicker("Meoww3", "images/freddie-marriage.jpg", "box_three", "three");
  let cat4 = new CatClicker("Meoww4", "images/simone-dalmeri.jpg", "box_four", "four");
  let cat5 = new CatClicker("Meoww5", "images/koen-eijkelenboom.jpg", "box_five", "five");
  let cats = [cat1, cat2, cat3, cat4, cat5];
  for(let cat of cats){
    cat.create();
    cat.create2();
  }

let boxCat = $(".box");
boxCat.addClass("hidden");











})

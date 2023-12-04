// const loto = function (min, max, count){
//     const draw = new Set();

//     // `size` permet de récuperer le nombre d'element dans un Set
//     //Draw=Tirage 
//     while(draw.size < count){
//           const random =  Math.floor(Math.random() * (max - min) + 1);
//           draw.add(random)
//        }
//            console.log(draw);
// };
//      const gagnant = function(){
//     }
//     loto(1, 8, 5) 
//     module.exports = {loto, gagnant}



    const loto = function ({ min, max, count }) {
    const draw = new Set();

    // `size` permet de récuperer le nombre d'element dans un Set
    //Draw=Tirage 

    while (draw.size < count) {
    const random = Math.floor(Math.random() * (max - min +1) + min);
    // on ajoute le nombre "1" pour attein maximum des nombre de 20--->50
    draw.add(random);
  }
  return Array.from(draw);
   };
    //    La méthode Array.from() permet de créer une nouvelle instance
    //     d'Array (une copie superficielle) à partir d'un objet itérable ou semblable à un tableau.
  //    console.log(draw);

   
       const gagnant = function(players){

        const randomIndex = Math.floor(Math.random() * players.length);

        return players[randomIndex]

       }
       
    //  console.log(loto({ min: 10, max: 20, count: 5 })); 
       //appliquant la methode array.from
    //    loto({min:1, max:8, count:5})

       module.exports = {loto, gagnant}
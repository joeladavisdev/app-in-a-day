// Create a class for meals (spaghetti, x, y)
// create a class for ingredients that goes inside the meal
// create a class for the quantity that goes into each ingredient

// Create an object that lists
class meals = {

    const (spaghetti) = {
        name: "spaghetti",
        ingredients: {
            beef: '1lb',
            pasta: '1 box',
            tomatoSauce: '1 jar'
        }
    }
    const (tacos) = {
        name: "taco",
        ingredients: {
            beef: '1lb',
            tacoSeasoning: '1pk',
            tacoShells:'1 box'
        }
    }
    const (burgers) = {
        name: "burgers",
        ingredients: {
            beef: '1lb',
            buns: '4',
            tomato:'1',
            onions: '1/2',
            lettuce: 'To your liking'
        }
    }
}
// const steak = {
//     name: "steak",
//     ingredients: {
//       beef: '1lb',
//       butter: '4tbsp'
//       rosemary: 
//     }
//   }
  const meals = []
  console.log(spaghetti.ingredients)
  for (ingredient in spaghetti.ingredients) {
    console.log(ingredient)
    console.log(spaghetti.ingredients[ingredient])
  }
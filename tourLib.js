/* // The data model for tour is as follows
{
  "name": "Best of Paris in 7 Days Tour",
  "info": "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  "image": "https://www.course-api.com/images/tours/tour-1.jpeg",
  "price": "1,995"
}
 */
let tourArray = [];

let nextId = 1;

function getAll() {
  return tourArray;
}

function addOne(name, info, image, price) {
  // Check if any parameter is empty or undefined
  if (!name || !info || !image || !price) {
    return false;
  }

  const newTour = {
    id: nextId++,
    name,
    info,
    image,
    price,
  };

  tourArray.push(newTour);
  return newTour;
}

function findById(id) {
  const tour = tourArray.find((item) => item.id == id);
  if (tour) {
    return tour;
  } else {
    return false;
  }
}

function updateOneById(id, updatedData) {
  const tour = findById(id);
  if (tour) {
    // Update properties only if provided in updatedData
    if (updatedData.name) {
      tour.name = updatedData.name;
    }
    if (updatedData.info) {
      tour.info = updatedData.info;
    }
    if (updatedData.image) {
      tour.image = updatedData.image;
    }
    if (updatedData.price) {
      tour.price = updatedData.price;
    }
    return tour;
  }
  return false;
}

function deleteOneById(id) {
  const tour = findById(id);
  if (tour) {
    const initialLength = tourArray.length;
    tourArray = tourArray.filter((tour) => tour.id != id);
    return tourArray.length < initialLength; // Indicate successful deletion if the length has decreased
  }
  return false; // Return false if the item was not found
}

if (require.main === module) {
  // Add tour
  let result = addOne(
    "Best of Paris in 7 Days Tour",
    "Paris is synonymous with the finest things",
    "https://www.course-api.com/images/tours/tour-1.jpeg",
    "1,995");
  console.log(result);
  // Add another tour
  result = addOne(
    "Best of Burlin in 5 Days Tour",
    "Burlin is synonymous with the finest things",
    "https://www.course-api.com/images/tours/tour-2.jpeg",
    "1,395");
  console.log(result);

  console.log("getAll called:", getAll());

  console.log("findById called:", findById(1));

  console.log("updateOne called:", updateOneById(1, { info: "Paris is not synonymous with the finest things", price: "1,899" }));
  console.log("findById called after item updated:", findById(1));

  console.log("deleteOneById called:", deleteOneById(1));
  console.log("findById called after item deleted:", findById(1));
}

Tour = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = Tour;

async function fetchData() {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = response.json();
  return data;
}

export default async function organizeData() {
  const data = await fetchData();
  const clothing = [];
  for (let i = 0; i < data.length; i++) {
    clothing.push({
      category: data[i].category,
      title: data[i].title,
      price: data[i].price,
      image: data[i].image,
      rating: data[i].rating.rate,
    });
  }
  return clothing;
}

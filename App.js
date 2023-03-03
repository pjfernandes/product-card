import { StyleSheet, Text, View } from 'react-native';

import ProductCard from './components/ProductCard';

const foodData = [
  { name: "Beef Burguer", calories: "70", price: "12", image: "https://static.vecteezy.com/ti/vetor-gratis/p3/554568-hamburger-do-queijo-da-comida-lixo-do-verao-gratis-vetor.jpg" },
  { name: "Pancakes", calories: "60", price: "15", image: "https://cdn-icons-png.flaticon.com/512/5814/5814149.png" }
  ];

export default function App() {
  return (
    <View style={styles.container}>
      {foodData.map((e) => {return(<ProductCard data={e}/>)})}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

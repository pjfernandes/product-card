import React from 'react';
import { FaFire } from 'react-icons/fa';
import { StyleSheet } from 'react-native'

const ProductCard = ({data}) => {
  return (
    <div style={styles.container}>
      <div>
        <h2>{data.name}</h2>
        <p style={styles.calories}><FaFire style={{color: 'red'}}/> {data.calories} calories</p>
        <p style={styles.price}>${data.price}.00</p>
      </div>
      <div>
        <img src={`${data.image}`} alt="" style={styles.image}/>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    border: 'solid 1px grey',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    fontFamily: "Arial",
    alignItems: 'center',
    padding: '10px',
    marginTop: '15px',
    width: '380px'
  },
  image: {
    height: '150px'
  },
  calories: {
    color: 'grey'
  },
  price: {
    color: 'darkorange',
    fontWeight: 'bold'
  }
});

export default ProductCard

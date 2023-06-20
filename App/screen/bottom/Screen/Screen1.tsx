import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
// import { Card } from 'react-native-paper';

const Screen1 = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView>
        <View style={styles.container}>
          {/* Home Page Image */}
          <Image
            source={require('../../../assets/images/home/04/home-6-rev-img-02.jpg')}
            style={styles.image}
          />
          <View style={styles.viewTextStyle}>
            <Text style={styles.textImage}>
              100% Organic Farm And Vege Shop
            </Text>
          </View>
          {/* button */}
          <View style={styles.viewMoreBox}>
            <TouchableOpacity>
              <Text style={styles.textViewMore}>View More....</Text>
            </TouchableOpacity>
          </View>
          {/* Bullets */}
          <Text style={styles.bullets}>1/3</Text>
        </View>

        {/* License */}
        <View>
          <Text style={styles.text}>Hard Work & Best Quality</Text>
          <Text
            style={{
              fontSize: 20,
              paddingLeft: 20,
              padding: 15,
              paddingBottom: 20,
              color: 'black',
            }}>
            Ullamcorper eget nulla facilisi etiai dignissim diam commodo viverr
            maecenas accums.
          </Text>
          <Image
            source={require('../../../assets/images/home/03/Image-8.png')}
            style={{
              width: 130,
              height: 130,
              alignSelf: 'center',
              paddingBottom: 30,
            }}
          />
        </View>

        {/* Portraits */}
        <View>
          <View style={styles.portraitImageView}>
            <Image
              source={require('../../../assets/images/home/03/h6-img-3.jpg')}
              style={styles.portraitImage}
            />
          </View>
          <Text style={styles.portraitTag}>Organic Farm</Text>
        </View>

        <View>
          <View style={styles.portraitImageView}>
            <Image
              source={require('../../../assets/images/home/03/h6-img-4.jpg')}
              style={styles.portraitImage}
            />
          </View>
          <Text style={styles.portraitTag}>Eco Packages</Text>
        </View>

        <View>
          <View style={styles.portraitImageView}>
            <Image
              source={require('../../../assets/images/home/03/h6-img-5.jpg')}
              style={styles.portraitImage}
            />
          </View>
          <Text style={styles.portraitTag}>Fresh Products</Text>
        </View>

        {/* Items Description */}

        <View style={{backgroundColor: '#fdfbf1', marginTop: 100}}>
          <Image
            source={require('../../../assets/images/home/05/h6-img-6.3.png')}
            style={{
              height: 200,
              width: 250,
              alignSelf: 'center',
              marginVertical: 40,
            }}
          />

          {/* Description */}
          <View style={{padding: 10}}>
            <View style={styles.describeContainer}>
              {/* <Image source={require('../../')}/> */}
              <Text>icon</Text>
              <Text style={styles.describeTitle}>Crop items</Text>
            </View>
            <Text style={styles.description}>
              In hac habitasse platea ived ictums tibulum rhonc us est.
            </Text>
          </View>

          <View style={{padding: 10}}>
            <View style={styles.describeContainer}>
              {/* <Image source={require('../../')}/> */}
              <Text>icon</Text>
              <Text style={styles.describeTitle}>Always good</Text>
            </View>
            <Text style={styles.description}>
              In hac habitasse platea ived ictums tibulum rhonc us est.
            </Text>
          </View>

          <View style={{padding: 10}}>
            <View style={styles.describeContainer}>
              {/* <Image source={require('../../')}/> */}
              <Text>icon</Text>
              <Text style={styles.describeTitle}>All organic</Text>
            </View>
            <Text style={styles.description}>
              In hac habitasse platea ived ictums tibulum rhonc us est.
            </Text>
          </View>

          <View style={{padding: 10}}>
            <View style={styles.describeContainer}>
              {/* <Image source={require('../../')}/> */}
              <Text>icon</Text>
              <Text style={styles.describeTitle}>Hoeing items</Text>
            </View>
            <Text style={styles.description}>
              In hac habitasse platea ived ictums tibulum rhonc us est.
            </Text>
          </View>

          <View style={{padding: 10}}>
            <View style={styles.describeContainer}>
              {/* <Image source={require('../../')}/> */}
              <Text>icon</Text>
              <Text style={styles.describeTitle}>Friendly team</Text>
            </View>
            <Text style={styles.description}>
              In hac habitasse platea ived ictums tibulum rhonc us est.
            </Text>
          </View>

          <View style={{padding: 10}}>
            <View style={styles.describeContainer}>
              {/* <Image source={require('../../')}/> */}
              <Text>icon</Text>
              <Text style={styles.describeTitle}>Eco friendly</Text>
            </View>
            <Text style={styles.description}>
              In hac habitasse platea ived ictums tibulum rhonc us est.
            </Text>
          </View>
          {/* catagories end */}
          <View style={styles.container}>
            <Image
              source={require('../../../assets/images/home/04/h6-paralax-img-1.3.jpg')}
              style={styles.endCatagoriesImage}
            />
            <View style={styles.endCatagoriesView}>
              <Text style={styles.endCatagoriesText}>
                100% Organic Farm. Farming for better fit future.
              </Text>
            </View>
          </View>
        </View>

        {/* Product sell */}

        <View style={{marginTop: 50}}>
          <Text style={styles.text}>OUR ORGANIC PRODUCTS</Text>
          <View style={styles.cardView}>
            <View style={styles.cardContainer}>
              <Image
                source={require('../../../assets/images/home/04/home-6-product-02.jpg')}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Red Hot Peppers</Text>
              <Text style={{color: 'black'}}>$60.00</Text>
            </View>
            <View style={styles.cardContainer}>
              <Image
                source={require('../../../assets/images/home/04/Home-6-product-03-2.jpg')}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Broccoli</Text>
              <Text style={{color: 'black'}}>$52.00</Text>
            </View>
          </View>

          <View style={styles.cardView}>
            <View style={styles.cardContainer}>
              <Image
                source={require('../../../assets/images/home/04/home-6-product-03.jpg')}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Red Cabbage</Text>
              <Text style={{color: 'black'}}>$50.00</Text>
            </View>
            <View style={styles.cardContainer}>
              <Image
                source={require('../../../assets/images/home/04/Home-6-product-04.jpg')}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Organic red onion</Text>
              <Text style={{color: 'black'}}>$60.00</Text>
            </View>
          </View>

          <View style={styles.cardView}>
            <View style={styles.cardContainer}>
              <Image
                source={require('../../../assets/images/home/04/home-6-product-05.jpg')}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Organic Potato</Text>
              <Text style={{color: 'black'}}>$45.00</Text>
            </View>
            <View style={styles.cardContainer}>
              <Image
                source={require('../../../assets/images/home/03/product-03.jpg')}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Carrots</Text>
              <Text style={{color: 'black'}}>$50.00</Text>
            </View>
          </View>

          <View style={styles.cardView}>
            <View style={styles.cardContainer}>
              <Image
                source={require('../../../assets/images/home/03/product-04.jpg')}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Raw Artichoke</Text>
              <Text style={{color: 'black'}}>$40.00</Text>
            </View>
            <View style={styles.cardContainer}>
              <Image
                source={require('../../../assets/images/home/03/product-10.jpg')}
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>Green Beans</Text>
              <Text style={{color: 'black'}}>$40.00</Text>
            </View>
          </View>
        </View>
        {/* catagories end */}
        <View style={styles.container}>
            <Image
              source={require('../../../assets/images/home/04/h6-paralax-img-2.jpg')}
              style={styles.endCatagoriesImage}
            />
            <View style={styles.endCatagoriesView}>
              <Text style={styles.endCatagoriesText}>
                If it's good for the planet, it's good for you.
              </Text>
            </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1.5,
  },
  image: {
    overflow: 'hidden',
    height: 670,
    width: 700,
    zIndex: 5,
    opacity: 1,
  },
  text: {
    marginTop: 50,
    padding: 20,
    paddingBottom: 0,
    fontSize: 34,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#000',
    letterSpacing: -1,
  },
  bullets: {
    fontSize: 10,
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 20,
    top: 640,
    flex: 1,
    alignSelf: 'center',
  },
  textImage: {
    textTransform: 'uppercase',
    fontSize: 55,
    fontWeight: 'bold',
    color: '#000',
    textDecorationLine: 'none',
    width: 300,
    lineHeight: 65,
    letterSpacing: 0,
    textAlign: 'left',
    opacity: 1,
  },
  viewTextStyle: {
    position: 'absolute',
    left: 25,
    top: 200,
    zIndex: 10,
  },
  viewMoreBox: {
    flex: 1,
    position: 'absolute',
    zIndex: 10,
    top: 470,
    margin: 10,
    padding: 20,
    backgroundColor: '#162e09',
    left: 20,
  },
  textViewMore: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  portraitImage: {
    flex: 1,
    alignSelf: 'center',
    width: 300,
    height: 430,
  },
  portraitImageView: {
    flex: 1,
    marginTop: 30,
    padding: 15,
    paddingBottom: 5,
  },
  portraitTag: {
    fontSize: 30,
    flex: 1,
    left: 50,
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  describeTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  describeContainer: {
    flex: 1,
    alignContent: 'center',
    flexDirection: 'row',
    padding: 8,
    paddingBottom: 5,
  },
  description: {
    fontSize: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    color: 'black',
  },

  endCatagoriesText: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#ffffff',
    textDecorationLine: 'none',
    width: 400,
    lineHeight: 65,
    letterSpacing: 0,
    textAlign: 'left',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 20,
    opacity: 0.9,
  },
  endCatagoriesView: {
    position: 'absolute',
    left: 25,
    zIndex: 10,
  },
  endCatagoriesImage: {
    overflow: 'hidden',
    height: 400,
    width: 700,
    zIndex: 5,
    opacity: 1,
    marginTop: 50,
  },
  cardView: {
    padding: 20,
    flex: 1,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  cardContainer: {
    width: 170,
    backgroundColor: '#fdfbf1',
    height: 200,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.75)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 10,
    elevation: 6,
  },
  productImage: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignSelf: 'center',
  },
  productTitle:{
    textTransform: 'uppercase',
    fontWeight: '800',
    fontSize: 15,
    color: '#000',
  },
});

export default Screen1;

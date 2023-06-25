import useProductStore from '../screen/bottom/zustand/productStore';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const ProductList: React.FC = () => {
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const createProduct = useProductStore((state) => state.createProduct);
  const updateProduct = useProductStore((state) => state.updateProduct);
  const deleteProduct = useProductStore((state) => state.deleteProduct);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCreateProduct = () => {
    const newProduct: Product = {
      id: Math.ceil(Math.random() * 1000000),
      title,
      description,
      price: parseFloat(price),
      category: '',
      image: '',
    };
    createProduct(newProduct);
    setTitle('');
    setDescription('');
    setPrice('');
  };

  const handleUpdateProduct = (productId: number) => {
    const updatedProduct: Product = {
      id: productId,
      title,
      description,
      price: parseFloat(price),
      category: '',
      image: '',
    };
    updateProduct(updatedProduct);
    setTitle('');
    setDescription('');
    setPrice('');
  };

  const handleDeleteProduct = (productId: number) => {
    deleteProduct(productId);
  };

  const handleSortByPrice = () => {
    setSortBy('price');
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = sortBy === 'price' ? [...filteredProducts].sort((a, b) => a.price - b.price) : filteredProducts;

  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.formInput} placeholder="Title" value={title} onChangeText={setTitle} />
        <TextInput style={styles.formInput} placeholder="Description" value={description} onChangeText={setDescription} />
        <TextInput style={styles.formInput} placeholder="Price" value={price} onChangeText={setPrice} />
        <TouchableOpacity style={styles.updateButton} onPress={() => handleUpdateProduct(item.id)} >
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteProduct(item.id)}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity onPress={handleSortByPrice} style={styles.sortButton}>
          <Text style={styles.sortButtonText}>Sort by Price</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <TextInput style={styles.formInput} placeholder="Title" value={title} onChangeText={setTitle} />
        <TextInput style={styles.formInput} placeholder="Description" value={description} onChangeText={setDescription} />
        <TextInput style={styles.formInput} placeholder="Price" value={price} onChangeText={setPrice} />
        <TouchableOpacity style={styles.formButton} onPress={handleCreateProduct}>
          <Text style={styles.formButtonText}>Add Product</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={sortedProducts} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F7E5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#D3E8C2',
    padding: 8,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    borderWidth: 0,
    marginLeft: 8,
  },
  sortButton: {
    backgroundColor: '#9ACD32',
    padding: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  sortButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  formContainer: {
    marginBottom: 10,
    backgroundColor: '#D3E8C2',
    padding: 16,
    borderRadius: 8,
  },formInput: {
    borderWidth: 1,
    borderColor: '#B1C897',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  formButton: {
    backgroundColor: '#9ACD32',
    padding: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  formButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  productCard: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#DAF7A6',
    borderRadius: 8,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productDescription: {
    marginBottom: 4,
  },
  productPrice: {
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  updateButton: {
    backgroundColor: '#9ACD32',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    padding: 8,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default ProductList;

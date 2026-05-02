import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');
  const [isEntered, setIsEntered] = useState(false);

  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('#ffe4ec');
  const [showColors, setShowColors] = useState(false);

  const colors = ['#ffe4ec', '#e0bbff', '#d0f0c0', '#fff5ba', '#cde7ff'];

  // SCREEN 1
  if (!isEntered) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>💖 Welcome 💖</Text>

        <TextInput
          style={styles.input}
          placeholder="Masukkan nama kamu..."
          placeholderTextColor="#999"
          onChangeText={setName}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (name.trim() !== '') {
              setIsEntered(true);
            }
          }}
        >
          <Text style={styles.btnText}>Masuk ✨</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // SCREEN 2
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      {/* Greeting */}
      <Text style={styles.header}>
        Halo, {savedName || name} 💕
      </Text>

      {/* Tombol Simpan Nama */}
      <TouchableOpacity
        style={[styles.btn, { marginBottom: 15 }]}
        onPress={() => {
          if (name.trim() !== '') {
            setSavedName(name);
          }
        }}
      >
        <Text style={styles.btnText}>Simpan</Text>
      </TouchableOpacity>

      {/* Counter */}
      <Text style={styles.counter}>{count}</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => count > 0 && setCount(count - 1)}
        >
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Icon Warna */}
      <TouchableOpacity
        style={styles.colorIcon}
        onPress={() => setShowColors(!showColors)}
      >
        <Text style={{ fontSize: 24 }}>🎨</Text>
      </TouchableOpacity>

      {/* Pilihan Warna */}
      {showColors && (
        <View style={styles.colorRow}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorCircle, { backgroundColor: color }]}
              onPress={() => setBgColor(color)}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4ec',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  title: {
    fontSize: 26,
    marginBottom: 30,
    color: '#ff69b4',
    fontWeight: 'bold'
  },

  header: {
    fontSize: 22,
    marginBottom: 10,
    color: '#c71585',
    fontWeight: '600'
  },

  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ffb6c1'
  },

  counter: {
    fontSize: 50,
    marginBottom: 20,
    color: '#ff1493',
    fontWeight: 'bold'
  },

  row: {
    flexDirection: 'row',
    marginBottom: 20
  },

  btn: {
    backgroundColor: '#ffb6c1',
    padding: 15,
    borderRadius: 20,
    marginHorizontal: 10,
    width: 140,
    alignItems: 'center'
  },

  btnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },

  colorIcon: {
    marginTop: 20
  },

  colorRow: {
    flexDirection: 'row',
    marginTop: 15
  },

  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 8,
    borderWidth: 2,
    borderColor: '#fff'
  }
});
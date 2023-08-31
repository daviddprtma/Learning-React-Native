import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style=
      {
        {
          color: 'red'
        }
      }>Hello World!</Text>
      <Pet type="cat"/>
      <Pet type="dog"/>
      <Pet type="duck"/>
    <Nisbi></Nisbi>
    <Kotak></Kotak>
    &nbsp;
    <RgbKotak></RgbKotak>
    </View>
  );
}

const voice = (type) => {
  var v= "";
  if(type=="cat"){
    v = "Meoow Meow";
  }
  else if (type=="dog"){
    v = "Woof woof";
  }
  else if(type=="duck"){
    v = "kwaak kwaak";
  }
  else if(type=="feed"){
    v = "nyam nyam";
  }
  else if(type=="cuddle"){
    v = "Zzzzz...";
  }
  return v
};

const Pet = (prop) => {
  const [action,setAction] = useState(prop.type);  
  return (
    <View>
    <Text>Iam your pet! Iam a {prop.type}. {voice(action)}</Text>
    <Button title='Feed me' onPress={()=>setAction('feed')}></Button>
    <Button title='Cuddle me' onPress={()=>setAction('cuddle')}></Button>
    <Button title='Play with me' onPress={()=>setAction(prop.type)}></Button>    
    </View>
  );
};

const Nisbi = () => {
  const [nilai,setNilai] = useState(0);
  const predikat = (nilai) => {
    return nilai > 85 ? 'Sangat Baik (A)' :
      nilai > 70 ? 'Baik (B)' :
        nilai > 55 ? 'Cukup (C)' :
          'Kurang (D)'
  };
  
  return (
    <View>
      <Text>Skor anda: {nilai} dengan predikat {predikat(nilai)}</Text>
      <Button title='nilai+5' onPress={()=>setNilai(nilai+5)}></Button>
      <Button title='nilai-5' onPress={()=>setNilai(nilai-5)}></Button>
    </View>
  );
}

const Kotak = () => {
  const [kotak,setAction] = useState(0);
  const buatKotakBesar = () => {
    setAction(kotak + 20);
  };

  return (
    <View>
      <Text style={{fontSize: 50, backgroundColor: 'rgb(255,0,0)', width:kotak, height: kotak}}>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </Text> 
      &nbsp;
      <Button title='kotak Besar' onPress={()=>buatKotakBesar()}></Button>
    </View>
  );
}

const RgbKotak = () => {
  const [boxSize, setBoxSize] = useState(100);
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  const increaseBoxSize = () => {
    const newSize = boxSize + 20;
    setBoxSize(newSize); 
  };

  const updateColor = (channel, increment) => {
    if (channel === 'red') {
      setRedValue(Math.min(255, Math.max(0, redValue + increment)));
    } else if (channel === 'green') {
      setGreenValue(Math.min(255, Math.max(0, greenValue + increment)));
    } else if (channel === 'blue') {
      setBlueValue(Math.min(255, Math.max(0, blueValue + increment)));
    }
  }
  return(
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          width: boxSize,
          height: boxSize,
          backgroundColor: `rgb(${redValue},${greenValue},${blueValue})`,
          marginBottom: 20,
        }}
      />
      <View style={{ flexDirection: 'row' }}>
        <Button title="R+" onPress={() => updateColor('red', 10)} />
        <Button title="R-" onPress={() => updateColor('red', -10)} />
        <Button title="G+" onPress={() => updateColor('green', 10)} />
        <Button title="G-" onPress={() => updateColor('green', -10)} />
        <Button title="B+" onPress={() => updateColor('blue', 10)} />
        <Button title="B-" onPress={() => updateColor('blue', -10)} />
      </View>
      <Button title="Besarkan Kotak" onPress={increaseBoxSize} />
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

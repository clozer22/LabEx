import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  ImageBackground,
} from 'react-native';
import profile from './profile.png';
import proj1 from './project1.png';
import hobbies from './hobbies1.png';
import smoke from './bgsmoke.jpg';
import React, { useState, useEffect } from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// const projects = [
//   {
//     id: 1,
//     project_name: "Sales Ordering System",
//     description: "Personal Project"
//   }
// ]

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [currentView, setCurrentView] = useState('profile');

  const handlePress = () => {
    setCurrentView((prevView) => {
      switch (prevView) {
        case 'profile':
          return 'Projects';
        case 'Projects':
          return 'Details';
        case 'Details':
          return 'Hobbies';
        default:
          return 'profile';
      }
    });
  };

  return (
    <ImageBackground source={smoke} style={{ width: '100%', height: '100%' }}>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={{ height: 600, justifyContent: 'center' }}
          onPress={handlePress}>
          {currentView === 'profile' && (
            <>
              <View style={styles.profileContainer}>
                <Image source={profile} style={styles.profilePic} />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Mark Joseph D. Aballe
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: 'white',
                  paddingTop: 30,
                }}>
                Bachelor of Science in Information Technology
              </Text>
            </>
          )}
          {currentView === 'Projects' && (
            <>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: 'white',
                  position: 'relative',
                  top: 2,
                }}>
                PROJECTS
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  color: 'white',
                  marginBottom: 10,
                }}>
                Personal Project
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Sales Ordering System
              </Text>
              <View>
                <Image
                  source={proj1}
                  style={{ width: 250, height: 150, borderRadius: 10 }}
                />
              </View>
            </>
          )}
          {currentView === 'Details' && (
            <>
              <View style={styles.profileContainer}>
                <Image source={profile} style={styles.profilePic} />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                EDUCATION
              </Text>
              <Card
                style={{
                  backgroundColor: 'transparent',
                  alignItems: 'center',
                }}>
                <Text style={{ color: 'white', fontSize: 15, paddingTop: 50 }}>
                  Elementary: Niugan Elementary School
                </Text>
                <Text style={{ color: 'white', fontSize: 15, paddingTop: 50 }}>
                  HighSchool: Malabon National HighSchool
                </Text>
                <Text style={{ color: 'white', fontSize: 15, paddingTop: 50 }}>
                  Senior HighSchool: Arellano University (EEC)
                </Text>
              </Card>
            </>
          )}
          {currentView === 'Hobbies' && (
            <>
              <View style={styles.profileContainer}>
                <Image source={hobbies} style={{ height: 200, width: 250 }} />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                HOBBIES
              </Text>
              <Card
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                }}>
                <Text style={{ color: 'black', fontSize: 25 }}>
                  Online Games
                </Text>
              </Card>
              <Card
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  marginTop: 15,
                }}>
                <Text style={{ color: 'black', fontSize: 25 }}>
                  Reading Books
                </Text>
              </Card>
              <Card
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  marginTop: 15,
                }}>
                <Text style={{ color: 'black', fontSize: 25 }}>
                  Listening to Music
                </Text>
              </Card>
              <Card
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  marginTop: 15,
                }}>
                <Text style={{ color: 'black', fontSize: 25 }}>
                  Playing Guitar
                </Text>
              </Card>
            </>
          )}
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePic: {
    borderRadius: 100,
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#FB2576',
  },
});

import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';


function ProfileCard(): React.JSX.Element {
  
  return (
    <SafeAreaView style={{alignItems:'center'}}>
      <View style={styles.card}>
      <Image 
        source={require('../../assets/bg.jpg')} 
        style={styles.bgImage}
      />
      <Image 
        source={require('../../assets/profile.jpeg')} 
        style={styles.profileImage} 
        />
        <Text style={styles.name}>Juan Nova</Text>
        <Text style={styles.subtitle}>Software Developer</Text>
        <Text style={styles.intro}>Hi there! I am Juan, a Software Development student @SAIT.</Text>
        <View style={styles.socialIcons}>
            <Image 
            source={require('../../assets/fb.png')} 
            style={styles.icon} 
            />
            <Image 
            source={require('../../assets/insta.png')} 
            style={styles.icon} 
            />
            <Image 
            source={require('../../assets/linkedin.png')} 
            style={styles.icon} 
            />
            <Image 
            source={require('../../assets/twitter.png')} 
            style={styles.icon} 
            />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
    card: {
        alignItems: 'center',
        height: 500,
        width: '80%',
        elevation: 20,
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 20,
    },

    bgImage: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 70,
        borderWidth: 7,
        borderColor: 'white',
        position: 'absolute',
        top: 110,
        resizeMode: 'cover',
    },

    name: {
        fontSize: 30,
        marginTop: 70,
        fontFamily: 'Poppins-Bold',
        color: 'black',
    },

    subtitle: {
        fontSize: 20,
        marginTop: 1,
        fontFamily: 'Poppins-Regular',
    },

    intro: {
        fontSize: 18,
        marginTop: 25,
        fontFamily: 'sans-serif',

    },

    socialIcons: {
        flexDirection: 'row',
        marginTop: 30,
    },

    icon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        resizeMode: 'cover',
        margin: 10,
    },

 });

export default ProfileCard;
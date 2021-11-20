/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isDetailsScreen, setIsDetailsScreen] = React.useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    // backgroundColor: 'white',
  };
  const handleDetailsScreen = () => {
    setIsDetailsScreen(prevScreen => !prevScreen);
  };
  const DeatilsScreen = () => {
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {/* header */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            paddingTop: 20,
          }}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 10,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="chevron-left" size={20} color="black" />
          </View>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 10,
              backgroundColor: '#F5CA48',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MaterialCommunityIcons name="star" size={20} color="white" />
          </View>
        </View>
        <ScrollView>
          {/* Title */}
          <View style={{marginLeft: 20, marginTop: 30}}>
            <Text
              style={{
                fontSize: 32,
                fontWeight: '700',
                fontFamily: 'Montserrat-Regular',
                color: 'black',
              }}>
              Primavera
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontSize: 32,
                fontWeight: '700',
                fontFamily: 'Montserrat-Regular',
                color: 'black',
              }}>
              Pizza
            </Text>
          </View>
          {/* Price */}
          <View style={{marginLeft: 20, marginTop: 20}}>
            <Text
              style={{
                fontSize: 32,
                fontWeight: '600',
                color: '#E4723C',
                fontFamily: 'Montserrat-Regular',
              }}>
              {'\u0024'}5.99
            </Text>
          </View>
          {/* body  */}
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              marginTop: 30,
              justifyContent: 'space-between',
            }}>
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                    fontWeight: '300',
                    color: '#CDCDCD',
                  }}>
                  Size
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Montserrat-Regular',
                    fontWeight: '600',
                    color: 'black',
                  }}>
                  Medium 14"
                </Text>
              </View>
              <View style={{marginTop: 20}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                    fontWeight: '300',
                    color: '#CDCDCD',
                  }}>
                  Crust
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Montserrat-Regular',
                    fontWeight: '600',
                    color: 'black',
                  }}>
                  Thin Crust
                </Text>
              </View>
              <View style={{marginTop: 20}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                    fontWeight: '300',
                    color: '#CDCDCD',
                  }}>
                  Delivery in
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Montserrat-Regular',
                    fontWeight: '600',
                    color: 'black',
                  }}>
                  30 min
                </Text>
              </View>
            </View>
            <View style={{left: 50}}>
              <Image source={require('./assets/images/pizza1.png')} />
            </View>
          </View>
          {/* Ingredients */}
          <View style={{marginLeft: 20, marginTop: 60}}>
            <Text
              style={{
                fontFamily: 'Montserrat-Regular',
                fontSize: 16,
                fontWeight: '700',
                color: 'black',
              }}>
              Ingredients
            </Text>
            <ScrollView
              style={{marginTop: 19}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    height: 80,
                    width: 100,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{height: 80, width: 80, resizeMode: 'contain'}}
                    source={require('./assets/images/ham.png')}
                  />
                </View>
                <View
                  style={{
                    height: 80,
                    width: 100,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 20,
                  }}>
                  <Image
                    style={{height: 80, width: 80, resizeMode: 'contain'}}
                    source={require('./assets/images/garlic.png')}
                  />
                </View>
                <View
                  style={{
                    height: 80,
                    width: 100,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 20,
                  }}>
                  <Image
                    style={{height: 80, width: 80, resizeMode: 'contain'}}
                    source={require('./assets/images/tomato.png')}
                  />
                </View>
                <View
                  style={{
                    height: 80,
                    width: 100,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 20,
                  }}>
                  <Image
                    style={{height: 80, width: 80, resizeMode: 'contain'}}
                    source={require('./assets/images/ham.png')}
                  />
                </View>
              </View>
            </ScrollView>
            <View style={{marginTop: 58, marginBottom: 10}}>
              <TouchableOpacity
                style={{
                  width: '96%',
                  backgroundColor: '#F5CA48',
                  height: 70,
                  borderRadius: 50,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                    fontWeight: '700',
                    color: 'black',
                  }}>
                  Place an order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  return !isDetailsScreen ? (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
          paddingTop: 20,
          marginHorizontal: 20,
        }}>
        <Image
          style={{height: 40, width: 40, borderRadius: 50}}
          source={require('./assets/images/profile.png')}
        />
        <Icon name="menu" size={30} color="black" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginLeft: 20, marginTop: 30}}>
          <Text
            style={{
              fontFamily: 'Montserrat-Regular',
              fontSize: 16,
              color: 'black',
            }}>
            Food
          </Text>
          <Text
            style={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 32,
              fontWeight: '700',
              marginTop: 5,
              color: 'black',
            }}>
            Delivery
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
            marginTop: 30,
          }}>
          <Icon name="search" size={16} color="black" />
          <TextInput
            style={{
              flex: 1,
              marginLeft: 10,
              borderBottomWidth: 1,
              borderBottomColor: Colors.textlight,
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 16,
              marginBottom: 5,
            }}
            placeholder="Search"
          />
        </View>
        <View style={{marginLeft: 20, marginTop: 30}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Montserrat-Regular',
              fontWeight: '700',
              color: 'black',
            }}>
            Categories
          </Text>
          <ScrollView
            style={{marginTop: 15}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View
              style={{
                width: 105,
                height: 177,
                backgroundColor: '#F5CA48',
                marginLeft: 0,
                borderRadius: 20,
              }}>
              <Image
                style={{
                  height: 60,
                  width: 60,
                  alignSelf: 'center',
                  marginTop: 24,
                }}
                source={require('./assets/images/pizza-icon.png')}
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                  }}>
                  Pizza
                </Text>
                <View
                  style={{
                    height: 26,
                    width: 26,
                    backgroundColor: '#FFF',
                    borderRadius: 40,
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <MaterialCommunityIcons
                    style={{
                      alignSelf: 'center',
                    }}
                    name="greater-than"
                    size={10}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: 105,
                height: 177,
                backgroundColor: '#FFF',
                marginLeft: 20,
                borderRadius: 20,
              }}>
              <Image
                style={{
                  height: 60,
                  width: 60,
                  alignSelf: 'center',
                  marginTop: 24,
                }}
                source={require('./assets/images/shrimp-icon.png')}
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                  }}>
                  Seafood
                </Text>
                <View
                  style={{
                    height: 26,
                    width: 26,
                    backgroundColor: '#F26C68',
                    borderRadius: 40,
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <MaterialCommunityIcons
                    style={{
                      alignSelf: 'center',
                    }}
                    name="greater-than"
                    size={10}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                width: 105,
                height: 177,
                backgroundColor: '#FFF',
                marginLeft: 20,
                borderRadius: 20,
              }}>
              <Image
                style={{
                  height: 60,
                  width: 60,
                  alignSelf: 'center',
                  marginTop: 24,
                }}
                source={require('./assets/images/soda-icon.png')}
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                    color: 'black',
                  }}>
                  Soft Drinks
                </Text>
                <View
                  style={{
                    height: 26,
                    width: 26,
                    backgroundColor: '#F26C68',
                    borderRadius: 40,
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <MaterialCommunityIcons
                    style={{
                      alignSelf: 'center',
                    }}
                    name="greater-than"
                    size={10}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{marginLeft: 20, marginTop: 30}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Montserrat-Regular',
              fontWeight: '700',
              color: 'black',
            }}>
            Popular
          </Text>
          <View
            style={{
              width: '96%',
              backgroundColor: '#FFF',
              height: 161,
              marginTop: 11,
              borderRadius: 25,
              overflow: 'hidden',
            }}>
            <TouchableOpacity onPress={handleDetailsScreen}>
              <View style={{marginTop: 27, flexDirection: 'row'}}>
                <MaterialCommunityIcons
                  name="crown-outline"
                  size={15}
                  color="#F5CA48"
                  style={{marginLeft: 20}}
                />
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 14,
                    color: 'black',
                    marginLeft: 10,
                    marginBottom: 5,
                    fontWeight: '600',
                  }}>
                  top of the week
                </Text>
              </View>
              <View style={{marginHorizontal: 20, marginTop: 20}}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 16,
                    color: 'black',
                    fontWeight: '600',
                  }}>
                  Primavera Pizza
                </Text>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 12,
                    color: '#C4C4C4',
                    fontWeight: '500',
                    marginTop: 5,
                  }}>
                  Weight 540 gr
                </Text>
              </View>
              <View style={{alignSelf: 'flex-end'}}>
                <Image
                  style={{
                    marginRight: -70,
                    marginTop: -90,
                    height: 125,
                    width: 210,
                  }}
                  source={require('./assets/images/pizza1.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '96%',
              backgroundColor: '#FFF',
              height: 161,
              marginTop: 11,
              borderRadius: 25,
              overflow: 'hidden',
            }}>
            <View>
              <View style={{marginTop: 27, flexDirection: 'row'}}>
                <MaterialCommunityIcons
                  name="crown-outline"
                  size={15}
                  color="#F5CA48"
                  style={{marginLeft: 20}}
                />
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 14,
                    color: 'black',
                    marginLeft: 10,
                    marginBottom: 5,
                    fontWeight: '600',
                  }}>
                  top of the week
                </Text>
              </View>
              <View style={{marginHorizontal: 20, marginTop: 20}}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 16,
                    color: 'black',
                    fontWeight: '600',
                  }}>
                  Primavera Pizza
                </Text>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 12,
                    color: '#C4C4C4',
                    fontWeight: '500',
                    marginTop: 5,
                  }}>
                  Weight 540 gr
                </Text>
              </View>
              <View style={{alignSelf: 'flex-end'}}>
                <Image
                  style={{
                    marginRight: -70,
                    marginTop: -90,
                    height: 125,
                    width: 210,
                  }}
                  source={require('./assets/images/pizza1.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    DeatilsScreen()
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

{
  /* <View
style={{
  justifyContent: 'center',
  alignItems: 'flex-end',
  marginBottom: 858,
}}>
<Image
  style={{
    height: 225,
    width: 250,
    marginRight: -50,
    marginBottom: 110,
    resizeMode: 'contain',
  }}
  source={require('./assets/images/pizza1.png')}
/>
</View> */
}

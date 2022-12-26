import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';
import { xiaomi11T } from '../../assets';
import AmazonPayQuickActionCard from '../../components/Cards/AmazonPayQuickActionCard';
import CategoryCard from '../../components/Cards/CategoryCard';
import DealsOfTheDay from '../../components/Cards/DealsOfTheDay';
import RemindingActionsCard from '../../components/Cards/RemindingActionsCard';
import SpecialDealCard from '../../components/Cards/SpecialDealCard';
import Slide from '../../components/Slides';
import {colors} from '../../constants/theme.constant';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, styles.container]}>
          <Text>
            <Ion size={25} name={'location-outline'} />
          </Text>
          <Text>
            &nbsp; Deliver to Anand - New Delhi 110080{' '}
            <Ion name={'chevron-down-outline'} size={20} />
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true}>
        <View style={styles.slide}>
          <CategoryCard
            uri={
              'https://images.news18.com/ibnlive/uploads/2021/10/amazon-prime.jpg'
            }
            title={'Prime'}
          />
          <CategoryCard
            uri={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmW4QrDE7knBk2IUH0jtWhQ6PeXGW9E8vyOA&usqp=CAU'
            }
            title={'Best Deals'}
          />
          <CategoryCard
            uri={'https://m.media-amazon.com/images/I/51OeTCeAIgL._SL1000_.jpg'}
            title={'Mobile & Accesories'}
          />
          <CategoryCard
            uri={
              'data:image/jpeg;base64,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'
            }
            title={'Fashion'}
          />
          <CategoryCard
            uri={
              'https://yt3.ggpht.com/fBNVJ-Ywc2Kp8Ph-0EvCxP-JKk1aFAs-8Hbh0SCbwegM5_0ErzZkSyQVZEhxxk5xbubUwcnOMaA=s900-c-k-c0x00ffffff-no-rj'
            }
            title={'Mini Tv'}
          />
        </View>
      </ScrollView>
      <Slide>
        <SpecialDealCard />
      </Slide>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.quickAction}>
          <AmazonPayQuickActionCard />
          <RemindingActionsCard
            title={'Keep Shopping'}
            uri={
              'https://image01.realme.net/general/20220713/1657684351499.png.webp'
            }
          />
           <RemindingActionsCard
            title={'Pick up where you left off'}
            uri={
              'https://dlcdnwebimgs.asus.com/gain/e82d30d3-b305-4249-8b70-9fbf4eb4fafd/'
            }
          />
           <RemindingActionsCard
            title={'Explore more'}
            uri={
              'https://pbs.twimg.com/media/FjIAc6MUcAIgMTF.jpg'
            }
          />
           <RemindingActionsCard
            title={''}
            uri={
              'https://tinuiti.com/wp-content/uploads/legacysitecontent/cpcs/posts_01/2019/02/14143037/amazon-basics-2.png'
            }
          />

        </View>
      </ScrollView>
      <Image source={xiaomi11T} style={styles.banner} />
      <DealsOfTheDay />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: colors.secondary,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingStart: 10,
  },
  button: {},
  slide: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
  },
  quickAction: {
    marginTop: 10,
    backgroundColor: 'transparent',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  banner: {
    width: '100%',
    height:  300,
  }
});

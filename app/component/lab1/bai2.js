import {ScrollView, View} from 'react-native';
import SectionView from './sectionview';
import CardItem from './carditem';

export default function Bai2() {
  const img = require("../../../img/image.png")
  return (
    <View>
      <ScrollView style={{padding: 15}}>
        <SectionView title="Lịch trình">
          <CardItem
            location="Hồ Tràm, Vũng Tàu"
            time="09:00 AM - 12:00 AM, 12/12/2024"
            transport="Xe bus"
            image={img}
          />
        </SectionView>

        <SectionView title="Khách sạn">
          <CardItem
            name="LongLee"
            timeopen="06:00 AM - 12:00 AM"
            button="CHI TIẾT"
          />
        </SectionView>
      </ScrollView>
    </View>
  );
}

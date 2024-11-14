import {View} from 'react-native';
import {CustomSegmentedButtons} from '../custom_elements/CustomSegmentedButtons';
import {useState} from 'react';

export const HomeScreen = () => {
  const [value, setValue] = useState('');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 16,
      }}>
      <CustomSegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'walk',
            label: 'Walking',
          },
          {
            value: 'train',
            label: 'Transit',
          },
          {value: 'drive', label: 'Driving'},
        ]}
        textColor="#FFFFFF"
        secondaryTextColor="#666666"
        backgroundColor="#179999"
      />
    </View>
  );
};

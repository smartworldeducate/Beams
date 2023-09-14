import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainHeader from '../Components/Headers/MainHeader';
import colors from '../Styles/colors';
import {Div, ThemeProvider, Radio} from 'react-native-magnus';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-fontawesome-pro';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ViewInput from '../Components/ViewInput';
import Button from '../Components/Button/Button';
import EStyleSheet from 'react-native-extended-stylesheet';
import fontFamily from '../Styles/fontFamily';
import ViewInputTwo from '../Components/ViewInputTwo';
const ToilLeave = props => {
  const [fullDay, setFullDay] = useState(false);
  const [halfDay, setHalfDay] = useState(false);
  const [shortLeave, setShortLeave] = useState(false);
  const [withPay, setWithPay] = useState(false);
  const [withOutPay, setWithOutPay] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerVisibleTwo, setDatePickerVisibilityTwo] = useState(false);
  const [myDate, setMyDate] = useState('');
  const [dateTwo, setDateTwo] = useState('');
  const reportee = ['Muhammad Qasim Ali Khan', 'Asad Numan Shahid'];
  //one
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = date => {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    const dt = day + '-' + month + '-' + year;

    setMyDate(dt);
    hideDatePicker();
  };

  //second datetime picker
  const showDatePickerTwo = () => {
    setDatePickerVisibilityTwo(true);
  };

  const hideDatePickerTwo = () => {
    setDatePickerVisibilityTwo(false);
  };

  const handleDateConfirmTwo = date => {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    const dt = day + '-' + month + '-' + year;

    setDateTwo(dt);
    hideDatePickerTwo();
  };


  const fulDayHandle = () => {
    setFullDay(!fullDay);
  };
  const halfDayHandle = () => {
    setHalfDay(!halfDay);
  };
  const shortLeaveHandle = () => {
    setShortLeave(!shortLeave);
  };
  const withPayHandle = () => {
    setWithPay(!withPay);
  };
  const withOutPayHandle = () => {
    setWithOutPay(!withOutPay);
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F5F8FC'}}>
     <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        mode="date"
        isVisible={isDatePickerVisibleTwo}
        onConfirm={handleDateConfirmTwo}
        onCancel={hideDatePickerTwo}
      />
      <MainHeader
        text={'ToilLeave'}
        iconName={'arrow-left'}
        onpressBtn={() => props.navigation.goBack()}
      />
      
      <View
        style={{
          marginTop: hp(2),
          marginHorizontal: wp('5'),
          backgroundColor: '#fff',
          borderRadius: wp(10),
          shadowColor: '#000',
          shadowOpacity: 1,
          shadowRadius: wp('15'),
          elevation: 10,
        }}>
        <ViewInput
         dateText={myDate}
         dateFun={showDatePicker}
          iconName={'sliders'}
          placeholder={'Adjustment Date'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          // style={styles.textInputCustomStyle}
        />
      </View>
      <View
        style={{
          marginTop: hp(2),
          marginHorizontal: wp('5'),
          backgroundColor: '#fff',
          borderRadius: wp(10),
          shadowColor: '#000',
          shadowOpacity: 1,
          shadowRadius: wp('15'),
          elevation: 10,
        }}>
        <ViewInput
          dateText={dateTwo}
          dateFun={showDatePickerTwo}
          iconName={'calendar-days'}
          placeholder={'Off Day Worked'}
          placeholderColor={colors.loginTextColor}
          iconColor={colors.loginIconColor}
          // style={styles.textInputCustomStyle}
        />
      </View>
      
      <View
        style={{
          width: wp(90),
          marginHorizontal: hp(2.5),
          marginTop: hp(1.7),
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={withPayHandle}
          style={{flexDirection: 'row'}}>
          <View>
            <Radio
              style={{}}
              checked={withPay}
              activeColor={'#0EAA24'}
              inactiveColor={'#CDCDCD'}
              fontSize={30}
              onChange={withPayHandle}
            />
          </View>
          <View style={{marginVertical: hp(0.85), paddingHorizontal: hp(0.5)}}>
            <Text style={styles.radiotext}>Full Day Toil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={withOutPayHandle}
          style={{flexDirection: 'row'}}>
          <View>
            <Radio
              checked={withOutPay}
              activeColor={'#0EAA24'}
              inactiveColor={'#CDCDCD'}
              fontSize={30}
              onChange={withOutPayHandle}
            />
          </View>
          <View style={{marginVertical: hp(0.85), paddingHorizontal: hp(0.5)}}>
            <Text style={styles.radiotext}>Half Day Toil</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: hp(1.5),
          shadowColor: '#000',
          shadowOpacity: 0.5,
          shadowRadius: 4,
          elevation: 8,
          marginHorizontal: wp(5),
          marginTop: hp('2'),
        }}>
        <TextInput
          placeholder={'Reason'}
          placeholderColor={'gray'}
          placeholderTextColor="black"
          style={{
            height: hp(15),
            textAlignVertical: 'top',
            paddingLeft: wp('3'),
          }}
        />
      </View>

      <View style={{marginHorizontal: hp(2.5), marginTop: hp(2)}}>
        <SelectDropdown
          data={reportee}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={'Muhammad Qasim Ali Khan'}
          buttonTextAfterSelection={(selectedItem, index) => {
            console.log(selectedItem);
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={isOpened => {
            return (
              <View
                style={{
                  backgroundColor: '#FDEB13',
                  height: hp(7),
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 56,
                  marginLeft: -8,
                  borderRadius: 50,
                }}>
                <Icon type="light" name="user" color={'#444'} size={hp(3)} />
              </View>
            );
          }}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
          dropdownIconPosition={'left'}
        />
      </View>
      <TouchableOpacity
      activeOpacity={0.8}
        style={{
          marginTop: hp(25),
          marginHorizontal: hp(2.5),
          height: hp(6.5),
          justifyContent: 'center',
          backgroundColor: '#1C37A4',

          borderRadius: hp(50),
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.submittext}>SUBMIT REQUEST</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ToilLeave;

const styles = EStyleSheet.create({
  textInputView: {
    marginTop: hp('2'),
    justifyContent: 'center',
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('7'),
    borderRadius: wp('10'),
    borderColor: colors.grey,
    borderWidth: wp('0.1'),
    marginBottom: hp('2'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: wp('10'),
    shadowRadius: wp('10'),
    elevation: 10,
  },

  loginWithGoogle: {
    justifyContent: 'center',
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    flexDirection: 'row',
    height: hp('7'),

    borderRadius: wp('10'),
    borderColor: colors.grey,
    borderWidth: wp('0.1'),
    marginBottom: hp('2'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: wp('10'),
    shadowRadius: wp('10'),
    elevation: 10,
  },
  textInputCustomStyle: {
    // fontSize: '0.7rem',
    // height: hp('6'),
    // letterSpacing: -0.05,
    // paddingLeft: wp('3'),
    // color: '#363636',
    // fontWait: '500',
    // fontFamily: fontFamily.ceraMedium,
  },
  radiotext: {
    fontSize: '0.62rem',
    fontWaight: '500',
    color: '#363636',
    fontFamily: fontFamily.ceraMedium,
  },
  submittext: {
    color: '#fff',
    fontFamily: fontFamily.ceraMedium,
    fontSize: '0.7rem',
    // color:'#363636',
    fontWait: '500',
  },
  dropdown1BtnStyle: {
    width: '100%',
    height: hp(7),
    backgroundColor: '#FFF',
    borderRadius: 50,

    elevation: 8,
  },
  dropdown1BtnTxtStyle: {
    color: '#363636',
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraMedium,
    textAlign: 'left',
  },
  dropdown1DropdownStyle: {
    backgroundColor: '#EFEFEF',
    marginTop: hp(-3.85),
    borderRadius: hp(1.5),
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
    width: wp(100),
  },
  dropdown1RowTxtStyle: {
    color: '#444',
    textAlign: 'left',
    color: '#363636',
    fontSize: '0.7rem',
    fontFamily: fontFamily.ceraMedium,}
 
});

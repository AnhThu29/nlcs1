import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer} from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import SinhVien from './screens/SinhVien'
import AddSV from './screens/AddSV'
import UpSV from './screens/UpSV'
import MonHoc from './screens/MonHoc'
import AddMH from './screens/AddMH'
import UpMH from './screens/UpMH'


const AppNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    SinhVien: {
        screen: SinhVien
    },
    AddSV: {
        screen: AddSV
    },
    UpSV: {
        screen: UpSV
    },
    MonHoc: {
        screen: MonHoc
    },
    UpMH: {
        screen: UpMH
    },
})

export default createAppContainer(AppNavigator)

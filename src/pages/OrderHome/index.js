import React, { Component } from 'react';
import { View, Text, SafeAreaView, Alert, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { Button, Icon, Flex } from '@uiw/react-native';
import { shebeiMC } from '../../components/icons/signin';
import { ScrollView } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';

//获取设备名称
deviceName = () => {
  DeviceInfo.getDeviceName().then((deviceName) => {
    Alert.alert('此设备名称', deviceName, [{ text: '确定' }]);
    console.log('此设备名称', deviceName);
  });
};
//获取首次安装应用程序的时间（以毫秒为单位）
// firstInstallTime = () => {
//   DeviceInfo.getFirstInstallTime().then(firstInstallTime => {
//     Alert.alert('App首次安装时间', firstInstallTime, [{ text: '确定' }]);
//     console.log('App首次安装时间', firstInstallTime);
//   });
// }
//获取上次更新应用程序的时间（以毫秒为单位）
// lastUpdateTime = () => {
// DeviceInfo.getLastUpdateTime().then(lastUpdateTime => {
//   Alert.alert('App上次更新时间', lastUpdateTime, [{ text: '确定' }]);
//   console.log('App上次更新时间', lastUpdateTime);
// });
// }

//获取可用的存储大小（以字节为单位）
freeDiskStorage = () => {
  DeviceInfo.getFreeDiskStorage().then((freeDiskStorage) => {
    Alert.alert('可用存储大小', freeDiskStorage, [{ text: '确定' }]);
    console.log('可用存储大小', freeDiskStorage);
  });
};
//获取设备制造商
manufacturer = () => {
  DeviceInfo.getManufacturer().then((manufacturer) => {
    Alert.alert('该设备制造商', manufacturer, [{ text: '确定' }]);
    console.log('该设备制造商', manufacturer);
  });
};
//返回虚拟机将尝试使用的最大内存量（以字节为单位）。
maxMemory = () => {
  DeviceInfo.getMaxMemory().then((maxMemory) => {
    Alert.alert('最大内存量', maxMemory, [{ text: '确定' }]);
    console.log('最大内存量', maxMemory);
  });
};
//获取设备的电源状态，包括电池电量，是否已插入电源以及系统当前是否在低功耗模式下运行
state = () => {
  DeviceInfo.getPowerState().then((state) => {
    Alert.alert('设备的电源状态', state, [{ text: '确定' }]);
    console.log('设备的电源状态', state);
  });
};
//获取完整的磁盘存储大小，以字节为单位。
capacity = () => {
  DeviceInfo.getTotalDiskCapacity().then((capacity) => {
    console.log('完整的磁盘存储大小', capacity);
  });
};

//获取设备总内存，以字节为单位。
totalMemory = () => {
  DeviceInfo.getTotalMemory().then((totalMemory) => {
    console.log('设备总内存', totalMemory);
  });
};

// 获取应用程序的内存使用情况（以字节为单位）
// usedMemory = () => {
//   DeviceInfo.getUsedMemory().then(usedMemory => {
//     console.log('应用程序的内存使用情况', usedMemory)
//   });
// }

//告知设备是否处于飞行模式。
// airplaneModeOn = () => {
//   DeviceInfo.isAirplaneMode().then(airplaneModeOn => {
//     console.log('是否处于飞行模式', airplaneModeOn)
//   });
// }

//告知电池当前是否正在充电。
// isCharging = () => {
//   DeviceInfo.isBatteryCharging().then(isCharging => {
//     console.log('是否正在充电。', isCharging)
//   });
// }

//告知设备当前是否处于横向模式。
// DeviceInfo.isLandscape().then(isLandscape => {
//   console.log('否处于横向模式', isLandscape);
// });

// //返回支持的处理器体系结构版本的列表
// DeviceInfo.supportedAbis().then(abis => {
//   console.log('支持的处理器体系结构版本', abis);
// });

// //告知设备是否在设备级别关闭了位置服务（与特定于应用程序的权限无关）
// DeviceInfo.isLocationEnabled().then(enabled => {
//   console.log('是否在设备级别关闭了位置服务', enabled);
// });

// //告诉设备是否连接到有线耳机或蓝牙耳机
// DeviceInfo.isHeadphonesConnected().then(enabled => {
//   console.log('是否连接到耳机', enabled);
// })
// //获取设备运营商
// DeviceInfo.getCarrier().then(carrier => {
//   console.log('你当前手机运营商为：', carrier);
// })
export default class MyScreen extends Component {
  render() {
    //获取API级别
    // DeviceInfo.getApiLevel().then(apiLevel => {
    //   console.log('API级别', apiLevel)
    // });
    //告诉设备现在是否有任何摄像头。
    DeviceInfo.isCameraPresent()
      .then((isCameraPresent) => {
        console.log('是否有任何摄像头。', isCameraPresent);
      })
      .catch((cameraAccessException) => {
        console.log('是否有任何摄像头。', cameraAccessException);
      });
    //获取网络适配器的MAC地址。
    // DeviceInfo.getMacAddress().then(mac => {
    //   console.log('MAC地址。', mac)
    // });
    // //获取ANDROID_ID
    // DeviceInfo.getAndroidId().then(androidId => {
    //   console.log('androidId', androidId)
    // });

    // 产品所基于的基本操作系统
    // DeviceInfo.getBaseOs().then(baseOs => {
    //   console.log('操作系统', baseOs)
    // });

    // //以0到1之间的浮点数形式获取设备的电池电量。
    // DeviceInfo.getBatteryLevel().then(batteryLevel => {
    //   console.log('batteryLevel', batteryLevel)
    // });

    // //系统引导加载程序版本号。
    // DeviceInfo.getBootloader().then(bootloader => {
    //   console.log('bootloader', bootloader)
    // });

    // //硬件的名称（从内核命令行或/ proc）。
    // DeviceInfo.getHardware().then(hardware => {
    //   console.log('硬件的名称', hardware)
    // });

    // //主机名
    // DeviceInfo.getHost().then(host => {
    //   console.log('主机名', host)
    // });

    // //获取设备电话号码。
    // DeviceInfo.getPhoneNumber().then(phoneNumber => {
    //   console.log('获取设备电话号码', phoneNumber)
    // });

    // //整体产品的名称。
    // DeviceInfo.getProduct().then(product => {
    //   console.log('整体产品的名称', product)
    // });

    //获取应用程序名称。
    let appName = DeviceInfo.getApplicationName();
    //获取设备品牌。
    let brand = DeviceInfo.getBrand();
    //获取应用程序内部版本号。
    let buildNumber = DeviceInfo.getBuildNumber();
    //获取应用程序捆绑包标识符。
    let bundleId = DeviceInfo.getBundleId();
    //获取设备的唯一ID
    let uniqueId = DeviceInfo.getUniqueId();
    //获取应用程序版本。
    let version = DeviceInfo.getVersion();

    let deviceId = DeviceInfo.getDeviceId();
    let systemVersion = DeviceInfo.getSystemVersion();
    let headphonesConnected = DeviceInfo.isHeadphonesConnected();
    let batteryLevel = DeviceInfo.getBatteryLevel();
    let carrier = DeviceInfo.getCarrier();
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={require('../../utils/img/12.png')} style={{ flex: 1 }}>
          <ScrollView>
            <Swiper style={styles.wrapper} showsButtons={false} height={200} horizontal={false} autoplay autoplayTimeout={2}>
              <View style={styles.slide1}>
                <Text style={styles.text}>Hello Swiper</Text>
              </View>
              <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
              </View>
              <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
              </View>
            </Swiper>
            <View>
              <Button
                onPress={() => {
                  deviceName();
                }}
              >
                获取设备名称
              </Button>

              <Text>你当前使用的app为：{appName}</Text>
              <Text>你当前手机型号为：{deviceId}</Text>
              <Text>你当前系统为：{brand}</Text>
              <Text>你当前系统版本为：{systemVersion}</Text>
            </View>
            <View style={styles.flex}>
              <View style={[styles.flex, styles.container]}>
                <TouchableOpacity
                  onPress={() => {
                    deviceName();
                  }}
                  style={styles.item}
                >
                  <Flex align="center" justify="center" direction="column" style={{ flex: 1 }}>
                    <Icon xml={shebeiMC} />
                  </Flex>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    deviceName();
                  }}
                  style={styles.item}
                >
                  <Flex align="center" justify="center" direction="column" style={{ flex: 1 }}>
                    <Icon xml={shebeiMC} />
                  </Flex>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    deviceName();
                  }}
                  style={styles.item}
                >
                  <Flex align="center" justify="center" direction="column" style={{ flex: 1 }}>
                    <Icon xml={shebeiMC} />
                  </Flex>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    deviceName();
                  }}
                  style={styles.item}
                >
                  <Flex align="center" justify="center" direction="column" style={{ flex: 1 }}>
                    <Icon xml={shebeiMC} />
                  </Flex>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    totalMemory();
                  }}
                  style={styles.item}
                >
                  <Flex align="center" justify="center" direction="column" style={{ flex: 1 }}>
                    <Icon xml={shebeiMC} />
                  </Flex>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    capacity();
                  }}
                  style={styles.item}
                >
                  <Flex align="center" justify="center" direction="column" style={{ flex: 1 }}>
                    <Icon xml={shebeiMC} />
                  </Flex>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    state();
                  }}
                  style={styles.item}
                >
                  <Flex align="center" justify="center" direction="column" style={{ flex: 1 }}>
                    <Icon xml={shebeiMC} />
                  </Flex>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    maxMemory();
                  }}
                  style={styles.item}
                >
                  <Flex align="center" justify="center" direction="column" style={{ flex: 1 }}>
                    <Icon xml={shebeiMC} />
                  </Flex>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    manufacturer();
                  }}
                  style={styles.item}
                >
                  <Flex align="center" justify="center" direction="column" style={{ flex: 1 }}>
                    <Icon xml={shebeiMC} />
                  </Flex>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    deviceName();
                  }}
                  style={styles.item}
                >
                  <Flex align="center" justify="center" direction="column" style={{ flex: 1 }}>
                    <Icon xml={shebeiMC} />
                  </Flex>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    lastUpdateTime();
                  }}
                  style={styles.item}
                >
                  <Flex align="center" justify="center" direction="column" style={{ flex: 1 }}>
                    <Icon xml={shebeiMC} />
                  </Flex>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    firstInstallTime();
                  }}
                  style={styles.item}
                >
                  <Flex align="center" justify="center" direction="column" style={{ flex: 1 }}>
                    <Icon xml={shebeiMC} />
                  </Flex>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  flex: {
    flex: 1, // 比例权重为1，会填充整体屏幕
  },
  container: {
    marginTop: 25,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row', // View组件默认为纵向布局，这个改为横向布局
    flexWrap: 'wrap', // 宽度不足，可以换行
    justifyContent: 'space-between', // 等比例间距排列
    borderRadius: 5, // 设置圆角
    padding: 5,
  },
  item: {
    width: Dimensions.get('window').width / 5,
    height: 240 / 3,
    marginBottom: 20,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

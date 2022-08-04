import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Alert,
} from "react-native";

const ChickenThighs = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [numberItems, setNumberItems] = useState(0);
  const [chooseItem, setChooseItem] = useState(0);

  useEffect(() => {
    if (numberItems >= 0) {
      setNumberItems(numberItems);
    } else {
      alert("Chọn món ăn với số lượng lớn hơn 0");
      setNumberItems(0);
    }
  }, [numberItems]);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
            <Image
              source={require("../assets/chickenThighs.png")}
              style={styles.imgItemFoot}
            />
            <Text style={{ fontWeight: "bold", color: "#065fdb" }}>
             Đùi gà rán
            </Text>
            <Text style={styles.modalText}>
              Gà có thể nấu được hơn 50 món. Tuy nhiều và đa dạng như thế nhưng
              món ăn em thích nhất vẫn là gà rán.Thuật ngữ "gà rán" được sử dụng
              lần đầu trong tiếng Anh Hoa Kỳ vào những năm 1830. Nhưng phải đến
              những năm 1860-1870 mới xuất hiện trong sánh dạy nấu ăn của nước
              Mĩ. Nguồn gốc món gà rán ở các bang miền nam nước Mỹ được cho là
              bắt nguồn từ ẩm thực Scotland cùng ẩm thực Tây Phi.Các bước thực
              hiện vô cùng đơn giản.Đã có vô số thương hiệu trứ danh từ món ăn
              này. Gà rán không phải là món ăn tuổi thơ hay quá khứ nó là thuộc
              về mọi lứa tuổi. Em sẽ luôn ghi nhớ hương vị của món gà rán ngon
              tuyệt này.
            </Text>
          </View>
          <View style={{ alignItem: "center", justifyContent: "center" }}>
            <Text
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                marginLeft: 20,

              }}
            >
              <TouchableOpacity onPress={() => setNumberItems(numberItems - 1)}>
                <Text> ◀              </Text>
              </TouchableOpacity>
              <Text>{numberItems}</Text>
              <TouchableOpacity onPress={() => setNumberItems(numberItems + 1)}>
                <Text>          ▶</Text>
              </TouchableOpacity>
            </Text>
            <TouchableOpacity
              onPress={() => setChooseItem()}
              style={{
                borderRadius: 20,
                backgroundColor: "red",
                margin: 6,
                padding: 10,
              }}
            >
              <Text>Thêm vào giỏ hàng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={require("../assets/chickenThighs.png")}
          style={styles.itemFoot}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChickenThighs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#2196F3",
    position: "absolute",
    top: 0,
    right: 0,
    padding: 10,
    borderRadius: 10,
  },
  textStyle: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  imgItemFoot: {
    width: 200,
    height: 200,
    shadowColor: "blue",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 10,
    resizeMode: "contain",
  },
  itemFoot: {
    height: 200,
    shadowColor: "blue",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 10,
    resizeMode: "contain",
  },
});

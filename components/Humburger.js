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

const Humburger = () => {
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
              source={require("../assets/hamburger.png")}
              style={styles.imgItemFoot}
            />
            <Text style={{ fontWeight: "bold", color: "#065fdb" }}>
              Bánh Humburger
            </Text>
            <Text style={styles.modalText}>
              Tên hamburger có nguồn gốc từ tên của thành phố Hamburg,
              Đức,một người dân từ Hamburg được gọi là "Hamburger"; theo
              đó, bất cứ vật gì có nguồn gốc từ thành phố này hay được phổ biến
              đầu tiên tại đây được có tên gọi này. (Tuy nhiên, tên của loại đồ
              ăn này không được viết hoa). Đầu tiên một loại bánh có thịt bò xay
              tên là "thịt nướng Hamburg" (Hamburger steak) được nhắc đến trong
              một sách nấu ăn ở Mỹ năm 1891; món này được đặt giữa hai lát bánh
              mì, và được gọi là "bánh kẹp Hamburg" (Hamburger sandwich). Đến
              giữa thế kỷ 20, cả hai tên gọi này đã được đọc ngắn lại thành
              "hamburger" hay "burger"
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
                <Text> ◀ </Text>
              </TouchableOpacity>
              <Text>{numberItems}</Text>
              <TouchableOpacity onPress={() => setNumberItems(numberItems + 1)}>
                <Text> ▶</Text>
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
          source={require("../assets/hamburger.png")}
          style={styles.itemFoot}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Humburger;

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
  },
  itemFoot: {
    height: 200,
    shadowColor: "blue",
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    margin: 10,
  },
});

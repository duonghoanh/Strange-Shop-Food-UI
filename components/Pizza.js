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

const Pizza = () => {
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
              source={require("../assets/pizza.png")}
              style={styles.imgItemFoot}
            />
            <Text style={{ fontWeight: "bold", color: "#065fdb" }}>
              Mì Pizza
            </Text>
            <Text style={styles.modalText}>
              Để làm được 1 chiếc pizza al tagio hoặc pizza bỏ khay thì ta phải
              dùng tới một cái khay lớn có thể hình tròn hoặc hình chữ nhật để
              nướng, sau khi ra lò bánh sẽ được cắt bán theo yêu cầu của khách
              hàng. Phiên bản pizza này thường được bán ở các pizzeria, hay tại
              các tiệm bánh mì. Để làm loại bánh này ta phải dung nguyên liệu
              được hâm nóng cần thiết, nhào bột với tỉ lệ nước nhiều hơn và trải
              qua quá trình lên men trong điều kiện thích hợp để tạo ra loại
              bánh có hương vị đặc biệt. Loại bánh pizza này được đánh giá là
              rất kinh tế vì pizza được bán theo trọng lượng
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
          source={require("../assets/pizza.png")}
          style={styles.itemFoot}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Pizza;

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

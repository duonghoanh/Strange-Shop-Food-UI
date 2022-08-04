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

const Cake = () => {
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
              source={require("../assets/cake.png")}
              style={styles.imgItemFoot}
            />
            <Text style={{ fontWeight: "bold", color: "#065fdb" }}>
              Bánh ngọt
            </Text>
            <Text style={styles.modalText}>
              Các thành phần bánh được sử dụng phổ biến nhất bao gồm bột, đường,
              trứng, bơ hoặc dầu hoặc bơ thực vật, một chất lỏng và các chất
              men, như baking soda hoặc bột nở. Các thành phần bổ sung và hương
              liệu phổ biến bao gồm đồ khô, kẹo, hoặc trái cây tươi, các loại
              hạt, ca cao và chiết xuất như vani, với nhiều thay thế cho các
              thành phần chính. Bánh cũng có thể được làm đầy với chất bảo quản
              trái cây, các loại hạt hoặc các loại sốt tráng miệng (như kem bánh
              ngọt), đá lạnh với kem bơ hoặc các loại kem khác, và được trang
              trí với bánh hạnh nhân (marzipan), đường viền trang trí bánh
              (piped borders) hoặc kẹo trái cây
            </Text>
          </View>
          <View style={{ alignItem: "center", justifyContent: "center" }}>
            <Text
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                paddingLeft: 30,
              }}
            >
              <TouchableOpacity onPress={() => setNumberItems(numberItems - 1)}>
                <Text> ◀      </Text>
              </TouchableOpacity>
              <Text>{numberItems}</Text>
              <TouchableOpacity onPress={() => setNumberItems(numberItems + 1)}>
                <Text>           ▶</Text>
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
        <Image source={require("../assets/cake.png")} style={styles.itemFoot} />
      </TouchableOpacity>
    </View>
  );
};

export default Cake;

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

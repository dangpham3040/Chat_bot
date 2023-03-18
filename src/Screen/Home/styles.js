import { Dimensions } from 'react-native';
import { StyleSheet } from "react-native";
import { Colors } from '../../Utils/Color';
import { Fonts } from '../../Utils/Fonts';
import { common } from '../../Utils/common_styles';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
      header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
      },
      input: {
        height: 40,
        width: "80%",
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        color: "#000"
      },
      output: {
        fontSize: 16,
        margin: 20,
        textAlign: "center",
        color: "#000"
      },
})
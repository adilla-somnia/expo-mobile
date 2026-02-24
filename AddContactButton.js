import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

export default function AddContactButton() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={{marginRight: 10}}
          onPress={() => navigation.navigate('AddContact')}>
            <Ionicons name='add' size={30} color='white' ></Ionicons>
          </TouchableOpacity>
    )
}
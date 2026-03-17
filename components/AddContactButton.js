import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

export default function AddContactButton({ user }) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={{ marginRight: 10 }}
      onPress={() => navigation.navigate('AddContact', { user })}
    >
      <Ionicons name='add' size={30} color='white' ></Ionicons>
    </TouchableOpacity>
  )
}
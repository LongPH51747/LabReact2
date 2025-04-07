import { StyleSheet, Text, View } from "react-native";

const SectionView = ({ title, children }:{title: any, children: any}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5',
      padding: 15,
      marginVertical: 10,
      borderRadius: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  });
  
  export default SectionView;
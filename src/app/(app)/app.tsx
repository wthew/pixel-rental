import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HOME!</Text>
      <Link href='/test' asChild>

        <Button mode='contained'>
          Test
        </Button>

      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

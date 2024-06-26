import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  text: {
    color: Colors.primary,
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 100,
  },
  controlsButtonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    gap: 12,
    marginVertical: 28,
  },
  noAccessories: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noAccessoriesText: {
    fontSize: 18,
    color: Colors.primary,
  },
});

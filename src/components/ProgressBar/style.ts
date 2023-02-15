import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#29292E',
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    borderRadius: 32,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    color: '#C4C4CC',
    marginRight: 8,
  },
  tracker: {
    flex: 1,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#505059',
  },
  progress: {
    height: 4,
    backgroundColor: '#8257E5',
  },
  progressContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
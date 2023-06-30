import {StyleSheet} from 'react-native';

export const DashboardStyle = StyleSheet.create({
  dashboarContainer: {
    backgroundColor: '#E6E6E6',
    paddingHorizontal: 50,
    paddingVertical: 30,
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  dashboardBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 130,
    backgroundColor: '#0D99FF',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

import * as React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import ButtomCustom from '../../components/buttom-custom';

export interface HomeProps {
}

export interface HomeState {
  randomNumber: number;
}

export default class HomeComponent extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      randomNumber: 0,
    };
  }

  public render() {
    return (
      <View style={styles.container}>
         <Text>Number: {this.state.randomNumber}</Text>
         <ButtomCustom
          styleButtom={styles.buttonHome}
          styleText={styles.textButtom}
          textButtom='Change Number'
          onPress={() => {
            this.setState({
              randomNumber: Math.random() * 100,
            });
          }}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeNumber: {
    marginBottom: 35,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3b5998',
  },
  textButtom: {
    marginBottom: 0,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  textInput: {
    width: '80%',
    height: 50,
    borderColor: '#3b5998',
    borderWidth: 1,
    borderRadius: 10,
    padding: '3%',
  },
  viewButtom: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonHome: {
    height: 50,
    width: 150,
    backgroundColor: '#3b5998',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
});

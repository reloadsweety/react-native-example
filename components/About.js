import React, { useState, useEffect } from 'react';
import { View, Text, Button, ScrollView, FlatList } from 'react-native';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts';

// class AboutScreen extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: [
//         {
//           id: 1,
//           title: 'Example data'
//         }
//       ]
//     };
//   }

//   componentDidMount() {
//     console.log('componentDidMount called');

//     axios.get(URL).then(res => {
//       this.setState({ data: res.data });
//     });
//   }

//   render() {
//     return (
//       <View>
//         <Text>This is about page</Text>
//         <Button
//           title="Push"
//           onPress={() => this.props.navigation.navigate('Detail')}
//         />
//         <FlatList
//           data={this.state.data}
//           renderItem={({ item }) => {
//             return (
//               <Text
//                 style={{
//                   padding: 12,
//                   margin: 12,
//                   color: '#f37'
//                 }}
//                 key={item.id}
//               >
//                 {item.body}
//               </Text>
//             );
//           }}
//         />
//       </View>
//     );
//   }
// }

class AboutScreenClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      user: {
        id: 1,
        name: 'name'
      }
    };
  }

  handle() {
    this.setState({
      name: 'xx'
    });
  }
}

const AboutScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    axios.get(URL).then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <View>
      <Text>This is about page</Text>

      <Button title="Push" onPress={() => navigation.navigate('Home')} />

      {data.map(value => {
        return <Text key={value.id}>{value.title}</Text>;
      })}
    </View>
  );
};

export default AboutScreen;

import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';

import { fetchData, fetchSuccess } from '../redux/action';

const Detail = ({ navigation }) => {
  const dispatch = useDispatch();
  const isFetching = useSelector(state => {
    return state.posts.isFetching;
  });

  const posts = useSelector(state => {
    return state.posts.data;
  });

  console.log('posts', posts);

  return (
    <View>
      <Text>This is detail page</Text>

      <Button title="Go to about" onPress={() => navigation.push('Home')} />

      <Button
        title="dispatch"
        onPress={() => {
          dispatch(fetchData());
        }}
      />

      <Button
        title="success"
        onPress={() => {
          dispatch(fetchSuccess([{ id: 1, name: 'Test' }]));
        }}
      />
    </View>
  );
};

export default Detail;

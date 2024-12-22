import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

export default function DetailDescription() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iste explicabo consequuntur ipsum iure debitis, aperiam fuga doloremque quibusdam! Modi, architecto? Ducimus incidunt id repellat quaerat. Corrupti molestiae culpa quod voluptatem assumenda ullam reiciendis totam aut quidem ipsum officiis, itaque doloribus ea aliquam, recusandae optio provident saepe eius quam a.';

  const truncatedText = fullText.split(' ').slice(0, 16).join(' ') + '...';

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.description}>
          {isExpanded ? fullText : truncatedText}
        </Text>
        <Pressable onPress={toggleReadMore}>
          <Text style={styles.readMore}>
            {isExpanded ? 'Read less' : 'Read more'}
          </Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#41444B',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#758694',
    lineHeight: 24,
  },
  readMore: {
    fontSize: 16,
    color: '#DE8F5F',
    marginTop: 10,
    fontFamily: 'Poppins-SemiBold',
  },
});

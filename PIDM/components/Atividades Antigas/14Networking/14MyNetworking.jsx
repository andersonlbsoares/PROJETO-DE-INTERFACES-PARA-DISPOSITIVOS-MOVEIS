import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { Table, Row } from 'react-native-table-component';
import { FlatList } from "react-native-web";

const MyNetworking = () => {
    useEffect(() => { getMovies(); }, []);
    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState([]);
    const [description, setDescription] = useState('');


    const getMovies = () => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setTitle(json.title);
                setMovies(json.movies);
                setDescription(json.description);
            })
            .catch((error) => { console.error(error); });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{title}</Text>
            <Text style={styles.description}>{description}</Text>

            <Table borderStyle={{ borderWidth: 1, borderColor: '#ccc' }}>
                <Row data={['Id', 'Title', 'Release Year']} style={styles.head} textStyle={styles.text} />
                {
                    movies.map((rowData, index) => (
                        <Row
                            key={index}
                            data={[rowData.id, rowData.title, rowData.releaseYear]}
                        />
                    ))
                }
            </Table>
            {/*
            <FlatList> 
                data={movies}
                renderItem={
                    ({ item }) => {
                        return (
                            <View>
                                <Text>{item.id}</Text>
                                <Text>{item.title}</Text>
                                <Text>{item.releaseYear}</Text>
                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            </FlatList> */}

        </View>



    );
}

export default MyNetworking;
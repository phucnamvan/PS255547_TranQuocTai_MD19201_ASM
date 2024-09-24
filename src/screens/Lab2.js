import {
    View, Text, Button,
    TextInput,
    TouchableOpacity, Image, Pressable
} from 'react-native'
import React, { useState } from 'react'

const Lab2 = (props) => {
    // sử dụng state
    // trò chơi phép toán cộng
    const [numberA, setNumberA] = useState(Math.floor(Math.random() * 5));
    const [numberB, setNumberB] = useState(Math.floor(Math.random() * 5));
    const [result, setResult] = useState(Math.floor(Math.random() * 10))

    const [score, setScore] = useState(0);
    const [best, setBest] = useState(0);

    console.log('.....rendering.....: ')

    const checkResult = (check) => {
        let _result = numberA + numberB;
        if ((check && result == _result) ||
            (!check && result != _result)) {
            setScore(score + 1);
        }
        else {
            setScore(score - 1);
        }
        // update best
        if (score > best) {
            setBest(score);
        }
        // tạo 1 phép toán mới
        setNumberA(Math.floor(Math.random() * 5));
        setNumberB(Math.floor(Math.random() * 5));
        setResult(Math.floor(Math.random() * 10));
    }
    return (
        <View>
            <Text style={{ fontSize: 45 }}>Score: {score}</Text>
            <Text style={{ fontSize: 45 }}>Best: {best}</Text>
            <Text style={{ fontSize: 35 }}>{numberA} + {numberB} = {result}</Text>
            <Button title="Đúng" onPress={() => checkResult(true)} />
            <Button title="Sai" onPress={() => checkResult(false)} />
        </View>
    )
}

export default Lab2